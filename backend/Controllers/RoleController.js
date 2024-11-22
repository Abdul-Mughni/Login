// controllers/roleController.js
const Roles = require('../Model/Roles_Model');

// CREATE a new role
const createRole = async (req, res) => {
  try {
    const { RoleName, Status } = req.body;

    // Validation: check if the necessary fields are provided
    if (!RoleName || !Status) {
      return res.status(400).json({ error: 'RoleName and Status are required' });
    }

    // Create and save the new role
    const newRole = new Roles({ RoleName, Status });
    await newRole.save();

    // Send success response
    res.status(201).json({ message: 'Role created successfully', newRole });
  } catch (error) {
    // Log the error and send an error response
    console.error('Error creating role:', error);
    res.status(400).json({ error: error.message });
  }
};

// GET all roles
const getAllRole = async (req, res) => {
  try {
    const roles = await Roles.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET a role by ID
const getRoleById = async (req, res) => {
  try {
    const role = await Roles.findById(req.params.id);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE a role by ID
const updateRole = async (req, res) => {
  try {
    const { RoleName, Status } = req.body;
    const updatedRole = await Roles.findByIdAndUpdate(
      req.params.id,
      { RoleName, Status },
      { new: true }
    );
    if (!updatedRole) {
      return res.status(404).json({ message: 'Role not found' });
    }
    res.status(200).json({ message: 'Role updated successfully', updatedRole });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a role by ID
const deleteRole = async (req, res) => {
  try {
    const deletedRole = await Roles.findByIdAndDelete(req.params.id);
    if (!deletedRole) {
      return res.status(404).json({ message: 'Role not found' });
    }
    res.status(200).json({ message: 'Role deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Exporting CRUD functions at the end
module.exports = {
  createRole,
  getAllRole,
  getRoleById,
  updateRole,
  deleteRole
};
