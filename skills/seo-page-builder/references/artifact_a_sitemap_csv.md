# Artifact A — Sitemap CSV and URL Plan

Output a build-ready SEO sitemap matrix as CSV.

Requirements:
- One row per target URL.
- Include columns:
  - service
  - modifier
  - location
  - language
  - page_type
  - focus_keyword
  - suggested_slug
  - title_tag
  - meta_description
  - parent_page
  - sibling_link_targets
  - cross_service_target
  - monthly_volume
  - keyword_difficulty
  - intent
  - priority_tier
  - notes
- Keep one URL per search intent.
- Use ASCII slugs.
- Flag Tier 1 pages that need manual enrichment.

Output format:
- One CSV block or one `.csv` file.
- Sorted by priority tier, then opportunity.
