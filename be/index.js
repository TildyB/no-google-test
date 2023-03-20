const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
const publicRoutes = require("./routes/public");
const privateRoutes = require("./routes/private");
const checkDataRoutes = require("./routes/checkData");
const signUpRoutes = require("./routes/signUp");
const loginRoutes = require("./routes/login")
// const authMiddleware = require('./middlewares/authMiddleware')

app.use(cors());
app.use(express.json());
// app.use(authMiddleware)

app.use("/api/public", publicRoutes);
app.use("/api/private", privateRoutes);
app.use ("/api/check", checkDataRoutes);
app.use("/api/signUp", signUpRoutes);
app.use("/api/login", loginRoutes)




mongoose
  .connect(
    "mongodb+srv://hospitalsDB:hospitalsDB2023@hospital.shz8y3u.mongodb.net/NoGoogleAuthTest",
    {}
  )
  .then(() =>
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    )
  )
  .catch((err) => console.log(err));
