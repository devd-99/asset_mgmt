'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from '@/lib/firebase/auth';
import { Grid, Box, CircularProgress } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/(DashboardLayout)/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings';

const Dashboard = () => {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user: any) => {
      if (!user) {
        console.log('User not signed in, redirecting...');
        router.push('/authentication/login');
      } else {
        console.log('User is signed in:', user);
      }
      setIsLoading(false);
    });

    return () => unsubscribe(); // Cleanup the listener
  }, [router]); // Include router as a dependency

  if (isLoading) {
    return (
      <PageContainer title="Dashboard" description="this is Dashboard">
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      </PageContainer>
    );
  }

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
