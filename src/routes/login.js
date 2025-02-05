import express from 'express'
import dotenv from 'dotenv'
import User from '../models/User.js'

const router = express.Router()

//jwt token validation should be used

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.find(req.body)
        return res.status(200).json({
            status: "success",
            message: "user logged in!",
            userID: user[0]._id
        })

    } catch (error) {
        return res.status(404).json({
            status: "failiure",
            message: "User not found!"
        })
    }

})



export default router