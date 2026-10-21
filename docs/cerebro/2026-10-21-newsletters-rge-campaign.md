# Full-width newsletters and RGE services campaign
2026-10-21. Owner request: one newsletter below the next at full content width, across all work; prepare Real Group services campaign.
NewsletterFrame no longer caps width420px; image sizes now match actual full-width content. CampaignChapter newsletter collection stays one column at every breakpoint. EditorialChapter's single newsletter also inherits full width. Scrolling and original source images preserved.
Checks: TypeScript,lint,production build passed. Browser QA enumerates production-built cases containing NewsletterFrame: Evenflo3 +Microbeau9, each at390/1440px. Asserts full articlewidth, vertical order, no horizontaloverflow. Six campaignPNG downloads and campaignmobileview passed. No externalemail/social writes.
Campaign: Build your next move. Three concepts Launch/Build/Grow;3feeds1080x1350,3stories1080x1920,editableSVG, captionsEN/ES, galleryandguide. Palette follows actual portfolio tokens; typographic illustrations are not clientperformance proof. No prices or results invented; no paidpromotion activated.
Oneinitialart export had Windows stdin character substitution; fixed usingASCII-safeJSON unicode escapes, PNGs rerendered and inspected.
FinalCI,PR,livecommitandproductionverification are recorded in sharedqueue, not inferred from thisfile. Contactreceipt and channelpublication remain separate.
