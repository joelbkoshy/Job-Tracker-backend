import express from 'express'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import User from '../models/User.js'

const router = express.Router()

router.post('/users/register', async (req, res) => {
    const { name, email, password } = req.body

    try {
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10) // 10 is the saltRounds

        // Create a new user with the hashed password
        const userData = {
            name,
            email,
            password: hashedPassword
        }

        // Insert the user into the database
        await User.insertMany(userData)

        return res.status(200).json({
            status: "success",
            message: "User registered successfully!"
        })
        
    } catch (error) {
        console.error(error)
        return res.status(400).json({
            status: "failure",
            message: "Error signing up the user!"
        })
    }
})

export default router
