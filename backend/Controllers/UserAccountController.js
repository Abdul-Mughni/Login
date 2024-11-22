const UserAccount = require("../Model/UserAccount_Model"); // Import the UserAccount model

// CREATE a new user account
const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const newUser = new UserAccount({ name, email, password, role });
    await newUser.save();
    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET all user accounts
const getAllUsers = async (req, res) => {
  try {
    const users = await UserAccount.find().select("-password"); // Exclude passwords
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET a user account by ID
const getUserById = async (req, res) => {
  try {
    const user = await UserAccount.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE a user account by ID
const updateUser = async (req, res) => {
  try {
    const { name, email, role } = req.body; // Exclude password updates here
    const updatedUser = await UserAccount.findByIdAndUpdate(
      req.params.id,
      { name, email, role },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a user account by ID
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await UserAccount.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Export CRUD functions
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
