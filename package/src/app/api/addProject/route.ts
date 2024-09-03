// app/api/project-details/route.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma';
import { Project_Details } from '@prisma/client';

export async function GET(): Promise<NextResponse> {
  try {
    const projectDetails: Project_Details[] = await prisma.project_Details.findMany();
    return NextResponse.json(projectDetails);
  } catch (error) {
    console.error('Error fetching project details:', error);
    return NextResponse.json(
      { error: 'Error fetching project details' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const data: Project_Details = await request.json();
    const newProjectDetails: Project_Details = await prisma.project_Details.create({
      data: {
        P_ID: data.P_ID,
        Name: data.Name,
        Owner_Org: data.Owner_Org,
      },
    });
    return NextResponse.json(newProjectDetails, { status: 201 });
  } catch (error) {
    console.error('Error creating project details:', error);
    return NextResponse.json(
      { error: 'Error creating project details' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    const data: Project_Details = await request.json();
    const updatedProjectDetails: Project_Details = await prisma.project_Details.update({
      where: { P_ID: data.P_ID },
      data: {
        Name: data.Name,
        Owner_Org: data.Owner_Org,
      },
    });
    return NextResponse.json(updatedProjectDetails);
  } catch (error) {
    console.error('Error updating project details:', error);
    return NextResponse.json(
      { error: 'Error updating project details' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  try {
    const { P_ID }: { P_ID: number } = await request.json();
    await prisma.project_Details.delete({
      where: { P_ID: P_ID },
    });
    return NextResponse.json({ message: 'Project details deleted successfully' });
  } catch (error) {
    console.error('Error deleting project details:', error);
    return NextResponse.json(
      { error: 'Error deleting project details' },
      { status: 500 }
    );
  }
}