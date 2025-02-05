import express from 'express'
import Application from '../models/Application.js'
import fetchUser from '../jwtValidation/tokenValidation.js'

const router = express.Router()

router.post('/applications', fetchUser, async (req, res) => {

    const { company, position, notes, dateApplied ,status,user } = req.body

    await Application.insertMany({ company, position, notes,status, dateApplied, user })

    return res.status(200).json({
        status: "success",
        message: "Application submitted successfully!"
    })

})



export default router