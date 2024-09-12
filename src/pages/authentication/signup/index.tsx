import { Box, Card, Container, Link, Typography, Grid } from '@mui/material';
import IconKey from 'assets/iconkey.png';
import SignupForm from 'components/sections/authentication/SignupForm';

const FONT_SIZES = {
  header: '4rem',
  subheader: '2.5rem',
  body: '1.5rem',
  link: '1.5rem',
};

const COLORS = {
  primary: '#007bff',
  secondary: '#555',
  textPrimary: '#333',
  linkHover: 'primary.light',
};

const SignupPage = () => {
  return (
    <Box
      sx={{
        width: 1,
        height: '100vh',
        display: 'flex',
        position: 'relative',
        zIndex: 100,
        // Tambahkan properti gradien background
        background: 'linear-gradient(to bottom, #9AFEE0 50%, #042BF9 100%)', // Ubah sesuai dengan preferensi warna Anda
      }}
    >
      {/* Left Side with Illustration */}
      <Grid
        container
        sx={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: '50px',
        }}
      >
        <Grid item xs={10} sm={8}>
          <Typography
            variant="h1"
            sx={{
              mb: 2,
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              fontSize: FONT_SIZES.header,
              color: COLORS.textPrimary,
            }}
          >
            Sign in to
          </Typography>
          <Typography
            variant="h1"
            sx={{
              mb: 2,
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              fontSize: FONT_SIZES.subheader,
              color: COLORS.textPrimary,
            }}
          >
            Inventory Applications
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 1,
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'normal',
              fontSize: FONT_SIZES.body,
              color: COLORS.secondary,
            }}
          >
            If you don't have an account register
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'normal',
              fontSize: FONT_SIZES.body,
              color: COLORS.secondary,
            }}
          >
            You can{' '}
            <Link
              href="/authentication/login"
              sx={{
                color: COLORS.primary,
                fontWeight: 'bold',
                fontSize: FONT_SIZES.link,
                textDecoration: 'none',
                '&:hover': {
                  color: COLORS.linkHover,
                  textDecoration: 'underline',
                },
              }}
            >
              Sign In here!
            </Link>
          </Typography>
          <img src={IconKey} alt="icon-key" width="700" />
          {/* Gambar iconkey.png diterapkan di sini */}
        </Grid>
      </Grid>

      {/* Right Side with Login Form */}
      <Grid
        container
        sx={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid item xs={12} sm={8}>
          <Container maxWidth="xl">
            <Card
              sx={{
                p: { xs: 20, sm: 20, md: 20, lg: 25 },
                width: 1,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  textAlign: 'left',
                  fontWeight: 'normal',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: FONT_SIZES.body,
                  color: COLORS.textPrimary,
                }}
              >
                Welcome to Inventory System
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  textAlign: 'left',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: FONT_SIZES.header,
                  color: COLORS.textPrimary,
                }}
              >
                Sign Up
              </Typography>

              <SignupForm />
            </Card>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignupPage;
