import React from "react";

function FetchAllBlog(props) {
  const { title, description, tag, date } = props;
  return (
    <>
      <div className="card text-center" style={{ borderColor: "#cfa97d" }}>
        <div
          className="card-body"
          style={{ backgroundColor: "#cfa97d", outline: "none" }}
        >
          <h2 className="card-title"> {title}</h2>
          <p className="card-text">{description}</p>
          <p className="card-text">{tag}</p>
          <p className="card-text">{new Date(date).toLocaleString()}</p>
        </div>
      </div>
    </>
  );
}

export default FetchAllBlog;
