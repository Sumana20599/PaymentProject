//import { ThemeContext } from "@mui/styled-engine"
import axios from "axios"
import { useState,useEffect } from "react"
import { CircularProgress } from "@mui/material/CircularProgress"
import { Link } from "react-router-dom"
export function CustTable(){
    const[customers,setCustomers]=useState(null)
   // const[city,setCity]=useState(null)
    useEffect(()=>{
        axios.get("http://localhost:8080/customers/")
        .then(res=>{
            setCustomers(res.data)
            console.log(res.data)
        })
        .catch(err=>{
            console.log("Error Occured!")
        })
    },[])
    const getTableRows=()=>{
        const rows=customers.map(c=>{
            return (<tr key={c.customerid}>
                <td>{c.customerid}</td>
                <td>{c.accountholdername}</td>
                <td>
                    <Link to={"/customers/"+c.customerid}> View </Link>
                    <Link to={"/delete"}>Delete</Link>
                </td>
            </tr>
            )
        })
        return rows
    }
    return(
        <div>
            <h2>List of Customers</h2>
            {customers ?
            <table>
                <thead>
                <tr>
                    <th>CUSTID</th>
                    <th>CUSTNAME</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                        {/* {customers?getTableRows():<h3>Loading</h3>} */}
                    
                        {getTableRows()}
                        
                </tbody>
            </table> : <h4>Loading...</h4>}
        </div>
    );
}

    <div>
        <h3>List of customers</h3>
        {/* {customers?getTableRows:<h3>Loading</h3>} */}
        
    </div>

