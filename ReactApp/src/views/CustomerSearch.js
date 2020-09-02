import React, {useEffect} from 'react';
import "./css/customerApp.css";
import Create from "./CustomerCreate";
import Update from  "./CustomerUpdate"; //no need this import
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { fetchCustomers, deleteCustomer } from "../actions/customerActions";
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

  //create customer rows of list
  const tabRow = ({customers}) => {
    console.log("render table row " + customers.length);
      
       if(customers.length>0){
      
           return (
               customers.map(function(customer, i) {
               return (
               <tr key={i}>
                   
                   <td><button className="buttonImg" onClick={() => {deleteCust(customer) }}><img src={Delete}/></button></td>
                   <td><button className="buttonImg" onClick={() =>history.push({pathname:'./customerUpdate', customer:{customer}})}><img src={Edit}/></button></td>
                   <td>{customer.firstName}</td>
                   <td>{customer.lastName}</td>
                   <td>{customer.email}</td>
                   <td>{customer.phoneNumber}</td>
                   <td>{customer.city}</td>
                   <td>{customer.state}</td>
                   <td>{customer.zipCode}</td>
                   <td>{customer.gender}</td>
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

          <br />
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
