// app/api/pending-projects/route.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma';
import { PendingProjects } from '@prisma/client';

export async function GET(): Promise<NextResponse> {
  try {
    const pendingProjects: PendingProjects[] = await prisma.pendingProjects.findMany();
    return NextResponse.json(pendingProjects);
  } catch (error) {
    console.error('Error fetching pending projects:', error);
    return NextResponse.json(
      { error: 'Error fetching pending projects' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const data: any = await request.json();

    const newProject: any = await prisma.project.create({
      data: {
        Name: data.Name,
        Owner_Org: data.Owner_Org,
        
      }
    })

    const newPendingProject: PendingProjects = await prisma.pendingProjects.create({
      data: {
        Overall_status: data.Overall_status,
        ICOS: false,
        SDV: false,
        SDG: false
      },
    });
    return NextResponse.json(newPendingProject, { status: 201 });
  } catch (error) {
    console.error('Error creating pending project:', error);
    return NextResponse.json(
      { error: 'Error creating pending project' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    const data: PendingProjects = await request.json();
    const updatedPendingProject: PendingProjects = await prisma.pendingProjects.update({
      where: { P_ID: data.P_ID },
      data: {
        Overall_status: data.Overall_status,
        ICOS: data.ICOS,
        SDV: data.SDV,
        SDG: data.SDG,
        Due_Diligence: data.Due_Diligence,
        Complete: data.Complete,
      },
    });
    return NextResponse.json(updatedPendingProject);
  } catch (error) {
    console.error('Error updating pending project:', error);
    return NextResponse.json(
      { error: 'Error updating pending project' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  try {
    const { P_ID }: { P_ID: number } = await request.json();
    await prisma.pendingProjects.delete({
      where: { P_ID: P_ID },
    });
    return NextResponse.json({ message: 'Pending project deleted successfully' });
  } catch (error) {
    console.error('Error deleting pending project:', error);
    return NextResponse.json(
      { error: 'Error deleting pending project' },
      { status: 500 }
    );
  }
}