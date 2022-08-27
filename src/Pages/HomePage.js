import { TransferPage } from "./TransferPage"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
export function HomePage()
{
 // return( 
    //<Link to={"/transferpage/"}> <Button color="inherit">Transfer</Button> </Link>)
  let navigate=useNavigate();
  const transferNav=()=>{
      navigate("/transferpage");}
    const homeNav=()=>{
        navigate("/home");}
    const transactionNav=()=>{
            navigate("/transactionpage");}
    const dashboardNav=()=>{
                navigate("/dashboard");}
    const customerdetailsNav=()=>{
     navigate("/customerdetails");
                }
   
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
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Transfer
          </Typography> */}

         {/* <Button color="inherit">Transfer</Button> */}
         <Button color="inherit" onClick={homeNav}>Home</Button>
         <Button color="inherit" onClick={transactionNav}>Transactions</Button> 
         <Button color="inherit" onClick={dashboardNav}>Dashboard</Button>
         <Button color="inherit" onClick={customerdetailsNav}>Customer Details</Button>
         <Button color="inherit"  onClick={transferNav}>Transfer</Button>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
