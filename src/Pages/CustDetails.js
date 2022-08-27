import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
export function CustDetails(){
    const[customer,setCustomer]=useState(null)
    const params=useParams()

    useEffect(()=>{
        axios.get("http://localhost:8080/customer/"+params.id)
        .then(res=>{
            setCustomer(res.data)
            console.log(customer)
        })
        .catch(err=>{
            console.log("couldn't fetch customers details")
        })
    },[params])
    /*const getCustomerDiv=()=>{
        const custDiv =<div>
            <h3>Customer Details-{customers.customerid}</h3>
            <p>{customer.accountholdername}</p>
        </div>
        return custDiv
    }*/
 const displayDetails =()=>{
     return(
     <div>
    <h4>Customer ID -{customer.customerid}</h4>
    <h4>Customer Name -{customer.accountholdername}</h4>
    <h4>Customer Address -{customer.customeraddress}</h4>
    <h4>Customer City -{customer.customercity}</h4>
    <h4>Clear Balance -{customer.clearbalance}</h4>
    <h4>Overdraft -{customer.overdraftflag}</h4>
    </div>
     )
 }

return(
    <div>{customer? displayDetails():<p>Loading..</p>
    }
        {/* <Link to ="/customers">Bact to customers</Link>
        {
            customers?getCustomerDiv():<h3>Loading..</h3>
        } */}
    </div>
)}
    