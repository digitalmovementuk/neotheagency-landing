# Semrush Browser Agent Playbook (STEP 2)

Use user's browser-session Semrush access.

## Pre-run message
Send: "Opening Semrush in browser. Will take 3-8 min depending on matrix size."

## Query generation
For each service x modifier x location, run:
- Base: `{service}`
- Modifier test: `{modifier} {service}` and `{service} {modifier}` (keep higher volume)
- Geo: `{service} {location}`
- Modifier+geo: `{service} {modifier} {location}`

Collect per query:
- monthly volume
- KD
- intent
- CPC

Track rows in in-memory CSV.

## Batch cap
- Estimate query count before run.
- If >200 queries, ask user approval before continuing.

## Failure handling
If blocked, rate-limited, or hit 2FA:
1. Save partial results.
2. Report missing combinations.
3. Ask: retry / skip missing / manual CSV upload.

## Fallback path (no Semrush access)
- Offer web-search fallback (autocomplete + PAA scraping).
- Warn: directional only, not authoritative volume.
- Proceed only after explicit user confirmation.

## STEP 3 brief format
Return short WhatsApp-style prose:
- no tables
- no emojis
- no markdown headers
- short lines
- dash bullets for ranked sections
- close with "Ready to pick an artifact."
