import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography, InputAdornment, IconButton, Link, Box } from '@mui/material';
import { VisibilityOutlined, VisibilityOffOutlined, EmailOutlined, LockOutlined } from '@mui/icons-material';
import '../styles/LoginPage.css';


const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleLogin = () => {
    navigate('/landing');
  };

  return (
    <div className="login-page">
      <Card className="login-card">
        <CardContent>
        <img 
            src={'/assets/images/logo.png'} 
            alt="Logo" 
            className="login-logo" 
          />
          <Box sx={{mb:3}}>

          <Typography variant="h4" component="h2">
            Welcome back!
          </Typography>
          <Typography variant="subtitle1" component="h2">
            Please enter your login credentials to access your account.
          </Typography>
          </Box>

          <TextField
            label="Email"
            variant="outlined"
            placeholder='Email address'
            fullWidth
            margin="normal"
            
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
                style: { color:'#0E121B', fontWeight: 'bold' }  // Custom label styles
              }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder='Password'
            type={showPassword ? 'text' : 'password'}
           
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <div className="forgot-password">
            <Link href="#" underline="hover" color="black">
              Forgot password?
            </Link>
          </div>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            className="login-button"
          >
            Log in
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;