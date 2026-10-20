// Dated progress notes per studio project, newest first.
// Updated weekly from each project's ESTADO.md in the central brain (AI-Projects-Control-Plane/snapshots).
// Only shipped, public-safe changes: no metrics, client data or unverified claims.
export type StudioUpdate = { date: string; text: string };

export const studioUpdates: Record<string, StudioUpdate[]> = {
  evolusa: [
    { date: "2026-10-18", text: "The home page now leads with the six-stage Roadmap right after the hero, with numbered stages and a direct path to onboarding." },
    { date: "2026-10-17", text: "Professional profile links are checked for privacy before they are saved or shown, and LinkedIn company links display as public pages." },
    { date: "2026-10-13", text: "Content planner: image upload with automatic JPEG conversion and metadata removal, brand-kit suggestions and CSV/XLSX content-grid import." },
  ],
  belong: [
    { date: "2026-10-18", text: "Goal progress now waits for confirmation before it changes, with a clear message when a save is uncertain." },
    { date: "2026-10-17", text: "The project task board confirms every create, move, approval and assignment before showing it, so people never see a false success." },
    { date: "2026-10-11", text: "Tasks, owners and goal progress are now saved and kept in sync across the community workspace." },
  ],
  "personal-cfo": [
    { date: "2026-10-14", text: "New monthly summary: three key points, a simple comparison of debt, bank balances and investments against last month, a new cover and an Available Savings ratio." },
    { date: "2026-10-08", text: "Live on personalcfo.me with real accounts: sign-up, saving and recovering data were tested end to end." },
  ],
};

export function getStudioUpdates(slug: string) {
  return studioUpdates[slug] ?? [];
}
