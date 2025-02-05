import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config.js';
import cors from 'cors'
import bodyParser from 'body-parser';


import register from './src/routes/register.js'
import login from './src/routes/login.js'
import application from './src/routes/application.js'
import fetchApplications from './src/routes/fetchApplications.js'
import singleApplication from './src/routes/fetchSingleApplication.js'
import updateApplication from './src/routes/updateApplication.js'
import deleteApplication from './src/routes/deleteJobApplication.js'




dotenv.config();
const app = express();

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

app.use('/api', register)
app.use('/api', login)
app.use('/api', application)
app.use('/api', fetchApplications)
app.use('/api', singleApplication)
app.use('/api', updateApplication)
app.use('/api', deleteApplication)


// // Sample Routes
// app.get('/', (req, res) => {
//     res.send("🚀 API is running...");
// });

// app.get('/users', async (req, res) => {
//     const users = await User.find();
//     res.json(users);
// });

// app.get('/posts', async (req, res) => {
//     const posts = await Post.find().populate('author', 'name email');
//     res.json(posts);
// });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
