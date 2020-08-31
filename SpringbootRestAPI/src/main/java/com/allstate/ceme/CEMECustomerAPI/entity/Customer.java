package com.allstate.ceme.CEMECustomerAPI.entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

@Document
public class Customer {

	@Id
    private ObjectId id;
    private String firstName;
    private String middleInitial;
    private String lastName;
    private String street;
    private String city;
    private String state;
    private String zipCode;
    private String phoneNumber;
    private String email;
    private String gender;
    private String birthDate;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZipCode() {
        return zipCode;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Customer customer = (Customer) o;
        return getName().equals(customer.getName()) &&
                getStreet().equals(customer.getStreet()) &&
                getCity().equals(customer.getCity()) &&
                getZipCode().equals(customer.getZipCode());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getName(), getStreet(), getCity(), getZipCode());
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public Customer() {
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public Customer(String name, String street, String city, String zipCode) {
        this.name = name;
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
    }
}
