import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, courseSlug, intendedYear, personalStatement } = body;

    // Validation
    const errors: Record<string, string> = {};

    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      errors.fullName = "Please provide your full legal name.";
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please provide a valid email address.";
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      errors.phone = "Please provide a valid contact telephone number.";
    }

    if (!courseSlug || typeof courseSlug !== "string") {
      errors.courseSlug = "Please select an intended course of study.";
    }

    if (!intendedYear || typeof intendedYear !== "string") {
      errors.intendedYear = "Please select your intended entry year.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the errors in the form.",
          errors
        },
        { status: 400 }
      );
    }

    // Generate reference code
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceNumber = `PCL-2026-${randomSuffix}`;

    // Simulated persistence log
    console.log(`[Admissions] New application received: ${referenceNumber} for ${fullName} (${email}) - Course: ${courseSlug}`);

    return NextResponse.json(
      {
        success: true,
        referenceNumber,
        message: `Thank you, ${fullName}. Your preliminary application for Prince College London has been received. Our Admissions team will contact you within 2 working days.`,
        data: {
          fullName,
          email,
          courseSlug,
          intendedYear,
          submissionDate: new Date().toISOString()
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Admissions submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal error occurred while processing your application. Please try again."
      },
      { status: 500 }
    );
  }
}
