import React, { useState } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import {addCustomer, store, ADD_CUSTOMER_BEGIN} from '../actions/customerActions';
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";
import States from "./states.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function CustomerCreate(props) {


  // const customerState = useSelector((state) => state);
  // const {customer, loading, error} = customerState;
  const [customer, setCustomer]=useState({
   // id: "",
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
  
  const updateBirthday = date=>{
    setCustomer({...customer,birthDate: date})
  }
  const updatePhone = phone=>{
    setCustomer({...customer,phoneNumber: phone})
  }
  
  const dispatch = useDispatch();
  const history = useHistory(); //redirect to the customer search from create customer

  function createCustomer(e) //e-->events to refresh the screen
  {
    e.preventDefault();
    console.log(customer);
    dispatch(addCustomer(customer));
    history.push({pathname:'./customerSearch'}); 
  }

  function createContinueCustomer(e) //e-->events to refresh the screen
  {
    e.preventDefault();
    dispatch(addCustomer(customer));
    window.location.reload(true);
  }
 
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
              <select className="soflow" value={customer.state}
              id = "state"
              name = "state"
              onChange={(event) => updateCustInfo(event)}>
                {States.map((obj)=>
                  <option key={obj.name}>{obj.name}</option>)}
                </select>
              
            </div>
            </div>
            <div className="form-row">
            <div className="form-group col-md-5">
              <label className= "inputLabel">Zip Code: </label>
              <input onBlur ={(event) => updateCustInfo(event)}
                id="zipCode"
                name = "zipCode"
                type="text"
                className="form-control"
              defaultValue ={customer.zipCode}              
              />
            </div>
            <br></br>
            <div className="form-group col-md-5">
              <div className="side">
              <label className= "inputLabel">Phone Number: </label>
              </div>
              <div className="side">
              <PhoneInput
                className="PhoneInput"
                placeholder="Enter phone number"
                defaultCountry ="US"           
                countries={["US","CA"]}
                displayInitialValueAsLocalNumber={true}
                value={customer.phoneNumber}
                onChange={updatePhone}
                error={customer.phoneNumber ? (isValidPhoneNumber(customer.phoneNumber) ? undefined :'invalid phone number') : 'Phone number required'}
              />
              </div>
              {/* <input onBlur ={(event) => updateCustInfo(event)}
                id="phoneNumer"
                name = "phoneNumber"
                type="text"
                className="form-control"
              defaultValue ={customer.phoneNumber}              
              /> */}
            </div>
          </div>
          <br></br>
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
              <select className="soflow" value={customer.gender} 
              id="gender"
              name = "gender"
              onChange={(event) => updateCustInfo(event)}>
                  <option key="F">F</option>
                  <option key="M">M</option>
                </select>
              {/* <input onBlur ={(event) => updateCustInfo(event)}
                id="gender"
                name = "gender"
                type="text"
                className="form-control"
              defaultValue ={customer.gender}              
              /> */}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-5">
               <label className= "inputLabel">Date of Birth: </label>
              <DatePicker
                selected={customer.birthDate}
                onChange={ updateBirthday}
                showMonthDropdown={true}
                showYearDropdown={true}
                dateFormat="MM-dd-yyyy"
                />
              {/* <input onBlur ={(event) => updateCustInfo(event)}
                id="birthDate"
                name = "birthDate"
                type="text"
                className="form-control"
              defaultValue ={customer.birthDate}              
              /> */}
            </div>
            </div>
              <br></br>
          <div className="form-group">
            
            <button className="submitButton" onClick = {(e)=> createCustomer(e)}>Create Customer</button>
            <button className="submitButton" onClick = {(e)=> createContinueCustomer(e)}>Create More Customer</button>
          </div>
        </form>
      </div> 
      </>
  );
}

export default CustomerCreate;