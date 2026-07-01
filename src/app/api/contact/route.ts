import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? "suraj27227@gmail.com",
      subject: `New message from ${data.name}`,
      text: `Name: ${data.name}
Email: ${data.email}
Company: ${data.company ?? "N/A"}

${data.message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Error:", err);
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}