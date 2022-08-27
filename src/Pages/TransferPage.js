import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router";

export function TransferPage(){

    let navigate=useNavigate();
    const transferNav=()=>{
        navigate("/transferpage");
      }
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
         <Button color="inherit" >Customer Details</Button>
         <Button color="inherit"  onClick={transferNav}>Transfer</Button>
        </Toolbar>
      </AppBar>
    </Box>
 
      <h1>MONEY TRANSFER</h1>
      <form>
      
        <b><label>Customer Id</label></b>
        <input type="text" name="cutomer id" placeholder="Enter Customer Id"></input><br></br>
        <b><label>AccountHolder Name</label></b>
        <input type="text" name="customer name" placeholder="Enter Account Holder Name"></input><br></br>
        <b><label>Clear Balance</label></b>
        <input type="text" name="amount"></input><br></br>
        <b><label for="cur">Currency Code</label></b>
        <select name="" id="cur">
          <option value="select">SELECT</option>
          <option value="inr">INR</option>
          <option value="usd">USD</option>
          <option value="eud">EUD</option>
          <option value="jpy">JPY</option>
        </select><br></br>
      
      
        <b><label>Receiver BIC</label></b>
        <input type="text" name="bic"></input><br></br>
        <b><label>Receiver Bank Name</label></b>
        <input type="text" name="bname"></input><br></br>
        <b><label for="tcode">Transfer Type</label></b>
        <select name="select" id="tcode">
          <option value="select">SELECT</option>
          <option value="current">Bank Transfer</option>
          <option value="fix">Customer Transfer</option>
        </select><br></br>
        <b><label for="mcode">Message Code</label></b>
        <select name="" id="mcode">
          <option value="select">SELECT</option>
          <option value="current"></option>
          <option value="fix"></option>
        </select><br></br>
        <b><label>Receiver Account HolderNumber</label></b>
        <input type="text" name="rahn"></input><br></br>
        <b><label>Receiver Account HolderName</label></b>
        <input type="text" name="ahn"></input><br></br>
        {/* <div className="button-container">
          <input type="submit" />
          {navigate("/transactionpage")}
        </div> */}
        
  
      </form> 
           </div>
  );
    
    
}