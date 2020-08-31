package com.allstate.ceme.CEMECustomerAPI.controller;
import com.allstate.ceme.CEMECustomerAPI.service.CustomerService;
import java.util.Collection;
import com.allstate.ceme.CEMECustomerAPI.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customers")
//@EnableAutoConfiguration

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

    @ResponseBody
    @RequestMapping(value = "/deleteCustomer", method = RequestMethod.POST)
    public void deleteCustomer(@RequestBody Customer cust) { 

        service.deleteCustomer(cust);
    }
   
}