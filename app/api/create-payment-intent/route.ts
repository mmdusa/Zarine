// app/api/create-payment-intent/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const calculateOrderAmount = (items: any[]) => {
  const total = items.reduce(
    (acc: number, item: any) => acc + item.price * item.qty,
    0
  );
  return Math.round(total * 100); // euros → cents
};

export async function POST(request: Request) {
  try {
    const { items } = await request.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "eur",
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message ?? "Stripe error" },
      { status: 500 }
    );
  }
}
