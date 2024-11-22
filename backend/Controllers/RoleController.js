// controllers/roleController.js
const Roles = require('../Model/Roles_Model');

// CREATE a new role
const createRole = async (req, res) => {
  try {
    const { RoleName, Status } = req.body;
    const newRole = new Role({ RoleName, Status });
    await newRole.save();
    res.status(201).json({ message: 'Role created successfully', newRole });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET all roles
const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET a role by ID
const getRoleById = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
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
    const updatedRole = await Role.findByIdAndUpdate(
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
    const deletedRole = await Role.findByIdAndDelete(req.params.id);
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
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole,
};
