// this is not changed for functional components

import axios from "axios";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CustomerReducer from '../reducers/CustomerReducer';
import { useParams } from "react-router-dom";

// these constants can be used as the names of the actions 
// so you minimise using the wrong string
export const FETCH_CUSTOMERS_BEGIN   = 'FETCH_CUSTOMERS_BEGIN';
export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
export const FETCH_CUSTOMERS_FAILURE = 'FETCH_CUSTOMERS_FAILURE';

export const ADD_CUSTOMER_BEGIN   = 'ADD_CUSTOMER_BEGIN';
export const ADD_CUSTOMER_SUCCESS = 'ADD_CUSTOMER_SUCCESS';
export const ADD_CUSTOMER_FAILURE = 'ADD_CUSTOMER_FAILURE';

//Delete
export const DELETE_CUSTOMER_BEGIN   = 'DELETE_CUSTOMER_BEGIN';
export const DELETE_CUSTOMER_SUCCESS = 'DELETE_CUSTOMER_SUCCESS';
export const DELETE_CUSTOMER_FAILURE = 'DELETE_CUSTOMER_FAILURE';

//Update
export const UPDATE_CUSTOMER_BEGIN   = 'UPDATE_CUSTOMER_BEGIN';
export const UPDATE_CUSTOMER_SUCCESS = 'UPDATE_CUSTOMER_SUCCESS';
export const UPDATE_CUSTOMER_FAILURE = 'UPDATE_CUSTOMER_FAILURE';


export const fetchCustomersBegin = () => ({
  type: FETCH_CUSTOMERS_BEGIN
  
});

export const fetchCustomersSuccess = customers => ({
  type: FETCH_CUSTOMERS_SUCCESS,
  payload: { customers }
});

export const fetchCustomersFailure = error => ({
  type: FETCH_CUSTOMERS_FAILURE,
  payload: { error }
});

// Add Customer
export const addCustomerBegin = () => ({
  type: ADD_CUSTOMER_BEGIN
});

export const addCustomerSuccess = customers => ({
  type: ADD_CUSTOMER_SUCCESS,
  payload: { message: "success" }
});

export const addCustomerFailure = error => ({
  type: ADD_CUSTOMER_FAILURE,
  payload: { error }
});

//DELETE TO
export const deleteCustomerBegin = () => ({
  type: DELETE_CUSTOMER_BEGIN
  
});

export const deleteCustomerSuccess = customers => ({
  type: DELETE_CUSTOMER_SUCCESS,
  payload: {message: "success" }
});

export const deleteCustomerFailure = error => ({
  type: DELETE_CUSTOMER_FAILURE,
  payload: { error }
});

//UPDATE TO
export const updateCustomerBegin = () => ({
  type: UPDATE_CUSTOMER_BEGIN
  
});

export const updateCustomerSuccess = customer => ({
  type: UPDATE_CUSTOMER_SUCCESS,
  payload: {message: "success" }
});

export const updateCustomerFailure = error => ({
  type: UPDATE_CUSTOMER_FAILURE,
  payload: { error }
});

export function fetchCustomers() {
  return dispatch => {
    dispatch(fetchCustomersBegin());
    axios
    .get("http://localhost:8080/customers/getCustomers")
    .then(response => {
      console.log(response.data);
      dispatch(fetchCustomersSuccess(response.data));
    })
    .catch(error => dispatch(fetchCustomersFailure(error)));
  }
}


export function deleteCustomer(customer) {
  return dispatch => {
    dispatch(addCustomerBegin());
    axios
    .delete("http://localhost:8080/customers/deleteCustomer/" +customer.id+"/" )
    .then(response => {
      console.log(response.data);
      dispatch(deleteCustomerSuccess(response.data));
    })
    .catch(error => dispatch(deleteCustomerFailure(error)));
  }
}
export function addCustomer(customer) {
  return dispatch => {
    dispatch(addCustomerBegin());
    axios
    .post("http://localhost:8080/customers/addCustomer", customer)
    .then(response => {
      console.log(response.data);
      dispatch(addCustomerSuccess(response.data));
    })
    .catch(error => dispatch(addCustomerFailure(error)));
  }
}
//update customer
export function updateCustomer(customer) {
  return dispatch => {
    dispatch(updateCustomerBegin());
    axios
    .post("http://localhost:8080/customers/updateCustomer", customer)
    .then(response => {
      console.log(response.data);
      dispatch(updateCustomerSuccess(response.data));
    })
    .catch(error => dispatch(updateCustomerFailure(error)));
  }
}
//Search customers
export function search(customer) {
    console.log(customer);
  // if(customer.firstName===''){
  //   customer.fistName=" ";

  // }
  // if(customer.lastName===''){
  //   customer.lastName=" ";

  // }
  // if(customer.email===''){
  //   customer.email=" ";
  // }

    var url = "http://localhost:8080/customers/searchCustomer?firstName=" +customer.firstName +"&lastName="+customer.lastName +"&email="+customer.email ;

  return dispatch => {
    dispatch(fetchCustomersBegin());
    axios
    .post("http://localhost:8080/customers/searchCustomer", customer)
    .then(response => {
      console.log(response.data);
     // if(response.data)
      dispatch(fetchCustomersSuccess(response.data));
    })
    .catch(error => dispatch(fetchCustomersFailure(error)));
  }
}

export function searchCustomers(customer) {
  console.log("calling new search");

  var url = "http://localhost:8080/customers/search";

return dispatch => {
  dispatch(fetchCustomersBegin());
  axios
  .get(url, {params:{ firstName: customer.firstName, lastName: customer.lastName, email: customer.email}})
  .then(response => {
    console.log(response.data);
   // if(response.data)
    dispatch(fetchCustomersSuccess(response.data));
  })
  .catch(error => dispatch(fetchCustomersFailure(error)));
}
}
const initialState = {
  customers: [],
  customer: {}
}

export const store = createStore(CustomerReducer, initialState, applyMiddleware(thunk));


