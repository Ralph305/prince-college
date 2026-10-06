import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, enquiryType, message } = body;

    const errors: Record<string, string> = {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Please provide your full name.";
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please provide a valid email address.";
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      errors.subject = "Please enter an enquiry subject.";
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
          errors
        },
        { status: 400 }
      );
    }

    const ticketId = `TKT-${Math.floor(100000 + Math.random() * 900000)}`;

    console.log(`[Contact] Enquiry logged: ${ticketId} from ${name} (${email}) - ${enquiryType || 'General'}: ${subject}`);

    return NextResponse.json(
      {
        success: true,
        ticketId,
        message: `Thank you for contacting Prince College. Your message has been routed to the relevant faculty office. Reference #${ticketId}.`
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal error occurred. Please call or email the college directly."
      },
      { status: 500 }
    );
  }
}
