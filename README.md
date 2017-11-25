# mysqlRest
Starter template for a NodeJS Express REST API to perform CRUD operations with a MySQL or similar relational database

Inspired by and extended from [this article](https://jinalshahblog.wordpress.com/2016/10/06/rest-api-using-node-js-and-mysql/)

## Instructions
1. Fork and Clone this repo
2. Edit connection details in dbconnection.js
3. See sample DB entity models in /models starting with Task.js.  Add a model for each entity you need
4. See REST API URI and implementation samples in /routes.  Add a route for each API you need
5. See require statements at top of app.js and your new routes
6. See app.use statements in middle of app.js and add your new routes

```
$ npm install
$ npm start
```

Test in Postman with URI http://localhost:3000/Tasks
* GET http://localhost:3000/Tasks to fetch all rows from task table
* POST http://localhost:3000/Tasks to insert a new row into the task table
* GET http://localhost:3000/Tasks/1 to fetch row with id 1
* DELETE http://localhost:3000/Tasks/1 to delete row with id 1
* PUT http://localhost:3000/Tasks/1 to update row with id 1

## Sample UI
Based on the excellent [ng-admin project](https://github.com/marmelab/ng-admin)

* See sample UI by opening  [http://localhost:3000/ng-admin-client/](http://localhost:3000/ng-admin-client/) in a browser
* Add your own API entities in the UI by editing public/ng-admin-client/admin.js