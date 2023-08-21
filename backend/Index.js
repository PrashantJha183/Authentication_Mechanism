const connectToMongo = require("./database");
const express = require("express");
connectToMongo();

const app = express();
const port = 5000;

//To send any data we have to use this middleware
app.use(express.json());

//My routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
