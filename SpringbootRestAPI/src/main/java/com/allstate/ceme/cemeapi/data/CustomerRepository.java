package com.allstate.ceme.cemeapi.data;

    
import com.allstate.ceme.cemeapi.entity.Customer;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.DeleteQuery;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import java.util.List;
import java.util.Optional;
import java.util.Collection;

@RepositoryRestResource(collectionResourceRel = "customer", path = "customer")
public interface CustomerRepository extends MongoRepository<Customer, ObjectId> {

    public List<Customer> findByLastName(String lastName);

    // @Query("{'firstName': ?0}")
    public List<Customer> findByFirstName(String firstName);

    @Query(value = "{ $and: [ { 'firstName' : {$regex:?0,$options:'i'} }, { 'lastName' : {$regex:?1,$options:'i'} }, { 'email' : {$regex:?2,$options:'i'} } ] }")
    public Collection<Customer> customFindByFirstNameOrLastNameOrEmail(String firstName, String lastName, String email);

    // @Query("{'email': ?0}")
    public Customer findByEmail(String email);

    // @Query("{'id': ?0}")
    public Optional<Customer> findById(ObjectId id);
    // @DeleteQuery
    // public void deleteByid(ObjectId id);
}






