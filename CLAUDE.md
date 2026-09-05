# MAURICIO YEPES — PORTFOLIO MASTER SPECIFICATION

## PRIMARY GOAL

Build a premium professional portfolio for Mauricio Yepes focused on Senior Graphic Designer, Art Director, Creative Director, Brand Designer, Digital Designer and Marketing Creative roles, while also presenting his work professionally to potential clients.

The portfolio must feel like a curated creative case-study website, NOT a generic SaaS template and NOT an unfiltered image gallery.

## TECHNOLOGY

Current project stack:
- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

Preserve the existing stack unless there is a strong technical reason to change it.

Use the installed UI/UX Pro Max skill when relevant for:
- UI/UX decisions
- responsive design
- visual hierarchy
- typography
- accessibility
- layout systems
- interaction design
- portfolio presentation

Do not allow the skill to replace the project's content architecture or invent portfolio content.

## CREATIVE DIRECTION

The visual direction must be:

- Premium
- Editorial
- Contemporary
- Sophisticated
- Minimal but visually strong
- Creative-director level
- Typography-led
- Image-led
- Strong whitespace
- Restrained, purposeful motion

Avoid:
- generic SaaS layouts
- excessive gradients
- excessive glassmorphism
- random bento grids
- unnecessary pills
- excessive rounded cards
- decorative UI that competes with the work
- walls of unrelated images

The work must be the protagonist.

## CURRENT PRIORITY PROJECTS

The active portfolio currently focuses on:

1. Resource Living
2. Microbeau
3. Get Lost
4. Evenflo
5. Seafood Delight

Do not automatically add old projects to the live portfolio without reviewing them first.

## ASSET ARCHITECTURE

Portfolio assets live under:

public/projects/

The long-term standard is:

project-slug/
  hero/
  brand/
  campaigns/
    campaign-slug/
      hero/
      logo/
      social/
      print/
      web/
      landing-page/
      email/
      newsletter/
      packaging/
      video/

Not every project or campaign must contain every directory.

Render only content that actually exists.

The existing Resource Living folders already contain valuable campaign organization. Preserve existing source assets and map the current structure to this architecture instead of destructively reorganizing files without approval.

## CAMPAIGN-FIRST STORYTELLING

A project is NOT simply a gallery.

Hierarchy:

PROJECT
→ CASE STUDY
→ CAMPAIGNS / INITIATIVES
→ MEDIA TYPES
→ CURATED ASSETS

Example:

Resource Living
→ Ad Sales Campaign
→ Hero
→ campaign context
→ Social
→ Email/Newsletter
→ Video

Then:

Resource Living
→ Pool Leads Campaign
→ Hero
→ campaign context
→ Social
→ Landing Page
→ Video

Campaign assets must stay together.

Never mix unrelated campaign images or videos merely because they share the same media type.

## ASSET DISCOVERY

Do not maintain giant manually hard-coded arrays such as:

"/projects/project-name/Artboard 1.png"
"/projects/project-name/Artboard 2.png"

Where technically appropriate, use server-side filesystem discovery with Node fs/path.

Filesystem access must remain server-side.

Never import fs/path into client components.

The system should allow future projects to be populated primarily by creating folders and adding assets.

Metadata/configuration may be used for:
- titles
- descriptions
- ordering
- featured assets
- campaign context
- intentional curation

Filesystem discovery and editorial metadata should work together.

## CURATION

Automatic discovery does NOT mean displaying everything.

The portfolio must curate.

General guidance:
- Project hero: 1
- Campaign hero: 1
- Major visual section: approximately 4–12 strong assets
- Videos: approximately 1–6 relevant videos
- Avoid near-duplicates
- Avoid repetitive variants
- Avoid presenting dozens of nearly identical ads

Preserve source files even when they are not displayed.

Never invent performance metrics.

## IMAGE STANDARDS FOR NEW ASSETS

Recommended source dimensions:

Project desktop hero:
2400 × 1350, 16:9

Project mobile hero:
1080 × 1350, 4:5

Campaign hero:
1920 × 1080, 16:9

Wide case-study image:
2400 × 1600, 3:2

Square social:
1080 × 1080, 1:1

Portrait social:
1080 × 1350, 4:5

Story/Reel:
1080 × 1920, 9:16

