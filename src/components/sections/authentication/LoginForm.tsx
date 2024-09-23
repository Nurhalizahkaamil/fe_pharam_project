import { Button, Grid, IconButton, InputAdornment, Link, TextField } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();  // Prevent the default form submission

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful');

        // On success, navigate to the dashboard
        navigate('/');
      } else {
        // Handle errors (e.g., invalid credentials)
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('Failed to connect to the server');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3} sx={{ mb: 2.5 }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size="medium"
            name="email"
            label="Username or email"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

      {error && (// Display the error message
        <Grid item xs={12}>
          <p style={{ color: 'red' }}>{error}</p>
        </Grid>
      )}

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
        onClick={handleSubmit}
        sx={{
          backgroundColor: '#76C893',
          fontSize: { xs: '1rem', sm: '1.25rem' }, // Responsive font size
        }}
      >
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
