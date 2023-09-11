import React, { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //For blog posting
  const addNotes = async (title, description, tag) => {
    console.log("Adding a new note");
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMzUzZmI3ZTBjMzNiMzUxOWNkZmIzIn0sImlhdCI6MTY5Mjc3OTQ1OX0.8EyfjcuNce-emCQgWB7pMpYrnQq3IK5qwQg5tscUxxo",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // const editNotes = async (id, title, description, tag) => {
  //   const resonse = await fetch(`${host}/api/notes/updatenotes/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token": "",
  //     },
  //     body: JSON.stringify({ title, description, tag }),
  //   });
  //   const json = resonse.json();

  //   for (let index = 0; index === 0; index++) {
  //     const element = notes[index];
  //     if (element._id === id) {
  //       element.title = title;
  //       element.description = description;
  //       element.tag = tag;
  //     }
  //   }
  // };

  //for fetching blog
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMzUzZmI3ZTBjMzNiMzUxOWNkZmIzIn0sImlhdCI6MTY5Mjc3OTQ1OX0.8EyfjcuNce-emCQgWB7pMpYrnQq3IK5qwQg5tscUxxo",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  return (
    <>
      <NoteContext.Provider value={{ notes, getNotes, addNotes }}>
        {props.children}
      </NoteContext.Provider>
    </>
  );
};

export default NoteState;
