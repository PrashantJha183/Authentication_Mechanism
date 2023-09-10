import React from "react";

export default function Services() {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-end align-items-center">
          <span className="services my-5">
            <p
              className="ourServices"
              style={{ color: "brown", fontWeight: "1000px", fontSize: "70px" }}
            >
              Our Services
            </p>
            <span className="items text-center" style={{ fontSize: "30px" }}>
              <p className="videography">Videography</p>
              <p className="photography">Photography</p>
              <p className="development">Development</p>
              <p className="marketing">Marketing</p>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
