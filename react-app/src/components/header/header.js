import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom';

export const ButtonAppBar = () => {
  const name = JSON.parse(localStorage.getItem("user")).name;
  let navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile");
  }

  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/");

  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h5" component="div" sx={{ flexGrow: 4 }}>
           TEAM 11
          </Typography>
          <Button style={{color:'blue', paddingRight:'30px', fontWeight: 'bold', fontSize:'20px'}} onClick={goToProfile}> Hi {name}</Button>
          <Button style={{color:'blue', paddingRight:'30px', fontWeight: 'bold', fontSize:'20px'}} onClick={logOut}>Logout</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ButtonAppBar;