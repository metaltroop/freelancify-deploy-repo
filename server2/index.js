const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors'); // Import the cors middleware

require('./db');
const dashboardRoutes = require('./routes/dashboardRoutes');
const userRoutes=require('./routes/userRoutes');
const contactinfoRoutes=require('./routes/contactinfoRoutes');
app.use(express.json());
app.use(cors({
    origin: 'https://freelancify-deploy-repo-w33j.vercel.app', // Specify the allowed origin
    credentials: true, // Include cookies and credentials with the requests
  }));
  
const PORT=process.env.PORT || 3001;

app.get('/', (req,res)=>{
    res.send('product api ');
})

//dashboard
app.use('/dashboard', dashboardRoutes)
//Users
app.use("/user", userRoutes);
//Contactinfo
app.use('/contactinfo',contactinfoRoutes);

//Admin pannel

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});
