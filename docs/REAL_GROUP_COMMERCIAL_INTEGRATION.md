# Real Group → Commercial Engine integration

The existing `/api/contact` endpoint continues to send emails to
`rgentertainmentmanagement@gmail.com` through Resend. After a successful
Resend response it optionally mirrors the inquiry to Marketing AI Platform.

## Server-only configuration (Vercel environment variables)

- `RESEND_API_KEY` — existing mail sending.
- `CONTACT_FROM_EMAIL` — verified sender domain recommended for production.
- `COMMERCIAL_API_BASE_URL` — **HTTPS** base address of the deployed FastAPI backend.
- `COMMERCIAL_API_KEY` — FastAPI `BACKEND_API_KEY` for server-to-server access.
- `COMMERCIAL_TENANT_KEY` — secret matching the `real_group` entry of backend's
  `COMMERCIAL_TENANT_KEYS_JSON`.

Never use `NEXT_PUBLIC_` prefixes for these secrets. Do not commit them.

## Data contract

- Tenant is fixed server-side: `real_group`.
- Source: `portfolio_contact`.
- External ID: Resend message receipt ID (stable for deduplicated retries).
- Category: known form topic label, otherwise `General inquiry`.
- Customer name and email copied to tenant-scoped commercial ledger.
- Message body and budget are **not** mirrored. They remain in the existing email.
- Optional integration is off until all 3 Commercial variables are configured.
- Mail is confirmed first; CRM failure is logged internally without making the visitor resubmit.
- A CRM failure currently requires manual reconciliation from the Resend email;
  automatic retry/outbox is a separate future enhancement.

## Production acceptance

1. Merge only after the portfolio build/lint checks pass.
2. Deploy the commercial backend with Alembic migration `20261111_0003`.
3. Configure independent, long-lived secret for `real_group` tenant in backend.
4. Configure the 3 Commercial variables on portfolio's Vercel project.
5. Submit an authorized end-to-end inquiry using an internal tester.
6. Confirm Resend receipt and the same external ID in
   `GET /commercial/leads` with `real_group` authenticated headers.
7. Verify `resource_living` credentials cannot read Real Group data.

No Meta campaign or Resource Living Make scenario is changed by this integration.
