import React from "react";


function nudesItem(props) {
  const { nudes } = props;
  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title"> {nudes.title}</h2>
            <p className="card-text">{nudes.description}</p>
            <p className="card-text">{nudes.tag}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default nudesItem;
