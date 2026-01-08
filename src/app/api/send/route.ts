import { Resend } from "resend";
import { GetInTouchTemplate } from "./templates/get-in-touch";
import { NextResponse } from "next/server";

type ResendSendEmailResponse = Awaited<ReturnType<typeof resend.emails.send>>;

const resend = new Resend(process.env.RESEND_API_KEY!);

// Validation regex for email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rate limiting map (simple in-memory solution)
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // requests per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in ms

// Disable caching for this API route
export const revalidate = 0;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip);

  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

async function sendEmail({
  from,
  to,
  subject,
  react,
}: {
  from: string;
  to: string | string[];
  subject: string;
  react: React.ReactElement;
}): Promise<ResendSendEmailResponse> {
  return await resend.emails.send({ from, to, subject, react });
}

export async function POST(req: Request) {
  try {
    // Get client IP for rate limiting
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Check rate limit
    // if (!checkRateLimit(ip)) {
    //   return NextResponse.json(
    //     { error: true, message: "Too many requests. Please try again later." },
    //     { status: 429 }
    //   );
    // }

    // Validate Content-Type
    const contentType = req.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: true, message: "Content-Type must be application/json" },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    // Validate required fields
    if (!email || !firstName || !lastName || !message) {
      return NextResponse.json(
        { error: true, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate and sanitize input lengths
    if (
      firstName.length > 50 ||
      lastName.length > 50 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: true, message: "Input fields exceed maximum length" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: true, message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Trim whitespace
    const cleanData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    const { data, error } = await sendEmail({
      from: "Bishesh from Portfolio <onboarding@resend.dev>",
      to: ["bishesh.tuladhar1@gmail.com"],
      subject: "Someone want to get in touch with you",
      react: GetInTouchTemplate({
        firstName: cleanData.firstName,
        lastName: cleanData.lastName,
        email: cleanData.email,
        message: cleanData.message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: true, message: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email API error:", error);
    return NextResponse.json(
      { error: true, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function OPTIONS(req: Request) {
  return NextResponse.json(null, {
    headers: {
      Allow: "POST, OPTIONS",
    },
  });
}

export async function GET() {
  return NextResponse.json(
    { error: true, message: "Method not allowed. Use POST to send emails." },
    { status: 405 }
  );
}

export const runtime = "edge";
