const multer = require("multer");
const path = require('path');

const uploads = multer({
  Storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(
        null,
        Date.now() +
          Math.floor(Math.random() * 99999 + path.extname(file.originalname))
      );
    },
  }),
}).fields([
  {
    name: "images",
    maxCount: 5,
  },
  {
    name: "thumbnai",
    maxCount: 1,
  },
]);

module.exports = uploads;
