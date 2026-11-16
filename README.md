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
Add an entry to `desk.json`. `url` is the tool's address on the site; `image` is 1200 × 630.
Set `"soon": true` to show it as "coming soon" without a link.

## Write a Note
1. Copy `notes/_post-template.html` to `notes/your-post-name/index.html` and replace the placeholder text.
   (Files starting with `_` are never published.)
2. Add an entry to `notes.json`:
```json
{ "title": "Post title", "when": "March 2027", "date": "2027-03-01", "url": "notes/your-post-name/",
  "summary": "Two lines on what it covers.", "read": "4 min", "image": "images/notes/your-post-name.jpg" },
```
`image` is optional (1200 × 630).

## Add a Studio piece
Upload the image to `images/studio/` (around 1600 px on the long side keeps the page fast), then add to `studio.json`:
```json
{ "title": "Piece title", "kind": "Painting", "when": "2026", "date": "2026-08-01",
  "image": "images/studio/piece-name.jpg", "alt": "What the image shows, for screen readers",
  "about": "One or two lines on how it was made." },
```
