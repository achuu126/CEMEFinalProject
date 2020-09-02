package com.allstate.ceme.cemeapi.data;

    
import com.allstate.ceme.cemeapi.entity.Customer;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.DeleteQuery;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import java.util.List;
import java.util.Collection;


@RepositoryRestResource(collectionResourceRel = "customer", path = "customer")
public interface CustomerRepository extends MongoRepository<Customer, ObjectId> {


    public List<Customer> findByLastName(String lastName);


    @Query("{'firstName': ?0}")
    public List<Customer> customFindByFirstName(String firstName);
    @Query(value = "{ $or: [ { 'firstName' : {$regex:?0,$options:'i'} }, { 'lastName' : {$regex:?0,$options:'i'} , { 'email' : {$regex:?0,$options:'i'} } ] }")
    public Collection<Customer> customFindByFirstNameOrLastNameOrEmail(String firstName, String lastName, String email);
    @Query("{'email': ?0}")
    public Customer customFindByemail(String email);
    @Query("{'id': ?0}")
    public Customer customFindByid(ObjectId id);
    @DeleteQuery
    public void deleteByid(ObjectId id);
}






