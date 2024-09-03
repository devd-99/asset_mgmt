'use client'
import { useState } from 'react'; // Removed unused useEffect and dependencies
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

const Dashboard = () => {

  // Sample data for the table
  const [projects] = useState([
    { project_id: 'P001', name: 'Solar Array Alpha', co2_e: 12000, estimatedWorth: 500000, sold: false },
    { project_id: 'P002', name: 'Wind Farm Beta', co2_e: 25000, estimatedWorth: 850000, sold: true },
    { project_id: 'P003', name: 'Hydroelectric Delta', co2_e: 38000, estimatedWorth: 1200000, sold: false },
    // ... Add 7 more rows of sample data
  ]);

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>CO2e Reduction</TableCell>
              <TableCell>Estimated Worth</TableCell>
              <TableCell>Sold</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.project_id}>
                <TableCell>{project.project_id}</TableCell>
                <TableCell>{project.name}</TableCell>
                <TableCell>{project.co2_e}</TableCell>
                <TableCell>{project.estimatedWorth}</TableCell>
                <TableCell>{project.sold ? 'Yes' : 'No'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageContainer>
  );
}

export default Dashboard;
