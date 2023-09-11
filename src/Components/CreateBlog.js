import React, { useState, useContext } from "react";
import Header from "./Header";
import NoteContext from "./Context/NoteContext";

export default function Blog() {
  const context = useContext(NoteContext);
  // const { notes, setNotes } = context;

  const { addNotes } = context;

  const [notes, setNotes] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const blogPost = (e) => {
    e.preventDefault();
    addNotes(notes.title, notes.description, notes.tag);
    setNotes({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNotes({ ...notes, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Header />

      <h1 className="text-center my-5" style={{ marginTop: `100%` }}>
        Blog
      </h1>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your blog title"
              name="title"
              onChange={onChange}
              required
              minLength={5}
              value={notes.title}
            />
          </div>
          <div className="form-group my-4">
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="20"
              column="15"
              name="description"
              onChange={onChange}
              required
              minLength={5}
              value={notes.description}
              style={{ resize: "none" }}
              placeholder="Enter your blog description"
            ></textarea>
          </div>
          <div className="form-group my-4">
            <label htmlFor="exampleInputEmail1">Tag</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your blog tag"
              name="tag"
              onChange={onChange}
              required
              minLength={5}
              value={notes.tag}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary my-4 text-center"
            style={{ display: "block", margin: "auto" }}
            onClick={blogPost}
            disabled={
              notes.title.length < 5 ||
              notes.description.length < 5 ||
              notes.tag.length < 5
            }
          >
            Post
          </button>
        </form>
      </div>
    </>
  );
}
