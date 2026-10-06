import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact";

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

// Remitente con dominio propio. Requiere mauricioyepes.com verificado en Resend;
// si Resend lo rechaza, se reintenta con el remitente de pruebas para no perder el mensaje.
const FROM_PRIMARY =
  process.env.CONTACT_FROM_EMAIL ??
  "Mauricio Yepes <contacto@mauricioyepes.com>";
const FROM_FALLBACK = "Portfolio <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "Contact service is not configured." },
        { status: 503 },
      );
    }

    const body = await req.json().catch(() => undefined);
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Please provide valid contact details and project information." },
        { status: 400 },
      );
    }
    const { name, email, company = "", budget = "", message } = parsed.data;

    const resend = new Resend(apiKey);

    const send = (from: string) =>
      resend.emails.send({
        from,
        to: "rgentertainmentmanagement@gmail.com",
        replyTo: email,
        subject: `New Portfolio Inquiry from ${name}`,
        html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>

        <p><strong>Email:</strong> ${escapeHtml(email)}</p>

        <p><strong>Company:</strong> ${escapeHtml(company || "-")}</p>

        <p><strong>Budget:</strong> ${escapeHtml(budget || "-")}</p>

        <hr/>

        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
      });

    let { error } = await send(FROM_PRIMARY);
    if (error && FROM_PRIMARY !== FROM_FALLBACK) {
      console.error("Contact send failed with primary sender, retrying", error);
      ({ error } = await send(FROM_FALLBACK));
    }

    if (error) {
      return NextResponse.json(error, { status: 500 });
    }

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
