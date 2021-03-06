import React from 'react';
import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <>
  <Box sx={{flexGrow:1}}>
      <AppBar position='center' color='secondary'>
          <Toolbar>
              <Typography variant='h5' component="div" sx={{flexGrow:1}}>
              Diy-n-Buy
              </Typography>
              <Button component={NavLink} to='/' style={({isActive})=>{return {backgroundColor: isActive?'#6d1b7b':''}}} sx={{color:'white', textTransform:'none'}}>Home</Button>
              <Button component={NavLink} to='/CreateMod' style={({isActive})=>{return {backgroundColor: isActive?'#6d1b7b':''}}} sx={{color:'white', textTransform:'none' }} >CreateMod</Button>
              <Button component={NavLink} to='/LoginReg' style={({isActive})=>{return {backgroundColor: isActive?'#6d1b7b':''}}} sx={{color:'white',textTransform:'none' }} >Login/Register</Button>
              <Button component={NavLink} to='/Cart' style={({isActive})=>{return {backgroundColor: isActive?'#6d1b7b':''}}} sx={{color:'white',textTransform:'none' }} >Cart</Button>

          </Toolbar>


      </AppBar>

  </Box>
  </>;
};

export default Navbar;
