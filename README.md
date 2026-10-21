# Gideon Anthony · Independent Equity Research

Live site: https://gidant12-svg.github.io

## Adding a new report

1. Upload the PDF into the `reports/` folder (Add file → Upload files). Name it like `TICKER_Initiation_MonYYYY.pdf`.
2. Open `reports.json`, click the pencil icon, and paste a new entry at the top of the list (keep the comma between entries):

```json
  {
    "company": "Company Name Inc.",
    "ticker": "TICK",
    "exchange": "NYSE",
    "sector": "Sector",
    "rating": "BUY",
    "target": "$100.00",
    "price": "$80.00",
    "upside": "+25.0%",
    "date": "2026-03-01",
    "thesis": "One or two sentences on why the market is wrong.",
    "scenarios": { "bear": "$60.00", "base": "$95.00", "bull": "$130.00" },
    "methods": ["DCF", "EV/EBITDA comps", "Scenarios"],
    "pages": 20,
    "file": "reports/TICK_Initiation_Mar2026.pdf"
  },
```

3. Commit. The site updates within about a minute. Reports are sorted by `date` automatically, and ratings containing BUY, HOLD or SELL/UNDERPERFORM get their own colours.
