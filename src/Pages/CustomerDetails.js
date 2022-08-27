import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router";
import axios from "axios"
import { useState,useEffect } from "react"
import { CircularProgress } from "@mui/material/CircularProgress"
import { Link } from "react-router-dom"
import { CustTable } from './CustTable';


export function CustomerDetails(){
    let navigate=useNavigate();
    const transferNav=()=>{
        navigate("/transferpage");
      }
      const customerdetailsNav=()=>{
        navigate("/customerdetails");}
      const homeNav=()=>{
          navigate("/home");}
      const transactionNav=()=>{
              navigate("/transactionpage");}
      const dashboardNav=()=>{
                  navigate("/dashboard");}
      
            
    return (
      <div>
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
          <Button color="inherit" onClick={homeNav}>Home</Button>
         <Button color="inherit" onClick={transactionNav}>Transactions</Button> 
         <Button color="inherit" onClick={dashboardNav}>Dashboard</Button>
         <Button color="inherit" onClick={customerdetailsNav} >Customer Details</Button>
         <Button color="inherit"  onClick={transferNav}>Transfer</Button>
        </Toolbar>
      </AppBar>
    </Box>
   <CustTable/> 
   </div> 
    )  
}