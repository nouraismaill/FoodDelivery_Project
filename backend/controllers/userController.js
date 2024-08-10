import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import userModel from "../models/userModel.js";
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY);
};
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if email already exists
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Validate email
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // Validate password length
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password should be at least 8 characters",
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    // Save user and create token
    const user = await newUser.save();
    const token = createToken(user._id);

    // Return success response
    return res.status(201).json({
      success: true,
      token,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred",
    });
  }
};

export { login, registerUser };
