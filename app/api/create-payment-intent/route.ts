import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-11-20.acacia", // Updated to latest version
});

const calculateOrderAmount = (items: any[]) => {
  // In a real app, you would query your DB here. 
  // For now, we calculate based on the cart:
  const total = items.reduce((acc: number, item: any) => acc + item.price * item.qty, 0);
  return Math.round(total * 100); // Convert to cents (e.g. 20.00 -> 2000)
};

export async function POST(request: Request) {
  try {
    const { items } = await request.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "eur", // Important for Italy
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}