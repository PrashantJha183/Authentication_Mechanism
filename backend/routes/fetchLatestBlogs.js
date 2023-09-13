const Notes = require("../models/Notes");
const ID = require("./auth");

const fetchLatestBlogs = async (id) => {
  // const { user } = req.body;
  const notes = await Notes.find({ user: id });
  console.log(notes[notes.length - 1]);
};
module.exports = fetchLatestBlogs;
