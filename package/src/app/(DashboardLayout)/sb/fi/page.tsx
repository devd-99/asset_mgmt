'use client';
import { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

const InvestorDashboard = () => {

  // Sample data for the table
  const [investors] = useState([
    { name: 'Alice Johnson', amount: 5000000, date: '2024-04-15' },
    { name: 'Bob Smith', amount: 1200000, date: '2024-03-28' },
    { name: 'Carol Williams', amount: 7500000, date: '2024-05-10' },
    // ... Add 7 more rows of sample data
  ]);

  return (
    <PageContainer title="Investor Dashboard" description="Investor Dashboard">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Investor Name</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Date of Purchase</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {investors.map((investor) => (
                  <TableRow key={investor.name}>
                    <TableCell>{investor.name}</TableCell>
                    <TableCell>${investor.amount}</TableCell>
                    <TableCell>{investor.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export default InvestorDashboard;
