const Notes = require("../models/Notes");
const ID = require("./auth");

const fetchLatestBlogs = async (id) => {
  const { user } = req.body;
  const notes = await Notes.find({ user: id });
  console.log(notes[notes.length - 1]);

  // console.log("name", name);
  // const notes = await Notes.find({ user: Notes.id });
  // console.log(notes);
};
module.exports = fetchLatestBlogs;
