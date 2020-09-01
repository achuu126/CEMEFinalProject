package com.allstate.ceme.cemeapi;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.List;
import  com.allstate.ceme.cemeapi.entity.Customer;
import org.junit.After;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;

@SpringBootTest
class CemeCustomerApiApplicationTests {

    @Autowired
    private MongoTemplate mongoTemplate;

 

    @Test
    // @Before
    // public void cleanUp() {
    //     for (String collectionName : mongoTemplate.getCollectionNames()) {
    //         if (!collectionName.startsWith("system.")) {
    //             mongoTemplate.getCollection(collectionName).remove(new BasicDBObject());
    //         }
    //     }
    // }
    
    public void canInsertSuccessfully() {
        Customer cust1 = new Customer("Amanda", "Chu", "amandachu@email.com", "123 Main St.", "123-456-7890");
        Customer cust2 = new Customer("Reggie", "Madrigal", "reggieM@email.com", "569 Main St.", "661-145-2441");
        Customer cust3 = new Customer("Amy", "Smith", "amySmith@email.com", "897 Main St.", "455-489-2685");

 

        mongoTemplate.insert(cust1);
        mongoTemplate.insert(cust2);
        mongoTemplate.insert(cust3);

 

        List<Customer> discs = mongoTemplate.findAll(Customer.class);
        discs.forEach(disc -> System.out.println(disc.getEmail()));
        assertEquals(3,discs.size());

 

    }
//     @After
//     public void cleanUp() {
//         for (String collectionName : mongoTemplate.getCollectionNames()) {
//             if (!collectionName.startsWith("system.")) {
//                 mongoTemplate.getCollection(collectionName).remove(new BasicDBObject());
//             }
//         }
//     }

 

}
