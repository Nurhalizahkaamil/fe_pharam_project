import { Button, Grid, IconButton, InputAdornment, TextField, Link } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { useBreakpoints } from 'providers/useBreakpoints';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const { up } = useBreakpoints();
  const upSM = up('sm');

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <Grid container spacing={3} sx={{ mb: 2.5 }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size={upSM ? 'medium' : 'small'}
            name="username"
            label="Username"
            variant="outlined"
            InputLabelProps={{
              sx: { fontSize: { xs: '1rem', sm: '1.25rem' } }, // Responsif ukuran label
            }}
            sx={{
              '& .MuiInputBase-input': { fontSize: { xs: '1rem', sm: '1.25rem' } }, // Responsif ukuran input
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size={upSM ? 'medium' : 'small'}
            name="email"
            label="Email address"
            variant="outlined"
            InputLabelProps={{
              sx: { fontSize: { xs: '1rem', sm: '1.25rem' } }, // Responsif ukuran label
            }}
            sx={{
              '& .MuiInputBase-input': { fontSize: { xs: '1rem', sm: '1.25rem' } }, // Responsif ukuran input
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size={upSM ? 'medium' : 'small'}
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
              sx: { fontSize: { xs: '1rem', sm: '1.25rem' } }, // Responsif ukuran label
            }}
            sx={{
              '& .MuiInputBase-input': { fontSize: { xs: '1rem', sm: '1.25rem' } }, // Responsif ukuran input
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size={upSM ? 'medium' : 'small'}
            name="confirmPassword"
            label="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    <IconifyIcon
                      icon={showConfirmPassword ? 'majesticons:eye' : 'majesticons:eye-off'}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              sx: { fontSize: { xs: '1rem', sm: '1.25rem' } }, // Responsif ukuran label
            }}
            sx={{
              '& .MuiInputBase-input': { fontSize: { xs: '1rem', sm: '1.25rem' } }, // Responsif ukuran input
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
        size={upSM ? 'large' : 'medium'}
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{
          backgroundColor: '#76C893',
          fontSize: { xs: '1rem', sm: '1.25rem' }, // Responsif ukuran font
        }}
      >
        Sign Up
      </Button>
    </>
  );
};

export default SignupForm;
