import { Stack, Theme, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Stack
      direction="row"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        bgcolor: 'background.default',
        placeItems: 'center',
        flexGrow: 1,
        width: 1,
        justifyContent: 'center',
        background: (theme: Theme) => theme.palette.gradients['bgGradient'],
        px: { xs: 0.5, md: 3 },
        py: 4,
      }}
    >
      <Toolbar
        sx={{
          gap: 1,
          minHeight: 20,
          position: 'fixed',
          top: { xs: 10, sm: 12, md: 16 },
          left: { xs: 10, sm: 12, md: 16 },
        }}
      />
      <Stack
        direction="row"
        sx={{
          mt: { xs: 5, sm: 4, md: 3 },
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default AuthLayout;
