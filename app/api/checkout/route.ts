import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, customer, pricing, promoApplied, tradeInApplied } = body;

    // Simple backend validation
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty. Cannot process checkout." },
        { status: 400 }
      );
    }

    if (!customer || !customer.fullName || !customer.shippingAddress || !customer.email) {
      return NextResponse.json(
        { error: "Missing required customer details (fullName, email, or shippingAddress)." },
        { status: 400 }
      );
    }

    // Simulate backend payment and stock allocation delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const orderNumber = `AERO-ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    const trackingCode = `TRK-UPS-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

    // Estimated delivery date (2 days from now)
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 2);

    return NextResponse.json(
      {
        success: true,
        orderNumber,
        trackingCode,
        estimatedDelivery: deliveryDate.toDateString(),
        pricingSummary: {
          subtotal: pricing?.subtotal || 0,
          discount: pricing?.discount || 0,
          tradeInCredit: pricing?.tradeInCredit || 0,
          tax: pricing?.tax || 0,
          total: pricing?.total || 0,
        },
        message: "Order placed successfully! Thank you for choosing AeroPhone.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred during simulated transaction." },
      { status: 500 }
    );
  }
}
