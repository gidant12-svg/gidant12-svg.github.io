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

## Art & Design (the page at /studio/)
Everything on the page comes from `art.json`: two **collections** (The Sky Is Not the Limit, then Koi) and the **journey** (Earlier Work).
Images live in `images/art/<piece>/` as `01.jpg` (1600 px) plus `01-sm.jpg` (720 px); videos in `media/art/<piece>/`.

**Add a piece to a collection:** upload the images, then add an entry to that collection's `"works"`:
```json
{ "id": "new-piece", "title": "Piece title", "date": "March 2027", "medium": "Hoodie", "layout": "lookbook",
  "text": "One or two lines shown beside the work.",
  "note": "Optional: a reflection, shown inside Story and process.",
  "credits": [["Photographer", "@name"], ["Model", "@name"]],
  "images": [ { "src": "images/art/new-piece/01.jpg", "sm": "images/art/new-piece/01-sm.jpg", "w": 1280, "h": 1600, "alt": "What the image shows" } ],
  "process": [ { "src": "...", "sm": "...", "w": 1200, "h": 1200, "caption": "First sketch", "alt": "..." } ] },
```
`layout` is one of `feature` (one large image), `pair`, `lookbook` (one large + a grid), `details` (close-ups) or `video`.
"Story and process" only appears when a piece has a `note`, `credits`, `process` images or extra `videos`.

**Add to Earlier Work:** add an entry to `"journey"` with a `"year"`; it is placed under that year automatically.

## After changing `assets/site.css` or `assets/site.js`
Browsers keep old copies for a few minutes. Bump the `?v=` number on the `site.css` / `site.js` links in every page
(search the repo for `?v=`) so visitors get the new version straight away.
