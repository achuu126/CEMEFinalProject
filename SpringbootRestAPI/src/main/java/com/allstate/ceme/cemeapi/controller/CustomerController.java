package com.allstate.ceme.cemeapi.controller;
import com.allstate.ceme.cemeapi.service.CustomerService;
import java.util.Collection;
import com.allstate.ceme.cemeapi.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customers")
// @EnableSwagger2
 @CrossOrigin
 public class CustomerController {
    @Autowired
    private CustomerService service;
    
    @RequestMapping(value = "/getCustomers", method = RequestMethod.GET)
    public Collection<Customer> getCustomers() {
        Collection<Customer> custs = service.getCustomers();
        return custs;
    }

    @ResponseBody
    @RequestMapping(value = "/addCustomer", method = RequestMethod.POST)
    public void addCustomer(@RequestBody Customer cust) {
        
        service.addCustomer(cust);
    }

    @ResponseBody
    @RequestMapping(value = "/updateCustomer", method = RequestMethod.POST)
    public void updateCustomer(@RequestBody Customer cust) {
        
        service.updateCustomer(cust);
    }


    @RequestMapping(value = "/deleteCustomer/{id}", method = RequestMethod.DELETE)
    public void deleteCustomer(@PathVariable String id) { 

        service.deleteCustomerById(id) ;
    }
   
}