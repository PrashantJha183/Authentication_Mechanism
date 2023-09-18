import React from "react";

function BlogItem(props) {
  const { title, description, tag, date } = props;
  return (
    <>
      <div className="col-md-3">
        <div className="card text-center">
          <div className="card-body">
            <h2 className="card-title"> {title}</h2>
            <p className="card-text">{description}</p>
            <p className="card-text">{tag}</p>
            <p className="card-text">{new Date(date).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogItem;
