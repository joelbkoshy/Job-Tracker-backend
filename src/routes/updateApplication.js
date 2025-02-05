import express from 'express'
import Application from '../models/Application.js'

const router = express.Router()

router.put('/applications/:id', async (req, res) => {

    const _id = req.params.id
    console.log(_id)
    try {
        const applications = await Application.findByIdAndUpdate(_id, req.body, { new: true });
        if (!applications) return res.status(404).json({ error: "Application not found" });

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