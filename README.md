# theo-armour.github.io

Theo Armour's home page: one place for every repository, every organization, and decades of work.

**Live:** [theo-armour.github.io](https://theo-armour.github.io)

## What this is

A single-file GitHub repo browser, built from [TooToo](https://github.com/pushme-pullyou/tootoo) and dedicated to one owner, theo-armour.

The left side has two panels:

- **Repo shelf** (top): every repository, in this order:
  - 📘 `theo-armour.github.io` (home) first
  - then the ⭐ favorites
  - then everything else, most recently active first

  Private repos appear by name with a 🔒. A 🏛️ **organizations** row opens [`organizations.md`](organizations.md), which has a description and site and GitHub links for every organization.
- **File tree** (bottom): the files of whichever repo you picked. Dated backups and housekeeping files are hidden.

The right side shows the selected file, rendered. Each repo opens on its README, preferring `README <reponame>.md` when it exists.

## Using it

- **Click** a repo to browse it, or a file to read it.
- **Keyboard:** ↑/↓ move through the shelf or the tree; → or Enter opens the selection; `/` jumps to the file filter.
- **↗** opens the file's live GitHub Pages copy, so an `index.html` runs instead of showing source. Use the `</>` button to read source inside the app.
- **Header links:** the logo goes to github.com/theo-armour, the owner name to the home site, and the repo name to that repo's live site.
- **Deep links:** `theo-armour.github.io/?repo=<name>` opens any repo directly.
- **Private repos** need a GitHub token: click ⚙️ and paste one. A read-only, fine-grained token is all the app needs.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The app: vanilla HTML, CSS and JavaScript in one file, no build step |
| `ta-data.js` | The data behind the shelf (see below) |
| `ta-data-refresh.html` | Rebuilds `ta-data.js` from GitHub, in the browser |
| `organizations.md` | The organizations page: generated once, then hand-edited |
| `theo-logo.ico` | The mark |

### The data: `ta-data.js`

```js
const TA_DATA = {
  meta:  { owner, snapshot, source },
  repos: [ { name, url, description, homepage, private, fork, created, updated, stars, pick, note } ],
  orgs:  [ { name, url, description, homepage, created, pick, note, repoList: [ … ] } ]
};
```

- **Yours to edit:** `pick` (true makes it a ⭐ favorite) and `note`. Refreshes keep them.
- **From GitHub:** everything else. A refresh overwrites hand edits there.
- **Private repos** contribute their name only. Descriptions are left blank because this file is public.

### Refreshing the data

Do this after adding, renaming or deleting repos, joining an organization, or every week or two to keep the "most recently active" order fresh.

1. Open `ta-data-refresh.html`, either from this folder or on the live site, wherever you saved your token in the app. It finds that token automatically. Without a token you get public data only.
2. Click **▶ Fetch from GitHub**.
3. Click **💾 Save ta-data.js** and save over the file in this folder.
4. Commit and push.

The refresh never makes the data worse. It keeps your picks and notes, keeps an organization's previous data if GitHub fails to return it, and refuses to produce fewer organizations than before.

## Development

Changes are made and tested in the `tootoo-simple` folder of the [sandbox repo](https://github.com/theo-armour/sandbox), then copied here. This copy is maintained by hand and is not part of the TooToo sync pipeline, so it doesn't automatically pick up changes made to canonical TooToo.

## Changelog

### 2026-10-25

- Add `ta-data-refresh.html`: refresh the data from any browser; retire `update-ta-data.ps1`
- `ta-data.js` splits into separate `repos` and `orgs` lists
- ⭐ favorites pinned at the top of the shelf; private repos shown by name with 🔒
- Maroon theme; dated backups and plumbing files hidden from file trees; root `index.html` hidden
- README picker prefers `README <reponame>.md`; arrow-key navigation on the shelf
- Security: header links escaped; organizations page uses the hardened markdown sanitizer

### 2026-10-24

- First release: single-user TooToo becomes the home page
