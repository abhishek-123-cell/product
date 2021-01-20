const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();
// import routes
const db = require("./config/mongoose");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

// app
const app = express();

// db
// mongoose
//   .connect(
//     `mongodb+srv://abhi-123_123:123@123aA@cluster0.cdfzc.mongodb.net/e-commerce?retryWrites=true&w=majority`,
//     {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//     }
//   )
//   .then(() => console.log("DB Connected"));

// middlewares
app.use(morgan("dev"));
app.use(cors());

app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
////excess routes
app.use("/api", userRoutes);
app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

const port = 8001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
