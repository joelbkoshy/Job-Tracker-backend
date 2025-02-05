import express from 'express'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/User.js'

const router = express.Router()

dotenv.config()

router.post('/users/login', async (req, res) => {
    const { email, password } = req.body

    try {
        // Find user by email
        const user = await User.findOne({ email })
        
        if (!user) {
            return res.status(404).json({
                status: "failure",
                message: "User not found!"
            })
        }

        // Compare the password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password)
        
        if (!isMatch) {
            return res.status(400).json({
                status: "failure",
                message: "Invalid credentials!"
            })
        }

        // Create a JWT token
        const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' })

        return res.status(200).json({
            status: "success",
            message: "User logged in!",
            token
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: "failure",
            message: "An error occurred!"
        })
    }
})

export default router
