import { Button, Grid, IconButton, InputAdornment, Link, TextField } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <Grid container spacing={3} sx={{ mb: 2.5 }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size="medium"
            name="email"
            label="Username or email"
            variant="outlined"
            InputLabelProps={{
              sx: { fontSize: { xs: '1rem', sm: '1.25rem' } }, // Responsive label size
            }}
            sx={{
              '& .MuiInputBase-input': { fontSize: { xs: '1rem', sm: '1.25rem' } }, // Responsive input size
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size="medium"
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <IconifyIcon icon={showPassword ? 'majesticons:eye' : 'majesticons:eye-off'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              sx: { fontSize: { xs: '1rem', sm: '1.25rem' } },
            }}
            sx={{
              '& .MuiInputBase-input': { fontSize: { xs: '1rem', sm: '1.25rem' } },
            }}
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="flex-end" sx={{ my: 3 }}>
        <Grid item>
          <Link href="/authentication/forget-password" variant="subtitle2" underline="hover">
            Forgot password?
          </Link>
        </Grid>
      </Grid>

      <Button
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{
          backgroundColor: '#76C893',
          fontSize: { xs: '1rem', sm: '1.25rem' }, // Responsive font size
        }}
      >
        Sign In
      </Button>
    </>
  );
};

export default LoginForm;
