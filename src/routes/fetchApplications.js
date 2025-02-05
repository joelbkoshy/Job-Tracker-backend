import express, { application } from 'express'
import Application from '../models/Application.js'
import fetchUser from '../jwtValidation/tokenValidation.js'

const router = express.Router()

router.get('/applications', fetchUser, async (req, res) => {

const userID = req.userID

    try {
        const applications = await Application.find({ user:userID },)

        return res.status(200).json({
            status: "success",
            applications
        })
    } catch (error) {
              return res.status(404).json({
                status:"failure",
                message:"Applications not found!"
              })
    }



})



export default router