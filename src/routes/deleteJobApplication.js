import express, { application } from 'express'
import Application from '../models/Application.js'
import fetchUser from '../jwtValidation/tokenValidation.js'

const router = express.Router()

router.delete('/applications/:id', fetchUser, async (req, res) => {

    try {
        const applications = await Application.findByIdAndDelete(req.params.id);

        if (!applications) return res.status(404).json({ error: "Application Not Found!" })

        return res.status(200).json({
            status: "success",
            applications
        })
    } catch (error) {
        return res.status(404).json({
            status: "failure",
            message: "Applications not found!"
        })
    }



})



export default router