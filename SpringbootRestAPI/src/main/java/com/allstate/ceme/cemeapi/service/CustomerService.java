package com.allstate.ceme.cemeapi.service;

import com.allstate.ceme.cemeapi.data.CustomerRepository;
import com.allstate.ceme.cemeapi.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.bson.types.ObjectId;
import java.util.Collection;

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
        return dao.customFindByid(new ObjectId(id));
    }
   
    public Customer findCustomerByEmail(String email) {
        return dao.customFindByemail(email);
    }
   
    public void deleteCustomer(Customer cust) {
        cust.setId(new ObjectId(cust.getId()));
        dao.delete(cust);
    }

 

    public void deleteCustomerById(String id) {
        dao.deleteByid(new ObjectId(id));
    }

 

}