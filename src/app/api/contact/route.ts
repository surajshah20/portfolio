import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("[contact] Warning: RESEND_API_KEY is not defined.");
      return NextResponse.json(
        { ok: false, error: "Email service is temporarily unconfigured. Please email directly." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { data: resultData, error: sendError } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? "suraj27227@gmail.com",
      subject: `New portfolio inquiry from ${data.name}`,
      text: `Name: ${data.name}
Email: ${data.email}
Company: ${data.company ?? "N/A"}

Message:
${data.message}`,
    });

    if (sendError) {
      console.error("[contact] Resend error:", sendError);
      return NextResponse.json(
        { ok: false, error: sendError.message || "Failed to deliver email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: resultData?.id });
  } catch (err) {
    console.error("[contact] Error:", err);
    return NextResponse.json({ ok: false, error: "Invalid request payload." }, { status: 400 });
  }
}
