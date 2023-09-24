const express = require("express");
const Notes = require("../models/Notes");

const fetchAllBlogs = async (res, req, id, name) => {
  console.log(id);
  console.log("names", name);
  const notes = await Notes.find({});
  console.log("Blog length", notes.length);

  req.json({ notes });

  console.log("Array ended here");
};

module.exports = fetchAllBlogs;
