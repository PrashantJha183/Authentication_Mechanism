import React from "react";

function NotesItem(props) {
  const { notes } = props;
  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title"> {notes.title}</h2>
            <p className="card-text">{notes.description}</p>
            <p className="card-text">{notes.tag}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotesItem;
