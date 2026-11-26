import { NextResponse } from "next/server";

// Receives enquiry, tour and promo form submissions.
// TODO: set ENQUIRY_WEBHOOK_URL (for example a GoHighLevel inbound webhook) so
// submissions reach Mirabilia's CRM. Without it, entries are only logged on the server.
export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const required: Record<string, string[]> = {
    tour: ["name", "email", "phone", "centre"],
    careers: ["firstName", "lastName", "email", "phone", "role"],
    enquiry: ["firstName", "lastName", "email", "phone", "centre"],
    promo: ["firstName", "lastName", "email", "phone", "centre"],
  };
  const formType = typeof data.formType === "string" && data.formType in required ? data.formType : "enquiry";
  const missing = required[formType].filter((k) => typeof data[k] !== "string" || !(data[k] as string).trim());
  if (missing.length) {
    return NextResponse.json({ error: `Missing: ${missing.join(", ")}.` }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
    });
    if (!res.ok) {
      return NextResponse.json({ error: "We couldn't send your message." }, { status: 502 });
    }
  } else {
    console.info("[enquiry]", JSON.stringify(data));
  }

  return NextResponse.json({ ok: true });
}
