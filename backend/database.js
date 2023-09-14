const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/Prashant";
const connectToMongo = () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected successfully");
    })
    .catch((err) => {
      console.log(err);
      process.exit();
    });
};

module.exports = connectToMongo;
