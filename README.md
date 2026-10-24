# theo-armour.github.io

Theo Armour's home page ~ one place for everything: every repository, every organization, decades of work.

**Live:** [theo-armour.github.io](https://theo-armour.github.io)

## What this is

A single-file GitHub repo browser (a single-user build of [TooToo](https://github.com/pushme-pullyou/tootoo)) dedicated to theo-armour:

- The sidebar's 📚 shelf lists every repository, newest activity first, with `theo-armour.github.io` pinned on top.
- The 🏛️ organizations row renders [`organizations.md`](organizations.md) — descriptions plus site + GitHub links for all the organizations.
- Click a repo to browse its files; click a file to read it rendered; ↗ opens the live GitHub Pages copy.

## Files

- `index.html` — the app (vanilla HTML/CSS/JS, single file, no build step)
- `ta-data.js` — the data: all repos, orgs, and each org's repo list, from the GitHub public API
- `organizations.md` — generated from the data, then hand-edited
- `update-ta-data.ps1` — refreshes `ta-data.js`; preserves hand-written `pick`/`note` curation
- `theo-logo.ico` — the mark

Development happens in the `tootoo-simple` folder of the sandbox repo; this repo carries the deployed copy.

## Changelog

### 2026-10-24

- First release: single-user TooToo becomes the home page
