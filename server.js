const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser=require('cookie-parser')
require('dotenv').config();
//import routes
const authRoutes=require("./routes/auth.js");
const userRoutes=require("./routes/user.js");
const categoryRoutes=require("./routes/category.js");
const productRoutes=require("./routes/Product.js");
//app
const app = express();

//db connection
mongoose
    .connect(process.env.LOCAL_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'))
    .catch(err=>console.log(err))

//middlewares
app.use(express.json());
app.use(cors({credentials:true,origin:"http://localhost:3000"}));
app.use(cookieParser())
//routes middlewares
app.use('/api',authRoutes)
app.use('/api',userRoutes)
app.use('/api',categoryRoutes)
app.use('/api',productRoutes)


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
