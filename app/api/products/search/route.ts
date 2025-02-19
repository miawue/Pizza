import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") ?? "";

  const products = await prisma.product.findMany({
    where: {
      name: { contains: query, mode: "insensitive" },
    },
    take: 5,
  });

  return NextResponse.json(products);
}
