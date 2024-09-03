import { NextResponse } from 'next/server';
import prisma from '../../prisma';

export async function GET() {
  console.log('getPendingProjects.js');
  try {
    const pendingProjects = await prisma.pendingProjects.findMany();
    console.log('Pending projects:', pendingProjects);
    return NextResponse.json(pendingProjects);
  } catch (error) {
    console.error('Error fetching pending projects:', error);
    return NextResponse.json(
      { error: 'Error fetching pending projects' },
      { status: 500 }
    );
  }
}