// app/api/portfolio/route.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma';
import { Portfolio } from '@prisma/client';

export async function GET(): Promise<NextResponse> {
  try {
    const portfolioItems: Portfolio[] = await prisma.portfolio.findMany();
    return NextResponse.json(portfolioItems);
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return NextResponse.json(
      { error: 'Error fetching portfolio items' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const data: Portfolio = await request.json();
    const newPortfolioItem: Portfolio = await prisma.portfolio.create({
      data: {
        P_ID: data.P_ID,
        Co2E: data.Co2E,
        Estimated_Worth: data.Estimated_Worth,
        Marked_Sold: data.Marked_Sold,
      },
    });
    return NextResponse.json(newPortfolioItem, { status: 201 });
  } catch (error) {
    console.error('Error creating portfolio item:', error);
    return NextResponse.json(
      { error: 'Error creating portfolio item' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    const data: Portfolio = await request.json();
    const updatedPortfolioItem: Portfolio = await prisma.portfolio.update({
      where: { P_ID: data.P_ID },
      data: {
        Co2E: data.Co2E,
        Estimated_Worth: data.Estimated_Worth,
        Marked_Sold: data.Marked_Sold,
      },
    });
    return NextResponse.json(updatedPortfolioItem);
  } catch (error) {
    console.error('Error updating portfolio item:', error);
    return NextResponse.json(
      { error: 'Error updating portfolio item' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  try {
    const { P_ID }: { P_ID: number } = await request.json();
    await prisma.portfolio.delete({
      where: { P_ID: P_ID },
    });
    return NextResponse.json({ message: 'Portfolio item deleted successfully' });
  } catch (error) {
    console.error('Error deleting portfolio item:', error);
    return NextResponse.json(
      { error: 'Error deleting portfolio item' },
      { status: 500 }
    );
  }
}