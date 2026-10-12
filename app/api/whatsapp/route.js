import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const d = await req.json();

    const text =
      `*New Inquiry - Goa Sports Adventure*\n\n` +
      `*Name:* ${d.fullName}\n` +
      `*Email:* ${d.email}\n` +
      `*Phone:* ${d.phone}\n` +
      `*Destination:* ${d.destination}\n` +
      `*Package:* ${d.packages}\n` +
      `*Activities:* ${d.acts}\n` +
      `*Message:* ${d.message || '-'}`;

    const url =
      `https://api.callmebot.com/whatsapp.php` +
      `?phone=${process.env.CALLMEBOT_PHONE}` +
      `&text=${encodeURIComponent(text)}` +
      `&apikey=${process.env.CALLMEBOT_APIKEY}`;

    await fetch(url);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}