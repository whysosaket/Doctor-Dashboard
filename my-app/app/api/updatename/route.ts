import { NextResponse } from "next/server";
import superheroes from "superheroes";

export async function GET(request: Request) {
  const superheroesName = superheroes.random();
  return NextResponse.json({ name: superheroesName, success: true });
}