# Real Group private commercial dashboard

The route `/operations/leads` is a **private, read-only** operations page.
It never exposes API secrets in the browser and **never** queries EvolUSA or Resource Living databases.
It displays genuine commercial records only when the independent backend is deployed.

## Server-side environment variables (Vercel)
- `REAL_GROUP_ADMIN_PASSWORD`: separate 24+ character random secret. Username is `realgroup`. Browser prompts for HTTP Basic authentication. Use HTTPS only.
- `COMMERCIAL_API_BASE_URL`: HTTPS URL of a running Marketing AI Platform backend with persistent database.
- `COMMERCIAL_API_KEY`: matching backend global X-API-Key secret.
- `COMMERCIAL_TENANT_KEY`: unique per-tenant secret matching `real_group` in the backend's COMMERCIAL_TENANT_KEYS_JSON.

Do not put these values in GitHub or any `NEXT_PUBLIC_` environment variable.
Do not send or paste credentials in chat.

If configuration is missing, the route deliberately fails with 503.
If the backend is down, the route fails closed: there is no demo data pretending to be real leads.
If the admin password is not configured, the route does not disclose any customer records.

### Before real customer submissions
1. Host Marketing AI Platform with an independent persistent database, separate from the EvolUSA Supabase project. Run `alembic upgrade head` using that database.
2. Set backend keys securely and require TLS, firewall/rate limits, backup and monitoring.
3. Set the four server-only Vercel variables above, in the right project and environment.
4. Confirm POST /commercial/leads with an authorized internal test ID, then GET /commercial/leads and GET /commercial/summary.
5. Verify tenant auth prevents cross-business reads.
6. Send one authorized test through the existing /contact form; check matching Resend message ID in Real Group dashboard.
7. Assign a responsible person, verify follow-up and record a real quote. Do not mark email acceptance as a closed deal.

### Limitations
- Page is read-only; updates are available in protected backend API but not exposed in this dashboard.
- HTTP Basic over TLS is suitable for initial owner-only internal access, not multiuser CRM access.
  Add user sessions, MFA, roles, rate limiting and session audit before rolling out to employees/customers.
- Delivery confirmations must come from provider audit logs, not just successful intake.
