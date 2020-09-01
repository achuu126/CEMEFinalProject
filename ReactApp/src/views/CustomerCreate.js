import React, { useState } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import {addCustomer, store, ADD_CUSTOMER_BEGIN} from '../actions/customerActions';

import { useSelector, useDispatch } from "react-redux";


function CustomerCreate(props) {

  // const customerState = useSelector((state) => state);
  // const {customer, loading, error} = customerState;
  const [customer, setCustomer]=useState({
    id: "",
    firstName: "",
    middleInitial:"",
    lastName: "",
    street:"",
    city:"",
    state:"",
    zipCode:"",
    phoneNumber: "",
    email: "",
    gender: "",
    birthDate:""
  });
  const updateCustInfo = e=>{
    setCustomer({...customer, [e.target.name]: e.target.value})
  }

  const dispatch = useDispatch();
  
  function createCustomer()
  {
    console.log(customer);
    //dispatch(addCustomer(customer));
  }
  // const submitHandler = async(e) => {
  //   e.preventDefault();
  //   // this is empty
  //   // cd.title = title;
  //   // cd.artist = artist;
  //   // cd.price = price;
  //   // cd.tracks = tracks;

  //   dispatch(addCustomer(customer));

  // };

  return (
    <>
      <div className= "container" >
        <div className="header">
        <h3>Create Customer</h3>
        </div>
       <br></br>
       
        <form autoComplete="off">
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
              <label className= "inputLabel">Middle Initial: </label>
              <input onBlur ={(event) => updateCustInfo(event)}
                id="middleInitial"
                name = "middleInitial"
                type="text"
                className="form-control"
              defaultValue ={customer.middleInitial}              
              />
            </div>
           </div>
          <div className="form-row">
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
              <label className= "inputLabel">Street Address: </label>
              <input onBlur ={(event) => updateCustInfo(event)}
                id="street"
                name = "street"
                type="text"
                className="form-control"
              defaultValue ={customer.street}              
              />
            </div>
          </div>
          <div className="form-row">
          <div className="form-group col-md-5">  
          <label className= "inputLabel">City: </label>
              <input onBlur ={(event) => updateCustInfo(event)}
                id="city"
                name = "city"
                type="text"
                className="form-control"
              defaultValue ={customer.city}              
              />
            </div>
            <div className="form-group col-md-5">
              <label className= "inputLabel">State: </label>
              <input onBlur ={(event) => updateCustInfo(event)}
                id="state"
                name = "state"
                type="text"
                className="form-control"
              defaultValue ={customer.state}              
              />
            </div>
            </div>
            <div className="form-row">
            <div className="form-group col-md-5">
              <label className= "inputLabel">Zip Code: </label>
              <input onBlur ={(event) => updateCustInfo(event)}
                id="zipcode"
                name = "zipcode"
                type="text"
                className="form-control"
              defaultValue ={customer.zipcode}              
              />
            </div>
            <div className="form-group col-md-5">
              <label className= "inputLabel">Phone Number: </label>
              <input onBlur ={(event) => updateCustInfo(event)}
                id="phoneNumer"
                name = "phoneNumber"
                type="text"
                className="form-control"
              defaultValue ={customer.phoneNumber}              
              />
            </div>
          </div>
          <div className="form-row">
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
            <div className="form-group col-md-5">
              <label className= "inputLabel">Gender: </label>
              <input onBlur ={(event) => updateCustInfo(event)}
                id="gender"
                name = "gender"
                type="text"
                className="form-control"
              defaultValue ={customer.gender}              
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-5">
              <label className= "inputLabel">Date of Birth: </label>
              <input onBlur ={(event) => updateCustInfo(event)}
                id="birthDate"
                name = "birthDate"
                type="text"
                className="form-control"
              defaultValue ={customer.birthDate}              
              />
            </div>
            </div>
  
          <div className="form-group">
            {/* <input
              type="submit"
              value="Create Customer"
              className="btn btn-primary"
            /> */  }

            <button className="submitButton" onClick = {()=> createCustomer()}>Create Customer</button>
          </div>
        </form>
      </div> 
      </>
  );
}

export default CustomerCreate;