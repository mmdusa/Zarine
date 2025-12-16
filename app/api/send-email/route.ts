import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // ✅ Do NOT access env at module scope
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Resend API key not configured" },
        { status: 500 }
      );
    }

    // ✅ Create Resend ONLY at runtime
    const resend = new Resend(apiKey);

    const { email } = await request.json();

    const data = await resend.emails.send({
      from: "Zarine <onboarding@resend.dev>", // OK until domain verified
      to: [email],
      subject: "Welcome to Zarine - Order Confirmation",
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h1 style="color: #D4AF37;">Thank you for your order!</h1>
          <p>We are thrilled to have you as a customer.</p>
          <p>Your saffron is being prepared with care and will be shipped soon.</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888;">Zarine - Persian Treasures</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message ?? "Email send failed" },
      { status: 500 }
    );
  }
}
