//imports
const express = require("express");
const app = express();
require("colors");
require("express-async-errors");
require("dotenv").config({path:"./config/.env"});
const {connectDB} = require("./config/connectDB");
const routers = require("./routers/index");
const cors = require("cors");


//db connection
connectDB();

//Middlewares
app.use(cors());
app.use(require("./middlewares/logger"));
app.use(require("./middlewares/errorHandler"))

// Parse json data
app.use(express.json());

//routers
app.use("/api",routers);

const PORT= process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App is running on Port ${PORT}`.green.underline)
});