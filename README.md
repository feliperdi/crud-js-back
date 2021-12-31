# crud-js-back

This rest API demonstrate some basic  CRUD( create, read, update, delete) operations.

### Status: complete.

### What have I learn.
 It was a pretty simple to implement this rest API. I did encounter some problems during the way, like what and what not to <b>test</b>, but nothing I could solve by myself.  It have helped me increase my confidence in my coding skill.

### It was built using:
 + Nodejs
 + Typescript
 + express 
 + knex (Mysql)
 + Jest
 + Other minor libraries

### Design Patter:
 + MVC

## ENDPOINTS
 <b>URL</b>: https://crud-js-back.herokuapp.com/
 </br>Data format: <b>JSON</b>
 <details><summary>ITEMS</summary>
 
 ### GET 
  Return a array of items:</br>
  
  <b>RESPONSE</b>
  ```
  [
   {
    id: string,
    name: string,
    stock: number,
    s_price: number,
    b_price: string,
    category: category, // Must exist in the table category.
    description: string
   },
   
   {
    id: string,
    name: string,
    stock: number,
    s_price: number,
    b_price: string,
    category: category, // Must exist in the table category.
    description: string
   }.....
   
  ]
  ```
### POST
 Create a new Item and return a new array of Items.</br>
 
 <b>SEND</b>
  ```
   {
    id: string,
    name: string,
    stock: number,
    s_price: number,
    b_price: string,
    category: category, // Must exist in the table category.
    description: string
   }
  ```
  <b>RESPONSE</b>
  ```
  [
   {
    id: string,
    name: string,
    stock: number,
    s_price: number,
    b_price: string,
    category: category, // Must exist in the table category.
    description: string
   },
   {
    id: string,
    name: string,
    stock: number,
    s_price: number,
    b_price: string,
    category: category, // Must exist in the table category.
    description: string
   } ....
  ]
  ```
  
  ### UPDATE
  Edit a existing Item and return a new array of Items.</br>
 
 <b>SEND</b>
  ```
   {
    id: string, 
    name: "NEW NAME", // <--- UPDATED PROPERTY
    stock: number,
    s_price: number,
    b_price: string,
    category: category, // Must exist in the table category.
    description: string
   }
  ```
  <b>RESPONSE</b>
  ```
  [
   {
    id: string,
    name: "NEW NAME", // <---  UPDATED PROPERTY
    stock: number,
    s_price: number,
    b_price: string,
    category: category, // Must exist in the table category.
    description: string
   },
   {
    id: string,
    name: string,
    stock: number,
    s_price: number,
    b_price: string,
    category: category, // Must exist in the table category.
    description: string
   } ....
  ]
  ```
  ### DELETE 
   Delete a existing item.
   
   <b>SEND</b></br>
   ```
   {
    id: string,   
   }
   ```
 </details>

