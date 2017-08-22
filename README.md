# mongoose-crud

## REST API

List of user routes:

Route | HTTP | Description
------|------|------------
`/api/books` | POST | Create a book
`/api/books` | GET | Get all the books
`/api/books/:id` | GET | Get a single book
`/api/books/:id` | DELETE | Delete a book
`/api/books/:id` | PUT | Update a book with new info
`/api/books/:id` | PATCH | Update a book with a specific info
`/api/customers` | GET | Get all the customers
`/api/customers/:id` | GET | Get a single customer
`/api/customers/:id` | DELETE | Delete a customer
`/api/customers/:id` | PUT | Update a customer with new info
`/api/customers/:id` | PATCH | Update a customer with a specific info
`/api/transactions` | GET | Get all the transactions
`/api/transactions/:id` | GET | Get a single transaction
`/api/transactions/:id` | DELETE | Delete a transaction
`/api/transactions/:id` | PUT | Update a transaction with new info
`/api/transactions/:id` | PATCH | Update a transaction with a specific info

## Usage
With only npm:
```
npm install
npm start
npm run dev
```

Access from localhost via http://localhost:3000 or API via http://localhost:3000/api
