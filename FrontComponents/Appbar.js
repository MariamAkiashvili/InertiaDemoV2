import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function Appbar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
           
          </IconButton>
          <Typography style={{color:'White'}} variant="h6" component="div" sx={{ mr: 2 }}> Category </Typography>
          <Typography style={{color:'White'}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            INERTIA
          </Typography>
          <Button id="login" color="inherit" >Login</Button>
          <Button id="signIn" color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
