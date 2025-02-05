import fetchUser from "../jwtValidation/tokenValidation.js  ";
import express from 'express'
import dotenv from 'dotenv'


const router = express.Router()

dotenv.config()

router.get('/users/details', fetchUser, (req, res) => {
    return res.status(200).json({
        status: "success",
        userDetails: req.user
    })
})

export default router