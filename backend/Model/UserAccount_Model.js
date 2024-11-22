const mongoose = require("mongoose");

// Define the UserAccount schema with restrictions
const UserAccountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"], // Name must be provided
      minlength: [3, "Name must be at least 3 characters"], // Minimum length
      maxlength: [50, "Name cannot exceed 50 characters"] // Maximum length
    },
    email: {
      type: String,
      required: [true, "Email is required"], // Email must be provided
      unique: true, // Ensures no duplicate emails
      trim: true, // Removes leading/trailing whitespace
      lowercase: true, // Store email in lowercase
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please provide a valid email address"] // Validates email format
    },
    password: {
      type: String,
      required: [true, "Password is required"], // Password must be provided
      minlength: [8, "Password must be at least 8 characters"], // Minimum length
      select: false // Prevents password from being returned in queries by default
    },
    role: {
      type: mongoose.Schema.ObjectId, // Stores a reference to another document (e.g., Role)
      ref: "Roles", // Refers to the 'Roles' collection
      required: [true, "Role is required"] // Role must be provided
    }
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt fields
  }
);

// Create and export the model
const UserAccount = mongoose.model("UserAccount", UserAccountSchema);

module.exports = UserAccount;
