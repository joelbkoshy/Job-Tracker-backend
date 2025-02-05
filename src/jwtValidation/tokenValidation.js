import dotenv from 'dotenv'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'

dotenv.config()


const fetchUser = async (req, res, next) => {
    const token = req?.headers?.authorization.split(" ")[1]
    if (!token) {
        return res.status(401).json({
            status: "failure",
            message: "Access denied! No token provided"
        })
    }

    console.log(token,process.env.JWT_SECRET)

    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)
        const user = await User.findById(decoded.userID)

        if (!user) {
            return res.status(404).json({
                status: "failure",
                message: "User not found!"
            })
        }

        req.user = user
        req.userID = decoded.userID
        next()

    } catch (error) {
        return res.status(400).json({
            status: "failure",
            message: "Invalid token!",
        
        })
    }
}


export default fetchUser