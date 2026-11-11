/**
 * Optional, server-only mirror of successful contact requests into Marketing AI Platform.
 * Resend remains the source of truth for first notification; failure here must never
 * turn an already-delivered user message into a failed submission.
 */
export type CommercialContact = {
  externalId: string;
  name: string;
  email: string;
  category: string;
};

export async function mirrorCommercialContact(contact: CommercialContact): Promise<"recorded" | "disabled" | "failed"> {
  const base = process.env.COMMERCIAL_API_BASE_URL?.trim();
  const apiKey = process.env.COMMERCIAL_API_KEY?.trim();
  const tenantKey = process.env.COMMERCIAL_TENANT_KEY?.trim();

  if (!base || !apiKey || !tenantKey) return "disabled";
  let destination: URL;
  try {
    destination = new URL("/commercial/leads", base);
  } catch {
    console.error("Commercial intake: invalid API URL");
    return "failed";
  }
  if (destination.protocol !== "https:" && !(process.env.NODE_ENV !== "production" && destination.hostname === "localhost")) {
    console.error("Commercial intake: secure HTTPS endpoint required");
    return "failed";
  }

  try {
    const result = await fetch(destination.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
        "X-Commercial-Tenant": "real_group",
        "X-Commercial-Tenant-Key": tenantKey,
      },
      body: JSON.stringify({
        tenant_id: "real_group",
        source: "portfolio_contact",
        external_id: contact.externalId,
        category: contact.category || "General inquiry",
        customer_name: contact.name,
        customer_email: contact.email,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(3500),
    });
    if (!result.ok) {
      console.error("Commercial intake failed", { status: result.status });
      return "failed";
    }
    return "recorded";
  } catch {
    console.error("Commercial intake unavailable");
    return "failed";
  }
}
