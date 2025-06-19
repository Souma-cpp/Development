CREATE TABLE customers (
    customer_id INT NOT NULL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(20),
    address VARCHAR(255)
);
INSERT INTO customers
VALUES (
        1,
        "John",
        "johnSmith@hotmail.com",
        "9898",
        "Decker Street"
    );
INSERT INTO customers
VALUES (
        2,
        "Jimmy",
        "jimmySmith@hotmail.com",
        "9888",
        "Decker88 Street"
    );
INSERT INTO customers
VALUES (
        3,
        "Tom",
        "Smith@hotmail.com",
        "998",
        "James Street"
    );
INSERT INTO customers
VALUES (
        4,
        "John",
        "johnSmith@hotmail.com",
        "9898",
        "Decker Street"
    );

-- to find all the data in the table
select * from Customers;

-- to find or see only the name and the email of the Customers we use
select name, email from Customers; 

--to find the details when a particular condition is satisfied, we use 
select name from Customers where email='Smith@hotmail.com';
select name from Customers where id=1 ;

--to update a perticular value 
UPDATE customers SET name='Tobey', address='Duke Broker street' WHERE customer_id=4;

--to add a new column
ALTER TABLE customers ADD subscription_number VARCHAR(50);

--to delete a data or some data for a true condition
DELETE FROM customers WHERE customer_id=4;



