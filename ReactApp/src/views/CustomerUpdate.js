import React, { useState } from "react";
import Axios from "axios";
import { connect } from 'react-redux';
import {updateCustomer, store, UPDATE_CUSTOMER_BEGIN} from '../actions/customerActions';
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";
import States from "./states.json"
;
function CustomerUpdate(props) {
  console.log(props);
  console.log(props.location.customer.customer.id);
 // const customerState = useSelector((state) => state);
 // const {customer, loading, error} = customerState;
 
  const [customer, setCustomer]=useState({
     id: props.location.customer.customer.id,
    firstName: props.location.customer.customer.firstName,
    middleInitial:  props.location.customer.customer.middleInitial,
    lastName:  props.location.customer.customer.lastName,
    street: props.location.customer.customer.street,
    city: props.location.customer.customer.city,
    state: props.location.customer.customer.state,
    zipCode: props.location.customer.customer.zipCode,
    phoneNumber:  props.location.customer.customer.phoneNumber,
    email:  props.location.customer.customer.email,
    gender:  props.location.customer.customer.gender,
    birthDate: props.location.customer.customer.birthDate
  });

  const updateCustInfo = e=>{
    setCustomer({...customer, [e.target.name]: e.target.value})
  }

  const dispatch = useDispatch();
  const history = useHistory(); //redirect to the customer search from create customer

//   function updateCustomer(e) //e-->events to refresh the screen
//   {
//     e.preventDefault();
//     console.log(customer);
//     dispatch(updateCustomer(customer));
//     history.push({pathname:'./customerSearch'}); 
//   }

async function updateCustomer() {  try{
    console.log(customer);
     await Axios.post("http://localhost:8080/customers/updateCustomer", customer)
     .then( history.push({pathname:'/CustomerSearch'}));
   
  }catch(error){
      console.log(error);
  }
}
 
  return (
    <>
      <div className= "container" >
        <div className="header">
        <h3>Update Customer</h3>
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
            <br></br>
            <button className="submitButton" onClick = {(e)=> updateCustomer(e)}>Update Customer</button>
          </div> 
        </form>
      </div> 
      </>
  );
}

export default CustomerUpdate;