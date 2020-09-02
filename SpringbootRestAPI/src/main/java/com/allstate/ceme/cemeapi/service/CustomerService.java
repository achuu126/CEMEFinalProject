package com.allstate.ceme.cemeapi.service;

import com.allstate.ceme.cemeapi.data.CustomerRepository;
import com.allstate.ceme.cemeapi.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.bson.types.ObjectId;
import java.util.Collection;
import java.util.Optional;

@Service
public class CustomerService {

     @Autowired
    private CustomerRepository dao;

    public void addCustomer(Customer cust) {
       dao.insert(cust);
    }

    public void updateCustomer(Customer cust) {
        cust.setId(new ObjectId(cust.getId()));
        dao.save(cust);
    }
   
    public Collection<Customer> getCustomers() {
        return dao.findAll();
    }

 

    public Customer findCustomerById(String id) {
      //  return dao.findById(new ObjectId(id));
        Optional<Customer> customerOptional = dao.findById(new ObjectId(id));
    if (customerOptional.isPresent()){
     Customer customer = customerOptional.get();
     return customer;
    }
   return null;
    }
   
    public Customer findCustomerByEmail(String email) {
        return dao.findByEmail(email);
    }
   
    public void deleteCustomer(Customer cust) {
        cust.setId(new ObjectId(cust.getId()));
        dao.delete(cust);
    }

 

    public void deleteCustomerById(String id) {
        dao.deleteById(new ObjectId(id));
    }

 

}