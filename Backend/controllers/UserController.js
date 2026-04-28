import User from "../model/User.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from "dotenv";

export const addUser = async (req, res) => {
  try {
    // ✅ Extract fields
    const {
      Name,
      Email,
      Password,
      Number,
      Address
    } = req.body;

    // ✅ Validate basic fields
    if (!Name || !Email || !Password || !Number) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided"
      });
    }

    // ✅ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format"
      });
    }

    // ✅ Check existing user
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    // ✅ Validate Address (object)
    let validatedAddress = {};

    if (Address) {
      const {
        street,
        city,
        state,
        country,
        pincode
      } = Address;

      if (!street || !city || !state || !country || !pincode) {
        return res.status(400).json({
          success: false,
          message: "All address fields are required"
        });
      }

      validatedAddress = Address;
    }
    let hashedPassword = await bcrypt.hash(Password, 10);

    // ✅ Create user
    const user = await User.create({
      Name,
      Email,
      Password:hashedPassword,
      Number,
      Address: validatedAddress
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const login = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    
    res.json({
      token: token, // send token in response
      user: {
        name: user.Name,
        email: user.Email,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};