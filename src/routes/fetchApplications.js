import express, { application } from 'express'
import Application from '../models/Application.js'

const router = express.Router()

router.get('/applications', async (req, res) => {

    const { user } = req.query
    try {
        const applications = await Application.find({ user })

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