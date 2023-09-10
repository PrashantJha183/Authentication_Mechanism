import React, { useRef, useEffect, useState } from "react";
import Toast from "./Toast";
import Bread from "./Bread";

export default function Main() {
  const myRef = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();
  console.log("myElementIsVisible", myElementIsVisible);
  useEffect(() => {
    console.log("myRef", myRef.current);
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
      // console.log(entry);
    });
    observer.observe(myRef.current);
  }, []);
  return (
    <>
      {/* {!myElementIsVisible ? (
          <Toast />
        ) : (
            <Bread />
        )} */}
      <div className="container">
        <div className="color">
          <p
            className="d-flex"
            style={{
              fontSize: "4rem",
              flexDirection: "column",
              marginTop: "8%",
            }}
          >
            Toasted Media
            <span className="creatives" style={{ fontSize: "3rem" }}>
              Creatives
            </span>
            <span className="shortDescription" style={{ fontSize: "2rem" }}>
              One Stop destination for all your creative needs.
            </span>
            <span className="contact " style={{ fontSize: "1.5rem" }}>
              <button className="p-2 my-1" style={{ borderRadius: "9%" }}>
                Contact Us
              </button>
            </span>
          </p>
        </div>
        <div className="d-flex justify-content-end my-5">
          <Toast />
        </div>

        <div
          className="d-flex justify-content-end align-item-center"
          style={{ marginTop: "40%", height: "1000px" }}
          ref={myRef}
        >
          <span className="services my-5">
            <p
              className="ourServices"
              style={{ color: "brown", fontWeight: "bold", fontSize: "5rem" }}
            >
              Our Services
            </p>
            <span
              className="items text-center"
              style={{ fontSize: "30px", height: "1000px" }}
            >
              <p className="videography">Videography</p>
              <p className="photography">Photography</p>
              <p className="development">Development</p>
              <p className="marketing">Marketing</p>
            </span>
          </span>

          {/* <span className="d-flex justify-content-start">
            <Bread />
          </span> */}
        </div>
      </div>
    </>
  );
}
