import React from "react";
export default function Footer() {
  return (
    <>
      <div>
        <div
          className="d-flex justify-content-evenly align-items-center"
          style={{
            backgroundColor: "#2c2c2c",
            color: "#ffff",
            height: "10vh",
            //   width: "100%",
          }}
        >
          <div className="mail">
            <p>
              toastedmedia.creatives@gmail.com
              <br />
              ayushparab.work@gmail.com
            </p>
          </div>

          <div className="phone">
            <p>
              +91-8080469320
              <br />
              +91-8390896630
            </p>
          </div>

          <div className="address">
            <p>
              B-005, Ekveera Vihar, Dongarpada Chikhal Dongri Rd.
              <br />
              Near John XXII CBSE Scholl Virar West - 401303
            </p>
          </div>

          <div className="toaster pb-5">
            <img
              src="Toaster.png"
              alt="noImage"
              style={{ height: "120px", width: "200px", marginTop: "50px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
