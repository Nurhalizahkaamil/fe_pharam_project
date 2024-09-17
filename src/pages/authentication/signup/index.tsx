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
import IconKey from 'assets/iconkey.png';
import SignupForm from 'components/sections/authentication/SignupForm';

const FONT_SIZES = {
  header: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
  subheader: { xs: '1rem', sm: '1.5rem', md: '2rem' },
  body: { xs: '1rem', sm: '1rem', md: '1.25rem' },
  link: { xs: '1rem', sm: '1rem', md: '1.25rem' },
};

const COLORS = {
  primary: '#007bff',
  secondary: '#555',
  textPrimary: '#333',
  linkHover: 'primary.light',
};

const SignupPage: React.FC = () => {
  return (
    <Box
      sx={{
        width: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        background: 'linear-gradient(to bottom, #9AFEE0 50%, #042BF9 100%)',
      }}
    >
      {/* Left Side with Illustration */}
      <Grid
        container
        sx={{
          flex: { xs: 1, md: 0.6 }, // Reduce width for illustration on larger screens
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
              wordWrap: 'break-word', // Ensure text doesn't overflow
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
              wordWrap: 'break-word',
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
            If you have an account
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
              Sign in here!
            </Link>
          </Typography>
          <img
            src={IconKey}
            alt="icon-key"
            style={{
              maxWidth: '400%',
              height: 'auto', // Maintain aspect ratio
              objectFit: 'contain', // Contain within the available space
            }}
          />
        </Grid>
      </Grid>

      {/* Right Side with Sign-Up Form */}
      <Grid
        container
        sx={{
          flex: { xs: 1, md: 1.4 }, // Give more space for the form on larger screens
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: '20px', md: '50px' },
        }}
      >
        <Grid item xs={12} md={8}>
          <Container maxWidth="xs" sx={{ maxWidth: '100px' }}>
            {' '}
            {/* Set a max-width for the container */}
            <Card
              sx={{
                p: { xs: 3, sm: 5 },
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
                    Sign up with Google
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

export default SignupPage;
