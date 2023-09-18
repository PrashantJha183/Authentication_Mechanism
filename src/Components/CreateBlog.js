import React, { useState, useContext } from "react";
import Header from "./Header";
import NoteContext from "./Context/NoteContext";

export default function Blog() {
  const context = useContext(NoteContext);

  const { addBlog } = context;

  const [blog, setBlog] = useState({
    user: "",
    title: "",
    description: "",
    tag: "",
  });

  const blogPost = (e) => {
    e.preventDefault();
    addBlog(blog.title, blog.description, blog.tag);
    setBlog({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
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
              value={blog.title}
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
              value={blog.description}
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
              value={blog.tag}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary my-4 text-center"
            style={{ display: "block", margin: "auto" }}
            onClick={blogPost}
            disabled={
              blog.title.length < 5 ||
              blog.description.length < 5 ||
              blog.tag.length < 5
            }
          >
            Post
          </button>
        </form>
      </div>
    </>
  );
}
