import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, message, _gotcha } = body;

    // 1. Anti-spam honeypot trap
    if (_gotcha) {
      return NextResponse.json({ success: true, message: "Inquiry received" });
    }

    // 2. Field validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, and Message)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 3. Web3Forms Support (Zero-backend free provider)
    const web3formsKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (web3formsKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: name.trim(),
          email: email.trim(),
          whatsapp: whatsapp?.trim() || "Not provided",
          message: message.trim(),
          subject: `New Portfolio Inquiry from ${name.trim()} (E-Commerce VA)`,
          from_name: "Dexter Balbuena Portfolio",
        }),
      });

      if (!response.ok) {
        throw new Error("External email service returned an error");
      }

      return NextResponse.json({ success: true, delivered: true });
    }

    // 4. Formspree or Custom Endpoint Support
    const customEndpoint =
      process.env.CONTACT_ENDPOINT ||
      process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ||
      process.env.FORMSPREE_ENDPOINT ||
      process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (customEndpoint) {
      const response = await fetch(customEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          whatsapp: whatsapp?.trim() || "Not provided",
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to forward inquiry to custom endpoint");
      }

      return NextResponse.json({ success: true, delivered: true });
    }

    // 5. Default graceful fallback: Log server inquiry and return client-dispatch instructions
    console.log("[Portfolio Inquiry Logged]:", {
      name,
      email,
      whatsapp: whatsapp || "None",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      delivered: false,
      clientDispatch: true,
    });
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { error: "Could not send inquiry. Please reach out via direct WhatsApp or email." },
      { status: 500 }
    );
  }
}
