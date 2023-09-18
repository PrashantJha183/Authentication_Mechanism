const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//ROUTE 1: Get all the notes using GET method /api/notes/fetchallnotes   login required
router.get("/fetchblog", fetchUser, async (req, res) => {
  try {
    //fetching user id through "fetchUser" middleware
    const notes = await Notes.find({ user: res.user.id });

    console.log(notes);
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

//ROUTE 2: Add a notes using POST method /api/notes/addnotes   login required
router.post(
  "/addblog",
  fetchUser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be of atleast 5 characters").isLength(
      { min: 5 }
    ),
  ],
  async (req, res) => {
    try {
      //Valid user must have to insert below elements of an array to insert data into a database
      const { title, description, tag } = req.body;
      //If there are errors while performing validation then return errors
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).send({ errors: result.array() });
      }

      //Inserting notes of valid user in the database
      const note = new Notes({
        title,
        description,
        tag,
        user: res.user.id,
      });

      //Saving notes of valid user in the database
      const savedNotes = await note.save();
      res.json(savedNotes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

//ROUTE 3: Update an existing note using PUT method /api/notes/updatenotes   login required
router.put("/updateblog/:id", fetchUser, async (req, res) => {
  //Fetching below elements of an array from the database which was inserted by the valid user
  const { title, description, tag } = req.body;
  try {
    const newNote = {};

    //If I am getting title from the database and user want to update it then update it and make
    // newNote.title == title and then add it to the newNote{},
    // If not getting title from the database then valid user doesn't want to update title
    if (title) {
      newNote.title = title;
    }

    //If I am getting description from the database and user want to update it then update it and make
    // newNote.description == description and then add it to the newNote{},
    // If not getting description from the database then valid user doesn't want to update description
    if (description) {
      newNote.description = description;
    }

    //If I am getting tag from the database and user want to update it then update it and make
    // newNote.tag == tag and then add it to the newNote{},
    // If not getting tag from the database then valid user doesn't want to update title
    if (tag) {
      newNote.tag = tag;
    }

    //------------------------Find the note to be updated and update it--------------------------------------

    //Fetching id of the user which is logged in and want to update a his/her note
    //(comparing it from the id available at "/updatenotes/:id")
    let note = await Notes.findById(req.params.id);

    //Verifying that some notes was created by this user
    if (!note) {
      return res.status(404).send("Not found");
    }

    //Verifying that notes was created by the logged in user by checking that the id of notes must be == id of
    // logged in user
    if (note.user.toString() !== res.user.id) {
      return res.status(401).send("Not allowed to do that");
    }

    (note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      {
        new: true,
      }
    )),
      res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

//ROUTE 4: Delete an existing note using DELETE method /api/notes/deletenotes   login required
router.delete("/deleteblog/:id", fetchUser, async (req, res) => {
  try {
    //------------------------Find the note to be deleted and delete it--------------------------------------

    //Fetching id of the user which is logged in and want to update a his/her note
    //(comparing it from the id available at "/deletenotes/:id")
    let note = await Notes.findById(req.params.id);

    //Verifying that some notes was deleted by this user
    if (!note) {
      return res.status(404).send("Not found");
    }

    //Verifying that notes was created by the logged in user by checking that the id of notes must be == id of
    // logged in user
    if (note.user.toString() !== res.user.id) {
      return res.status(401).send("Not allowed to do that");
    }

    (note = await Notes.findByIdAndDelete(req.params.id)),
      res.json({ Success: "Note has been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
