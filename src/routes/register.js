import express from 'express'
import dotenv from 'dotenv'
import User from '../models/User.js'

const router = express.Router()

router.post('/users/register', async (req, res) => {

    try {
        await User.insertMany(req.body)
        return res.status(200).json({
            status : "success",
            message : "User registered successfully!"
        })
        
    } catch (error) {
        return res.status(400).json({
            status : "failure",
            message : "Error signing up the user!",
            
        })
    }

})



export default router