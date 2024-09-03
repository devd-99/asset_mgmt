// app/api/investor/route.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma';
import { Investor } from '@prisma/client';

export async function GET(): Promise<NextResponse> {
  try {
    const investors: Investor[] = await prisma.investor.findMany();
    return NextResponse.json(investors);
  } catch (error) {
    console.error('Error fetching investors:', error);
    return NextResponse.json(
      { error: 'Error fetching investors' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const data: Investor = await request.json();
    const newInvestor: Investor = await prisma.investor.create({
      data: {
        Investor_Name: data.Investor_Name,
        Amount: data.Amount,
        Details: data.Details,
      },
    });
    return NextResponse.json(newInvestor, { status: 201 });
  } catch (error) {
    console.error('Error creating investor:', error);
    return NextResponse.json(
      { error: 'Error creating investor' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    const data: Investor = await request.json();
    const updatedInvestor: Investor = await prisma.investor.update({
      where: { Investor_Name: data.Investor_Name },
      data: {
        Amount: data.Amount,
        Details: data.Details,
      },
    });
    return NextResponse.json(updatedInvestor);
  } catch (error) {
    console.error('Error updating investor:', error);
    return NextResponse.json(
      { error: 'Error updating investor' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  try {
    const { Investor_Name }: { Investor_Name: string } = await request.json();
    await prisma.investor.delete({
      where: { Investor_Name: Investor_Name },
    });
    return NextResponse.json({ message: 'Investor deleted successfully' });
  } catch (error) {
    console.error('Error deleting investor:', error);
    return NextResponse.json(
      { error: 'Error deleting investor' },
      { status: 500 }
    );
  }
}