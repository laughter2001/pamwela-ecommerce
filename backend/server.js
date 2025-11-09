require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require(`./config/db`);

//Connect to database
connectDB();
