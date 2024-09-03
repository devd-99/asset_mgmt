"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Grid, Box, Card, Stack, Typography, Divider, Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import {
	signInWithGoogle,
	signOut,
	onAuthStateChanged
} from '../../../lib/firebase/auth';
// components
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import AuthLogin from "../auth/AuthLogin";

function useUserSession(initialUser: any) {
	return;
}

const Login2 = (initialUser: any) => {
  const router = useRouter();
  const user = useUserSession(initialUser) ;
  const [isLoading, setIsLoading] = useState(false); 

	const handleSignOut = (event: any) => {
		event.preventDefault();
		signOut();
	};

	const handleSignIn = async ( event:any) => {
		event.preventDefault();
    setIsLoading(true);
    try {
      await signInWithGoogle();
      router.push('/'); // Redirect to homepage
    } catch (error) {
      console.error("Error signing in with Google:", error);
      // Potentially handle errors here (e.g., show error message)
    } finally {
      setIsLoading(false);
    }
		signInWithGoogle();
	};

  return (
    <PageContainer title="Login" description="this is Login page">
      <Box
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
          },
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <AuthLogin
                subtext={
                  <br />
                }
                subtitle={
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    mt={3}
                  >
                    
                  </Stack>
                }
              />

            <Divider sx={{ my: 3 }} /> {/* Add a divider for visual separation */}

            <Link href="/" passHref>
              <Button 
                variant="outlined" 
                startIcon={<GoogleIcon />}
                fullWidth
                onClick={handleSignIn}
                disabled={isLoading} 
              >
                {isLoading ? "Signing in..." : "Sign in with Google"}
              </Button>
            </Link>

            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};
export default Login2;
