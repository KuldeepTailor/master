const express = require("express");
require("dotenv").config();
const path = require("path");
const uploads = require("./middlwares/multer");
const { addProduct, readproducts } = require("./controlers/productControlers");
require("./db/config");


const app = express();

app.use("/api-files", express.static(path.join(__dirname, "uploads")));



app.get('/insert-data',  uploads ,addProduct);

app.get('/read-data',readproducts);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
