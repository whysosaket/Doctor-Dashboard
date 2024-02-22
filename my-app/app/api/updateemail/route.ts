import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const email = body.email;
  // check using regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email", success: false });
  }

  return NextResponse.json({ email, success: true});
}