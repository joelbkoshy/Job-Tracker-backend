import express from 'express'
import Application from '../models/Application.js'

const router = express.Router()

router.get('/applications/:id', async (req, res) => {

    const id = req.params.id
    try {
        const applications = await Application.find({ _id:id })

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