import React, {useEffect, useState} from 'react';
import "./css/customerApp.css";
import Create from "./CustomerCreate";
import Update from  "./CustomerUpdate"; //no need this import
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { fetchCustomers, deleteCustomer, searchCustomers } from "../actions/customerActions";
import Delete from "./images/Trash.png";
import Edit from "./images/Modify.png";
import {useHistory} from "react-router-dom";

// needed for functional components
import { useSelector, useDispatch } from "react-redux";

function CustomerSearch(props) {

  const customerList = useSelector((state) => state);
  const {customers, loading, error} = customerList;
  const dispatch = useDispatch();
  const history = useHistory();

  const [customer, setCustomer]=useState({
    // id: "",
     firstName: "",
     lastName: "",
     email: ""
    
   });
   const updateCustInfo = e=>{
     setCustomer({...customer, [e.target.name]: e.target.value})
   }

  useEffect(() => {
    dispatch(fetchCustomers());
    return () => {
      //
    };
  }, []);
 function deleteCust(c)
 {
   dispatch(deleteCustomer(c));
   dispatch(fetchCustomers()); 
 }
//search
function searchCustomer(e) //e-->events to refresh the screen
  {
    e.preventDefault();
    console.log(customer);
    dispatch(searchCustomers(customer));
   // history.push({pathname:'./customerSearch'}); 
  }

  //create customer rows of list
  const tabRow = ({customers}) => {
    console.log("render table row " + customers.length);
      
       if(customers.length>0){
      
           return (
               customers.map(function(customer, i) {
               return (
               <tr key={i}>
                   
                   <td><button className="buttonImg" onClick={() => {
                     if(window.confirm('Are you sure you want to delete?')) { deleteCust(customer) }
                     }}>
                       <img src={Delete}/></button>
                  </td>
                   <td><button className="buttonImg" onClick={() =>history.push({pathname:'./customerUpdate', customer:{customer}})}><img src={Edit}/></button></td>
                   <td>{customer.firstName}</td>
                   <td>{customer.lastName}</td>
                   <td>{customer.email}</td>
                   <td>{customer.phoneNumber}</td>
                   <td>{customer.city}</td>
               </tr>)
               } ));
       }  
       return null;
   }

  return(
    <>
     {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
     
        <div className="container">
         <div className="header">
           <h3>Search Customer</h3>
         </div>

         <div className="form-row">
            <div className="form-group col-md-5">
              <label className= "inputLabel">First Name: </label>
              <input onBlur ={(event) => updateCustInfo(event)}
                id="firstName"
                name = "firstName"
                type="text"
                className="form-control"
              defaultValue ={customer.firstName}              
              />
            </div>
            <div className="form-group col-md-5">
              <label className= "inputLabel">Last Name: </label>
              <input onBlur ={(event) => updateCustInfo(event)}
                id="lastName"
                name = "lastName"
                type="text"
                className="form-control"
              defaultValue ={customer.lastName}              
              />
            </div>
            <div className="form-group col-md-5">
              <label className= "inputLabel">Email: </label>
              <input onBlur ={(event) => updateCustInfo(event)}
                id="email"
                name = "email"
                type="text"
                className="form-control"
              defaultValue ={customer.email}              
              />
            </div>
           </div>
           <button className="submitButton" onClick = {(e)=> searchCustomer(e)}>Search</button>
           <button className="submitButton" onClick = {()=> (window.location.reload(true))}>Refresh Search</button>

         <div className="App">
          <p>List of Customers</p>
          <table className="customers">
            <thead>
              <tr>
                <th>Delete</th>
                <th>Edit</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
               
              </tr>
            </thead>
            <tbody>
            {
           tabRow({customers})
            }
              </tbody>
          </table>
        </div>
      </div>
      )}
      </>
  );
  }


export default CustomerSearch;
