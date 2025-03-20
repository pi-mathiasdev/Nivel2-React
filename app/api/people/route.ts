import { NextResponse } from "next/server";

export async function GET() {
  try{
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();
    return NextResponse.json(data);
  }
  catch (e) {
    console.error(e);
    return NextResponse.error();
  }
}