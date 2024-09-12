import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
  Grid,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import LoginForm from 'components/sections/authentication/LoginForm';
import IconKey from 'assets/iconkey.png';

const FONT_SIZES = {
  header: { xs: '2.5rem', sm: '3rem', md: '4rem' },
  subheader: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
  body: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
  link: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
};

const COLORS = {
  primary: '#007bff',
  secondary: '#555',
  textPrimary: '#333',
  linkHover: 'primary.light',
};

const LoginPage = () => {
  return (
    <Box
      sx={{
        width: 1,
        height: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        background: 'linear-gradient(to bottom, #9AFEE0 50%, #042BF9 100%)',
      }}
    >
      {/* Left Side with Illustration */}
      <Grid
        container
        sx={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: { xs: '10px', md: '20px' },
          paddingRight: { xs: '10px', md: '20px' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Grid item xs={12} md={8}>
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
              href="/authentication/sign-up"
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
              Sign Up here!
            </Link>
          </Typography>
          <img src={IconKey} alt="icon-key" width="100%" style={{ maxWidth: '100%' }} />
        </Grid>
      </Grid>

      {/* Right Side with Login Form */}
      <Grid
        container
        sx={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: '20px', md: '50px' },
        }}
      >
        <Grid item xs={12} md={8}>
          <Container maxWidth="sm">
            <Card
              sx={{
                p: { xs: 3, sm: 7.5 },
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
                Sign In
              </Typography>

              <LoginForm />

              <Divider sx={{ my: 5 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  OR
                </Typography>
              </Divider>
              <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
                <Button fullWidth size="large" color="neutral" variant="outlined" sx={{ p: 1 }}>
                  <IconifyIcon icon="eva:google-fill" color="blue" sx={{ mr: 1 }} />
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 'normal',
                      fontSize: FONT_SIZES.body,
                      color: COLORS.textPrimary,
                    }}
                  >
                    Sign in with Google
                  </Typography>
                </Button>
              </Stack>
            </Card>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
