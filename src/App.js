//import logo from './logo.svg';

import { LoginPage } from "./Pages/LoginPage";
import { HomePage } from "./Pages/HomePage";
import { TransferPage } from "./Pages/TransferPage";
import {TransactionPage} from "./Pages/TransactionPage";
import {CustomerDetails} from "./Pages/CustomerDetails";
import { Dashboard } from "./Pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import { CustDetails } from "./Pages/CustDetails";
import {CustTable} from "./Pages/CustTable";

//import ReactDOM from "react-dom";
import './App.css';


function App() {
  
   return (
     <div>
       <Routes>
         <Route path="/" element={<LoginPage />}/>
         <Route path="/home" element={<HomePage />}/>
         <Route path="/transferpage" element={<TransferPage />} />
         <Route path="/transactionpage" element={<TransactionPage />} />
         <Route path="/customerdetails" element={<CustomerDetails />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/customers" element={<CustTable />} />
        <Route path="/customers/:id" element={<CustDetails />}/>
         
       </Routes>
     </div>

   ) 
  }
export default App;

