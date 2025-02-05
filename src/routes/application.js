import express from 'express'
import Application from '../models/Application.js'

const router = express.Router()

router.post('/applications', async (req, res) => {

    const { company, position, notes,user } = req.body

    await Application.insertMany({ company, position, notes, user })

    return res.status(200).json({
        status: "success",
        message: "Application submitted successfully!"
    })

})



export default router