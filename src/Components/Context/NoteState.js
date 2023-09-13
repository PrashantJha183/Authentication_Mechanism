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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMDIzNTYxMzIyMTRmNjdjODJlMTc1In0sImlhdCI6MTY5NDU0ODYzNX0.f2vkZ4inVvMm3Xt-xvHq4z40owxEecbeZP6xNrgDqS4",
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
  // const fetchBlogs = async () => {
  //   const response = await fetch(`${host}/api/auth/getAllID`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       // "auth-token":
  //       //   "0",
  //     },
  //   });

  //   // console.log(response);
  //   const data = await response.json();
  //   // console.log(data);
  //   setNotes(data);
  // };
  // console.log(fetchBlogs());

  return (
    <>
      {/* console.log(getNotes()) */}
      <NoteContext.Provider value={{ notes, addNotes }}>
        {props.children}
      </NoteContext.Provider>
    </>
  );
};

export default NoteState;
