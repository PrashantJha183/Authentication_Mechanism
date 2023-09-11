import React, { useContext, useEffect } from "react";
import NoteContext from "./Context/NoteContext";
import NotesItem from "./FetchBlog";
// import Blog from "./CreateBlog";

function Notes() {
  const context = useContext(NoteContext);
  const { notes, getNotes } = context;

  useEffect(() => {
    getNotes();

    // eslint-disable-next-line
  }, []);
  return (
    <>
      {/* <Blog /> */}
      <div className="row my-3">
        <h1 className="text-center">My Blogs</h1>
        <div className="container">
          {notes.length === 0 && "No blogs to display"}
        </div>
        {notes.map((notes) => {
          return <NotesItem notes={notes} key={notes._id} />;
        })}
      </div>
    </>
  );
}

export default Notes;
