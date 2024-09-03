'use client';
import { useState } from 'react';
import { TextField, Button, Paper, Typography, Box, Checkbox, FormControlLabel } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import { useRouter } from 'next/navigation';

const AddProjectForm = () => {
  const [projectData, setProjectData] = useState({
    name: '',
    ownerOrg: '',
    overallStatus: '',
    icos: false,
    sdv: false,
    sdg: false,
    dueDiligence: false,
    complete: false,
    co2e: '',
    estimatedWorth: '',
    markedSold: false
  });

  interface ProjectData {
    name: string;
    ownerOrg: string;
    overallStatus: string;
    icos: boolean;
    sdv: boolean;
    sdg: boolean;
    dueDiligence: boolean;
    complete: boolean;
    co2e: string;
    estimatedWorth: string;
    markedSold: boolean;
  }
  
  interface PendingProjectData extends ProjectData {
    projectId: string;
    createdAt: string;
    updatedAt: string;
    deleted: boolean;
  }


const transformProjectData = (data: ProjectData): PendingProjectData => {
  const now = new Date().toISOString();
  return {
    ...data,
    projectId: `${data.name.toLowerCase().replace(/\s+/g, '-')}-${now}`,
    createdAt: now,
    updatedAt: now,
    deleted: false,
    overallStatus: data.overallStatus || 'Pending',
    icos: data.icos || false,
    sdv: data.sdv || false,
    sdg: data.sdg || false,
    dueDiligence: data.dueDiligence || false,
    complete: data.complete || false,
  };
};

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setProjectData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try{ 

    } catch (error) { 

    }

    try {
      const response = await fetch('/api/pending_projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        router.push('/');
      } else {
        console.error('Failed to add project');
      }
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
    <PageContainer title="Add New Project" description="Add a new project to the assessment dashboard">
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <Typography variant="h6" gutterBottom>
          Add New Project
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Project Name"
              name="name"
              variant="outlined"
              value={projectData.name}
              onChange={handleChange}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Owner Organization"
              name="ownerOrg"
              variant="outlined"
              value={projectData.ownerOrg}
              onChange={handleChange}
              required
            />
          </Box>

          {/* <Box mb={2}>
            <FormControlLabel
              control={<Checkbox checked={projectData.icos} onChange={handleChange} name="icos" />}
              label="ICOS"
            />
            <FormControlLabel
              control={<Checkbox checked={projectData.sdv} onChange={handleChange} name="sdv" />}
              label="SDV"
            />
            <FormControlLabel
              control={<Checkbox checked={projectData.sdg} onChange={handleChange} name="sdg" />}
              label="SDG"
            />
            <FormControlLabel
              control={<Checkbox checked={projectData.dueDiligence} onChange={handleChange} name="dueDiligence" />}
              label="Due Diligence"
            />
            <FormControlLabel
              control={<Checkbox checked={projectData.complete} onChange={handleChange} name="complete" />}
              label="Complete"
            />
          </Box> */}
          <Box mb={2}>
            <TextField
              fullWidth
              label="CO2E"
              name="co2e"
              variant="outlined"
              type="number"
              value={projectData.co2e}
              onChange={handleChange}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Estimated Worth"
              name="estimatedWorth"
              variant="outlined"
              type="number"
              value={projectData.estimatedWorth}
              onChange={handleChange}
            />
          </Box>
          <Box mb={2}>
            <FormControlLabel
              control={<Checkbox checked={projectData.markedSold} onChange={handleChange} name="markedSold" />}
              label="Marked Sold"
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Add Project
          </Button>
        </form>
      </Paper>
    </PageContainer>
  );
};

export default AddProjectForm;