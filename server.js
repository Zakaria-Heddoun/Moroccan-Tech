const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const app = express();
const port = 3000;

require("dotenv").config();
const url = process.env.dburl;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

mongoose.connect(url)
.then(()=>{
    console.log('connected successfully');
}).catch((error)=>{
    console.log("connection unsuccesfull", error);
});

app.use('/api', productRoutes);