const mongoose = require("mongoose");

const url = 'mongodb+srv://Kuldeep:<db_password>@cluster0.jut5m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose
  .connect(url)
  .then(() => {
    console.log("db connected!");
  })
  .catch((error) => {
    console.log(error);
  });
