'use client';
import { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import prisma from '../../../../prisma'
import Link from 'next/link';
// import {AddProjectForm} from '@/app/(DashboardLayout)/components/dashboard/AddProject';
import { Button } from '@mui/material';


const ProjectAssessmentDashboard = () => {

  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api');
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          for (let d in data) {
            console.log(d);
          }
          setProjects(data);
        } else {
          console.error('Failed to fetch projects');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  

  return (
    <PageContainer title="Project Assessment Dashboard" description="Project Assessment Dashboard">

      <Link href="/sb/addProject" passHref>
        <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
          Add New Project
        </Button>
      </Link>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell>ICOS Status</TableCell>
              <TableCell>SDG Validity</TableCell>
              <TableCell>SDV Validity</TableCell>
              {/* <TableCell>Due Diligence</TableCell> */}
              <TableCell>Overall Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.P_ID}>
                <TableCell>{project.name}</TableCell>
                <TableCell>{project.ICOS ? 'Done' : 'Pending'}</TableCell>
                <TableCell>{project.SDG ? 'Done' : 'Pending'}</TableCell>
                <TableCell>{project.SDV ? 'Done' : 'Pending'}</TableCell>
                <TableCell>{project.Overall_status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageContainer>
  );
}

export default ProjectAssessmentDashboard;
