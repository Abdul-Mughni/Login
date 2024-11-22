const express = require("express");
const ConnectDB = require("./Config/DB");

const app = express();


require("dotenv").config();


// Middleware
app.use(express.json());

 const {
    createRole,
    getAllRole,
    getRoleById,
    updateRole,
    deleteRole,
  }= require("./Controllers/RoleController")
// USER CONTROLLERS
const UserController = require("./Controllers/UserAccountController");
// ROLE CONTROLLERS


// Create a new role
app.route('/role').post(createRole);

// Get all roles
app.route('/role').get(getAllRole);

// Get a role by ID
app.route('/role/:id').get(getRoleById);

// Update a role by ID
app.route('/role/:id').put(updateRole);

// Delete a role by ID
app.route('/role/:id').delete(deleteRole);




// Create a new user account
app.route("/user").post(UserController.createUser);

// Get all user accounts
app.route("/user").get(UserController.getAllUsers);

// Get a user account by ID
app.route("/user/:id").get(UserController.getUserById);

// Update a user account by ID
app.route("/user/:id").put(UserController.updateUser);

// Delete a user account by ID
app.route("/user/:id").delete(UserController.deleteUser);



app.listen(process.env.PORT,()=>{
    ConnectDB();
    console.log(`SERVER IS RUNNING ON THE PORT ${process.env.PORT}`)
})