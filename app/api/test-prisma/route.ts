import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    const users = await prisma.user.findMany();
    const products = await prisma.product.findMany({
      include: {
        category: true,
        createdBy: true,
        images: true,
        variants: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Prisma is working",
      data: {
        categories,
        users,
        products,
      },
    });
  } catch (error) {
    console.error("Prisma test error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Prisma test failed",
      },
      { status: 500 }
    );
  }
}