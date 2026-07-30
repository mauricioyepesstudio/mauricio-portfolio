import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // TODO: wire up to an email provider (Resend, SendGrid, Postmark, etc.)
    // or a CRM/webhook. Example with Resend:
    //
    // await resend.emails.send({
    //   from: "Portfolio <hello@mauricioyepes.com>",
    //   to: "hello@mauricioyepes.com",
    //   subject: `New inquiry from ${data.name}`,
    //   text: `${data.name} (${data.email})\n${data.company ?? ""}\nBudget: ${
    //     data.budget ?? "n/a"
    //   }\n\n${data.message}`,
    // });

    console.log("New contact submission:", data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid submission" },
      { status: 400 }
    );
  }
}
