const mongoose = require("mongoose");
const { Schema } = mongoose;
const NotesSchema = new Schema({
  //If some user post some notes so another can't see that notes
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "user",
  // },

  title: { type: String, required: true },
  description: { type: String, required: true },
  tag: { type: String, default: "General" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("notes", NotesSchema);
