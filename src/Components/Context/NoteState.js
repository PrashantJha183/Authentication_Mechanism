import React, { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
  const host = process.env.REACT_APP_BACKEND_HOST;
  const blogInitial = [];
  const [blog, setBlog] = useState(blogInitial);

  //For blog posting
  const addBlog = async (title, description, tag) => {
    console.log("Adding a new note");
    const response = await fetch(`${host}/api/notes/addblog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
        "login-role": localStorage.getItem("roleStat"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const blogs = await response.json();
    setBlog(blog.concat(blogs));
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

  return (
    <>
      <NoteContext.Provider value={{ blog, addBlog }}>
        {props.children}
      </NoteContext.Provider>
    </>
  );
};

export default NoteState;
