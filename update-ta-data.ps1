# update-ta-data.ps1 — refresh ta-data.js from the GitHub public API.
#
# What it does:
#   1. Fetches all of theo-armour's repos and organizations.
#   2. Fetches every organization's repo list via the SEARCH API (its own rate
#      limit, batched 5 orgs per query — the plain API's 60/hour can't cover 35 orgs).
#   3. Preserves your curation: 'pick' and 'note' are merged in from the existing file.
#   4. Writes ta-data.js here and copies it to the refactor repo.
#
# Run it from anywhere:  pwsh -File update-ta-data.ps1
# Optional: set $env:GH_TOKEN to a read-only token for higher rate limits.

$ErrorActionPreference = 'Stop'
$owner = 'theo-armour'
$here = $PSScriptRoot
$dataPath = Join-Path $here 'ta-data.js'
$alsoCopyTo = @(
    'G:\My Drive\2026-theo-github\theo-armour-sandbox\tootoo-simple\ta-data.js',
    'G:\My Drive\2026-theo-github\theo-armour-2026-ta-gh-io-refactor\ta-data.js'
)

$headers = @{ 'User-Agent' = 'ta-data-refresh'; 'Accept' = 'application/vnd.github+json' }
if ($env:GH_TOKEN) { $headers['Authorization'] = "Bearer $env:GH_TOKEN"; Write-Output 'Using GH_TOKEN.' }

# ── 0. pre-flight: this run needs ~40 plain API calls; wait out the hourly limit
#       rather than produce a half-fetched file (checking the limit itself is free) ──
$limits = Invoke-RestMethod -Headers $headers -Uri 'https://api.github.com/rate_limit'
if ($limits.resources.core.remaining -lt 45) {
    $resetAt = [DateTimeOffset]::FromUnixTimeSeconds($limits.resources.core.reset)
    $waitSec = [Math]::Max(5, [int]($resetAt - [DateTimeOffset]::Now).TotalSeconds + 10)
    Write-Output "Only $($limits.resources.core.remaining) API calls left this hour — waiting $([int][Math]::Ceiling($waitSec / 60)) min for the reset…"
    Start-Sleep -Seconds $waitSec
}

# ── 1. remember existing data before anything else: curation (pick/note) to carry
#       over, and whole org entries to fall back on if an org fetch fails ──
$curation = @{}
$oldOrgs = @{}
$oldOrgCount = 0
if (Test-Path $dataPath) {
    $raw = Get-Content $dataPath -Raw
    $json = $raw -replace '(?s)^.*?const TA_DATA =\s*', '' -replace ';\s*$', ''
    $old = $json | ConvertFrom-Json
    foreach ($e in $old.entries) {
        $kind = if ($e.type -eq 'org') { 'org' } else { 'mine' }
        $curation["$kind|$($e.name)"] = @{ pick = [bool]$e.pick; note = [string]$e.note }
        if ($e.type -eq 'org') { $oldOrgs[$e.name] = $e; $oldOrgCount++ }
    }
    Write-Output "Curation carried over: $(@($curation.Values | Where-Object { $_.pick }).Count) picks."
}

# ── 2. the owner's repos (paged, 100 per page) ──
$repos = @()
$page = 1
do {
    $batch = Invoke-RestMethod -Headers $headers -Uri "https://api.github.com/users/$owner/repos?per_page=100&sort=created&page=$page"
    $repos += $batch
    $page++
} while ($batch.Count -eq 100)
Write-Output "My repos: $($repos.Count)"

# ── 3. the orgs: public memberships, then each org's profile ──
$orgLogins = (Invoke-RestMethod -Headers $headers -Uri "https://api.github.com/users/$owner/orgs?per_page=100") | ForEach-Object { $_.login }
Write-Output "Orgs: $($orgLogins.Count)"

$entries = @()
foreach ($r in $repos) {
    $kind = if ($r.fork) { 'fork' } else { 'repo' }
    $kept = $curation["mine|$($r.name)"]
    $entries += [ordered]@{
        type        = $kind
        name        = $r.name
        url         = $r.html_url
        description = $r.description
        homepage    = $r.homepage
        created     = $r.created_at.ToString('yyyy-MM-dd')
        updated     = $r.pushed_at.ToString('yyyy-MM-dd')
        stars       = $r.stargazers_count
        pick        = if ($kept) { $kept.pick } else { $false }
        note        = if ($kept) { $kept.note } else { '' }
    }
}

