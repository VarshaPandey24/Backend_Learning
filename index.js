require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const userRoutes=require('./routes/userRoutes');


const app=express()

//Middleware
app.use(express.json())

//routes
app.use('/users',userRoutes)

//connect DB and run server
mongoose.connect(process.env.MONGO_URI)
.then(()=>
{
    app.listen(process.env.PORT,()=>{
        console.log(`The server is running on the http://localhost ${process.env.PORT}`);
    });
})

.catch(err => console.log(err));

