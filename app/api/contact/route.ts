import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, department } = body;

    // Simple backend validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are mandatory." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Please submit a valid email address." },
        { status: 400 }
      );
    }

    // Simulate database insertion delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    const ticketId = `AERO-TKT-${Math.floor(100000 + Math.random() * 900000)}`;

    return NextResponse.json(
      {
        success: true,
        ticketId,
        message: "Your message has been received by our support team.",
        details: {
          name,
          email,
          subject: subject || "General Inquiry",
          department: department || "General Support",
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error occurred processing your request." },
      { status: 500 }
    );
  }
}