foreach ($login in $orgLogins) {
    Start-Sleep -Milliseconds 300
    try {
        $o = Invoke-RestMethod -Headers $headers -Uri "https://api.github.com/orgs/$login"
        $kept = $curation["org|$($o.login)"]
        $entries += [ordered]@{
            type        = 'org'
            name        = $o.login
            url         = $o.html_url
            description = $o.description
            homepage    = $o.blog
            created     = $o.created_at.ToString('yyyy-MM-dd')
            updated     = $o.created_at.ToString('yyyy-MM-dd')
            repos       = $o.public_repos
            pick        = if ($kept) { $kept.pick } else { $false }
            note        = if ($kept) { $kept.note } else { '' }
        }
    } catch {
        if ($oldOrgs.ContainsKey($login)) {
            $entries += $oldOrgs[$login]
            Write-Warning "Org $login fetch failed — kept the previous data."
        } else {
            Write-Warning "Org $login failed and has no previous data: $_"
        }
    }
}

# ── 4. every org's repo list, via the search API (5 orgs per query) ──
$byOrg = @{}
for ($i = 0; $i -lt $orgLogins.Count; $i += 5) {
    $group = $orgLogins[$i..([Math]::Min($i + 4, $orgLogins.Count - 1))]
    $q = 'fork:true+' + (($group | ForEach-Object { "org:$_" }) -join '+')
    $page = 1
    $got = 0
    do {
        $result = Invoke-RestMethod -Headers $headers -Uri "https://api.github.com/search/repositories?q=$q&per_page=100&page=$page"
        foreach ($r in $result.items) {
            $login = $r.owner.login
            if (-not $byOrg.ContainsKey($login)) { $byOrg[$login] = @() }
            $byOrg[$login] += [ordered]@{
                name        = $r.name
                url         = $r.html_url
                description = $r.description
                homepage    = $r.homepage
                created     = $r.created_at.ToString('yyyy-MM-dd')
                updated     = $r.pushed_at ? $r.pushed_at.ToString('yyyy-MM-dd') : $r.created_at.ToString('yyyy-MM-dd')
                stars       = $r.stargazers_count
                fork        = $r.fork
            }
        }
        $got += $result.items.Count
        $page++
        Start-Sleep -Seconds 8   # search API allows 10 queries/minute anonymously
    } while ($got -lt $result.total_count -and $result.items.Count -gt 0)
    Write-Output "Org repos ($($group -join ', ')): $got"
}

foreach ($e in $entries) {
    if ($e.type -ne 'org') { continue }
    # only overwrite a repo list the search actually returned; otherwise keep the old one
    if ($byOrg.ContainsKey($e.name)) {
        $e.repoList = @(@($byOrg[$e.name]) | Sort-Object { $_.updated } -Descending)
    } elseif ($null -eq $e.repoList) {
        $e.repoList = @()
    }
}

# ── 5. sanity check, then assemble + write ──
$newOrgCount = @($entries | Where-Object { $_.type -eq 'org' }).Count
if ($newOrgCount -lt $oldOrgCount) {
    Write-Error "Refusing to write: new data has $newOrgCount orgs, previous had $oldOrgCount. Nothing was changed."
    exit 1
}
$entries = $entries | Sort-Object { $_.created }
$data = [ordered]@{
    meta = [ordered]@{
        owner    = $owner
        snapshot = (Get-Date).ToString('yyyy-MM-dd')
        source   = 'GitHub public API, assembled by update-ta-data.ps1'
    }
    entries = $entries
}
$body = "// Theo's GitHub material ~ generated by update-ta-data.ps1, curated by hand`n" +
        "// Edit 'pick' and 'note' freely — refreshes preserve them. The rest is API data.`n" +
        "const TA_DATA =`n" + ($data | ConvertTo-Json -Depth 6) + ";`n"
Set-Content -Path $dataPath -Encoding UTF8 -Value $body
Write-Output "Wrote $dataPath"

foreach ($target in $alsoCopyTo) {
    if (Test-Path (Split-Path $target)) { Copy-Item $dataPath $target; Write-Output "Copied to $target" }
    else { Write-Warning "Skipped missing target: $target" }
}

$orgRepoTotal = ($byOrg.Values | ForEach-Object { $_.Count } | Measure-Object -Sum).Sum
Write-Output "Done: $($repos.Count) repos + $($orgLogins.Count) orgs + $orgRepoTotal org repos · snapshot $($data.meta.snapshot)"
