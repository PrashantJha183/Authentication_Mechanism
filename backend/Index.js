const connectToMongo = require("./database");
const express = require("express");
const cors = require("cors");
connectToMongo();

const app = express();
const port = 5000;

app.use(cors());
//To send any data we have to use this middleware
app.use(express.json());

//My routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(
    `Toasted Media Creatives backend listening at http://localhost:${port}`
  );
});
