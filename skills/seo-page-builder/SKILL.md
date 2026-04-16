---
name: seo-page-builder
description: Build an agentic SEO page system end-to-end: intake, Semrush keyword research, research briefing, artifact selection with token estimates, and artifact generation (sitemap CSV, markdown master template, HTML wireframe, or populated HTML). Use when a user asks to plan or generate SEO service/location page systems, keyword-driven sitemaps, or GEO/AEO-ready local landing page templates in German or English.
---

# SEO Page Builder

Execute the workflow strictly in order. Do not skip, merge, or reorder steps.

## Activation (How to start)

This skill is not always running. Trigger it when the user explicitly asks for SEO page system planning or build work.

Strong trigger phrases:
- "run seo-page-builder"
- "build me a local SEO page system"
- "create a service x location SEO sitemap"
- "generate SEO service pages from keyword research"

When triggered, always begin at STEP 1 intake and do not run any downstream step first.

## Workflow Guardrails

- Ask the full STEP 1 intake before doing work.
- Do not produce artifacts before STEP 2 research unless the user explicitly waives research.
- Keep memory of intake answers. Do not re-ask already provided answers.
- Enforce a maximum of 200 Semrush queries per run unless the user approves more.
- Inside one approved artifact, run to completion without mid-task confirmations.
- Between artifacts or between services, confirm before continuing unless the user explicitly says "all services".

## STEP 1 - Intake

Ask for the full intake in one message. Capture:

- brand name
- website or domain
- country and primary language
- target services
- target locations
- desired modifiers
- page type scope: master pages, geo pages, or both
- output artifact to produce first: A, B, C, or D
- research mode: Semrush, user CSV, or skip research
- CMS or delivery format: Markdown, HTML, WordPress-ready HTML, or CSV
- compliance constraints by vertical
- internal linking requirements
- whether the user wants one service first or all services

Defaults:

- If location is "Rhein-Ruhr default", use `references/copy_blocks.md`.
- If German modifiers are not provided, use `references/modifiers_de.md`.
- If English modifiers are not provided, use `references/modifiers_en.md`.

## STEP 2 - Research

If research is required:

1. Use `references/semrush_browser_agent.md`.
2. Build the service x modifier x location matrix.
3. Collect volume, KD, intent, and CPC.
4. Remove zero-value combinations unless the user explicitly wants full coverage.
5. Rank opportunities by intent and achievable demand.

If Semrush access is unavailable:

- offer the fallback path described in `references/semrush_browser_agent.md`
- warn that fallback data is directional, not authoritative
- proceed only after explicit confirmation

## STEP 3 - Research Brief

Return a short recommendation in concise prose:

- what services and modifiers look viable
- which locations should be Tier 1, Tier 2, and Tier 3
- what should be generated first
- which artifact is the right next step

Use the WhatsApp-style format defined in `references/semrush_browser_agent.md`.

Close with:

`Ready to pick an artifact.`

## STEP 4 - Artifact Selection

Offer one artifact at a time and state the expected output shape.

- Artifact A: sitemap CSV and URL plan
- Artifact B: markdown master page template with copy
- Artifact C: HTML wireframe with placeholders only
- Artifact D: fully populated HTML wireframe with real copy

If the user does not specify an artifact, recommend one based on intent:

- planning or scaling decision -> A
- copy system first -> B
- design or CMS structure first -> C
- launch-ready page output -> D

## STEP 5 - Artifact Generation

Generate the selected artifact using the matching reference files.

### Artifact A

Use `references/artifact_a_sitemap_csv.md`.

### Artifact B

Use:

- `references/artifact_b_markdown_master.md`
- `references/copy_blocks.md`
- `references/schema_templates.md`
- `references/vertical_compliance.md`

### Artifact C

Use:

- `references/artifact_c_wireframe_html.md`
- `references/copy_blocks.md`
- `references/schema_templates.md`

### Artifact D

Use:

- `references/artifact_d_wireframe_populated.md`
- `references/copy_blocks.md`
- `references/schema_templates.md`
- `references/vertical_compliance.md`

## Output Rules

- Preserve the user's requested language.
- Keep service nouns and geo nouns aligned to actual search intent.
- Keep Tier 2 and Tier 3 geo mentions controlled to avoid doorway-page patterns.
- Include schema only where facts are supportable.
- Avoid unverifiable claims, guarantees, or spammy superlatives.

## File Usage

Open only the reference files needed for the chosen step. Do not load the whole folder by default.
