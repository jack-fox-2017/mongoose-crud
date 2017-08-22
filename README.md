# mongoose-crud


## File and Folder 
```bash

    .
    ├── README.md
    ├── controllers
    │   └── bookController.js
    │   └── customerController.js
    │   └── transactionController.js
    ├── routes
    │   └── books.js
    │   └── customers.js
    │   └── transactions.js
    │   └── index.js
    ├── models
    │   └── book.js
    │   └── customer.js
    │   └── transaction.js
    ├── package.json
    ├── app.js


    npm install
    require mongoose di app.js
    mongoose connect di app.js
    create model
    create schema inside model


### Setting route

routes | HTTP | Description
-------|------|------------
/books | POST | Insert new books
/books | GET | User can see all books
/books/:id   | GET | Get book information detail with /:_id inputed
/books/:id | PUT | Update or Edit book information detail with /:_id inputed
/books/:id | DELETE | Delete book information detail with /:_id inputed
/customers | POST | Add new customer
/customers | GET | User can see all customers
/customers/:id | GET | User can see customer detail by id
/customers/:id | PUT | User can edit or update customer by id
/customers/:id | DELETE | User can delete customer by id
/transactions | POST | Add transaction with key booklist more than one and value of booklist by different id book 
/transactions | GET | User can see all transactions



### For Running the application Step by Step:


**1st Step**
      
      Using postman go to url : (POST) http://localhost:3000/books

      input new book 

      fill on x-www-form-urlencoded key & value

      isbn : xxx-x-xxxxxx-xx-x
      title : book title
      author : the author
      category : book category (e.g drama, Mature (16+)
      stock : 5
      

**2nd Step**

      using postman go to url : (GET) http://localhost:3000/books

      you can see all the books 
    
    
**3rd Step**
  
      Using postman go to url : (GET) http://localhost:3000/books/:id 
    
      you can see the book information detail by book id that you choose.
    

**4th Step**

      Using postman go to url : (PUT) http://localhost:3000/books/:id
    
      update new book 
    
      fill on x-www-form-urlencoded key & value
    
      isbn : xxx-x-xxxxxx-xx-x
      title : book title edit
      author : the author edit
      category : book category (e.g drama, Mature (16+)
      stock : 5


**5th Step**

      Using postman go to url : (DELETE) http://localhost:3000/books/:id
      
      Delete the book information detail by book id that you choose.


**6th Step**

      Using postman go to url : (POST) http://localhost:3000/customers

      input new customer

      fill on x-www-form-urlencoded key & value

      name : customer name
      memberid : member id customer
      address : address customer
      zipcode : zipcode customer
      phone : phone customer


**7th Step**

      Using postman go to url : (GET) http://localhost:3000/customers

      you can see all the customers

      
**8th Step**

      Using postman go to url : (GET) http://localhost:3000/customers/:id

      you can see detail customer by id


**9th Step

      Using postman go to url : (PUT) http://localhost:3000/customers/:id

      update new customer

      fill on x-www-form-urlencoded key & value

      name : customer name update
      memberid : member id customer update
      address : address customer update
      zipcode : zipcode customer update
      phone : phone customer update
      

**10th Step**

      Using postman go to url : (DELETE) http://localhost:3000/customers/:id

      you can see delete customer by id


**11th Step**

      Using postman go to url : (POST) http://localhost:3000/transactions

      input new transactions

      fill on x-www-form-urlencoded key & value

      memberid: based on id - Collections Customer
      days: num of days
      out_date: 2017-08-22
      due_date: 2017-08-20
      in_date: 2017-08-18
      fine: num of late borrow
      booklist: id book 1
      booklist: id book 2


**12 Step**

      Using postman go to url : (GET) http://localhost:3000/transactions

      you can see all transactions with list of book at booklist
      
      Using postman go to url : (GET) http://localhost:3000/transactions/:id

      you can see detail transactions by id
      
