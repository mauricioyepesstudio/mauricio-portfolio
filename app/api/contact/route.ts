import { NextResponse } from "next/server";
import { Resend } from "resend";

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

// Remitente: no hay dominio propio todavía, así que por defecto se usa el de pruebas
// de Resend. Cuando exista un dominio verificado en Resend, basta con definir
// CONTACT_FROM_EMAIL en Vercel (p. ej. "Mauricio Yepes <contacto@tudominio.com>").
// Si Resend rechaza ese remitente, se reintenta con el de pruebas para no perder el mensaje.
const FROM_FALLBACK = "Portfolio <onboarding@resend.dev>";
const FROM_PRIMARY = process.env.CONTACT_FROM_EMAIL || FROM_FALLBACK;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "Contact service is not configured." },
        { status: 503 },
      );
    }

    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const budget = typeof body.budget === "string" ? body.budget.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email and message are required." },
        { status: 400 },
      );
    }

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
