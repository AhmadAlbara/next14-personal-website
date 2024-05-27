import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const { email, name, subject, message } = await req.json();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.PERSONAL_EMAIL,
        pass: process.env.PERSONAL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.PERSONAL_EMAIL,
      to: process.env.PERSONAL_EMAIL,
      subject: `${subject} - from (${name} - ${email})`,
      text: message,
    };

    await transport.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Message has been sent" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
