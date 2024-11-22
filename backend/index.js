const express = require("express");
const ConnectDB = require("./Config/DB");

const app = express();


require("dotenv").config();


// Middleware
app.use(express.json());


// USER CONTROLLERS
const UserController = require("../backend/Controllers/UserAccountController");
// ROLE CONTROLLERS
const RoleController = require('../backend/Controllers/RoleController');

// Create a new role
app.route('/').post(RoleController.createRole);

// Get all roles
app.route('/').get(RoleController.getAllRoles);

// Get a role by ID
app.route('/:id').get(RoleController.getRoleById);

// Update a role by ID
app.route('/:id').put(RoleController.updateRole);

// Delete a role by ID
app.route('/:id').delete(RoleController.deleteRole);




// Create a new user account
app.route("/").post(UserController.createUser);

// Get all user accounts
app.route("/").get(UserController.getAllUsers);

// Get a user account by ID
app.route("/:id").get(UserController.getUserById);

// Update a user account by ID
app.route("/:id").put(UserController.updateUser);

// Delete a user account by ID
app.route("/:id").delete(UserController.deleteUser);



app.listen(process.env.PORT,()=>{
    ConnectDB();
    console.log(`SERVER IS RUNNING ON THE PORT ${process.env.PORT}`)
})