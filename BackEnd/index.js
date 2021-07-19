const { Router } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DB_CONNECT,{useUnifiedTopology:true,useNewUrlParser:true},()=>console.log("Database Connected!"));
mongoose.set("useFindAndModify", false);
const listingRoutes = require("./routes/listing");
app.use(express.json());
app.use("/api/listings",listingRoutes);
app.use(cors());
app.listen(3000,()=>console.log("Application Running On Port No:3000"));