# Gideon Anthony · Portfolio

Live site: https://gidant12-svg.github.io

| Page | Address | Filled from |
|---|---|---|
| Portfolio (landing) | `/` | everything below, plus `site.json` |
| Calls | `/calls/` | `reports.json`, `timeline.json` |
| Desk | `/desk/` | `desk.json` (the Analyst Atlas lives in `desk/atlas/`) |
| Notes | `/notes/` | `notes.json` |
| Studio | `/studio/` | `studio.json` |

Every change below goes live about a minute after you commit.

## Contact links
Open `site.json` and fill in `linkedin` (your full profile URL) and `email`. Empty fields are hidden.

## Change a card picture on the landing page
Replace the file in `images/cards/` with a new one **with the same name** (`calls.jpg`, `desk.jpg`, `notes.jpg`, `studio.jpg`).
Make it 1200 × 630 px. Alternatives are in `images/cards/options/`; to use one, copy it over the default name.

## Add a new call
1. Upload the PDF into `reports/` (Add file → Upload files). Name it like `TICKER_Initiation_MonYYYY.pdf`.
2. Open `reports.json`, click the pencil, and paste a new entry at the top (keep the comma between entries):
```json
{
  "company": "Company Name Inc.", "ticker": "TICK", "exchange": "TSX", "sector": "Sector",
  "written": "March 2027", "date": "2027-03-01", "format": "5-page note",
  "rating": "BUY", "target": "C$100.00", "price": "C$80.00", "upside": "+25.0%",
  "thesis": "One or two sentences on why the market is wrong.",
  "context": "Optional: what was different about this one.",
  "scenarios": { "bear": "C$60.00", "base": "C$100.00", "bull": "C$130.00" },
  "methods": ["DCF", "EV/EBITDA comps", "Scenarios"],
  "file": "reports/TICK_Initiation_Mar2027.pdf"
},
```
Optional: `"deck": "reports/..._Deck.pdf"` and `"deckPpt": "reports/..._Deck.pptx"`.
The newest call automatically becomes the **Latest call** on the landing page.
Also add its link to the two `<noscript>` lines (in `index.html` and `calls/index.html`) so the report is reachable without JavaScript.

## Add a milestone (learning, coffee chats, a call in progress)
Open `timeline.json` and add an entry. `date` (YYYY-MM-DD) sets the order; `when` is the label shown.
Set `"current": true` on a call you are writing now: it shows at the top of Calls and as "In progress".
```json
{ "when": "Spring 2027", "date": "2027-04-01", "tag": "Learning", "title": "Short title",
  "subtitle": "One line shown when collapsed", "body": "Two or three sentences shown when expanded." },
```

## Add a Desk tool
The Excel workbook lives in `desk/excel/` (page + the .xlsx). To publish a new version, upload the new file over `desk/excel/Excel_for_Finance_Intern_to_VP.xlsx` with the same name.

Add an entry to `desk.json`. `url` is the tool's address on the site; `image` is 1200 × 630.
Set `"soon": true` to show it as "coming soon" without a link.

## Write a blog post (Notes)
Notes is the blog: your investing journey, lessons from analysts, and things learned through life.
Posts are grouped into **collections** (the book covers on the Notes page): `journey`, `analysts` and `life`.

1. Copy `notes/_post-template.html` to `notes/your-post-name/index.html` and replace the text in CAPITALS.
   (Files starting with `_` are never published.)
2. In `notes.json`, add the post inside `"posts": [ ... ]`:
```json
{ "title": "Post title", "when": "March 2027", "date": "2027-03-01", "url": "notes/your-post-name/",
  "read": "4 min", "collection": "journey", "featured": true },
```
`featured: true` puts the post under **Start here**; every post appears under **Latest posts** automatically.
To add or rename a collection, edit `"collections"` in `notes.json` (a new one also needs a cover colour in `assets/site.css`, class `bk-yourid`).

## Add to Studio
Studio has two sections: **Finished work** and **Process**. Upload images to `images/studio/`
(around 1600 px on the long side keeps the page fast), then add an entry to `studio.json`.

A finished piece:
```json
{ "type": "finished", "title": "Piece title", "kind": "Painting", "when": "2026", "date": "2026-08-01",
  "image": "images/studio/piece-name.jpg", "alt": "What the image shows, for screen readers",
  "about": "One or two lines about the piece." },
```

A process (shown as numbered steps, left to right):
```json
{ "type": "process", "title": "How the astronaut charm piece was made", "kind": "Clothing", "when": "2026", "date": "2026-08-01",
  "about": "A short intro to the process.",
  "steps": [
    { "image": "images/studio/charm-sketch.jpg", "caption": "First sketch" },
    { "image": "images/studio/charm-test.jpg", "caption": "Test placement on the knit" },
    { "image": "images/studio/astronaut-charm.jpg", "caption": "Finished" }
  ] },
```

## After changing `assets/site.css` or `assets/site.js`
Browsers keep old copies for a few minutes. Bump the `?v=` number on the `site.css` / `site.js` links in every page
(search the repo for `?v=`) so visitors get the new version straight away.
