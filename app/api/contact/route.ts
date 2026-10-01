import { Resend } from "resend";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: email,
    subject: `New message from ${name}`,
    text: message,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 502 });
  }

  return Response.json({ ok: true });
}