Landscape advertising:
1200 × 628

Logo:
SVG preferred.
If raster is required, use transparent PNG with approximately 1600px width when source quality permits.

Newsletter/website screenshots:
1200–1920px wide where practical.

Do NOT upscale or unnecessarily regenerate existing assets just to satisfy these recommendations.

## VIDEO

Support:
- 1920 × 1080 landscape
- 1080 × 1920 vertical
- square video when necessary

Use HTML5 video appropriately.

Vertical videos must never be stretched across the full desktop viewport.

Suggested responsive behavior:
- desktop: up to 3 vertical videos per row when appropriate
- tablet: up to 2
- mobile: 1

Landscape videos can receive wider presentation.

Preserve aspect ratio.

Use preload/poster/loading strategies when useful for performance.

## RESPONSIVE REQUIREMENT

Responsive behavior is a mandatory acceptance criterion, not an optional polish phase.

Explicitly test layouts at approximately:

360
390
430
768
1024
1280
1440
1920 px

Requirements:
- no horizontal overflow
- no clipped headings
- no broken navigation
- no overflowing video
- no unusably small controls
- no fixed-width content that breaks mobile
- appropriate typography scaling
- appropriate spacing scaling
- responsive image grids
- comfortable touch targets

Use CSS/Tailwind responsive layout instead of JavaScript viewport hacks whenever possible.

## CASE STUDY STRUCTURE

A strong project page may include:

Project Hero
Project Overview
Role / Services
Challenge
Strategy
Solution
Campaign Chapters
Selected Work
Video
Results
Previous / Next Project

Do not force empty sections.

Campaign chapters should create the primary visual narrative when a project contains multiple campaigns.

## RESOURCE LIVING

Treat Resource Living as a flagship multidisciplinary case study.

Important initiatives currently include:

- Magazine Advertising
- Ad Sales Campaign
- Pool Leads Campaign
- C2 Multimedia Lead Network
- Your Business Here / service campaigns

Prioritize the strongest campaigns.

Do not flood the case study with every repetitive service advertisement.

Show enough work to demonstrate:
- Creative Direction
- Editorial Design
- Advertising
- Lead Generation
- Social Media
- Digital Marketing
- Video
- Integrated campaign thinking

## MICROBEAU

Present as a premium beauty / PMU brand marketing case study.

Keep assets grouped by meaningful campaigns/product initiatives whenever the source files support this.

## EVENFLO

Present as a premium PMU pigment / beauty marketing case study.

Maintain campaign coherence.

## GET LOST

Prioritize the strongest available work across:
- brand identity
- packaging
- product
- campaigns
- website/digital
- events
- social

Only include categories actually supported by source assets.

## SEAFOOD DELIGHT

Present the strongest available branding, food/restaurant marketing, packaging/menu, advertising and social work supported by actual source assets.

## ACCESSIBILITY

Maintain:
- semantic HTML
- meaningful alt text
- keyboard accessibility
- visible focus states
- sufficient contrast
- prefers-reduced-motion support where appropriate

## PERFORMANCE

Optimize portfolio media delivery.

Use next/image appropriately for images.

Avoid loading huge galleries immediately.

Use lazy loading where appropriate.

Videos must not make the initial page unusably heavy.

## SAFETY / SOURCE ASSETS

Never delete, overwrite, rename or destructively reorganize original portfolio assets without explicit approval.

Generated code/config files may be changed normally.

Before large structural changes:
1. inspect git status
2. understand current architecture
3. preserve working functionality

## ENGINEERING QUALITY

Do not patch around architectural problems.

Prefer reusable components and clear types.

Avoid duplicated project-specific rendering logic when a generic campaign/media component is appropriate.

Do not over-engineer.

## VALIDATION

Before declaring any implementation complete:

1. Check TypeScript errors.
2. Run the production build.
3. Fix build errors.
4. Check key pages.
5. Check responsive behavior.
6. Check browser console for obvious errors.
7. Check for missing asset/404 errors.

Do not claim something works unless it was actually tested.

## WORKING STYLE

For significant changes:

1. Inspect.
2. Explain the plan briefly.
3. Implement.
4. Test.
5. Report exactly what changed.

Do not repeatedly ask the user to make low-level technical decisions when a standard professional implementation can reasonably be chosen.
