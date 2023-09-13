import React, { useRef } from "react";
import Header from "./Header";
import Footer from "./Others/Footer";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u1vn8gy",
        "template_dk0eb6c",
        form.current,
        "dR4Fj6AZd6m1qt8vK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <Header />
      {/* <div className="contact-body">
        <div className="hr1"></div>
        <div className="contact-info">
          <div className="contact-heading">Or contact us at </div>
          <div className="email">
            <div className="icon-1">
              <img src="mail.png" alt="" className="contact-icon" />
            </div>
            <div className="mail-text text">
              <Link to="/mailto:toastedmedia.creatives@gmail.com">
                toastedmedia.creatives@gmail.com
              </Link>
              <br />
              <Link to="/">ayushparab.work@gmail.com</Link>
              <br />
              <Link to="/"> kulkarniyash.work@gmail.com</Link>
            </div>
          </div>
          <div className="phone">
            <div className="icon-2">
              <img src="phone.png" alt="" className="contact-icon" />
            </div>
            <div className="phone-text text">
              +91-8080469320
              <br />
              +91-8390896630
            </div>
          </div>
          <div className="address">
            <div className="icon-3">
              <img src="navigation.png" alt="" className="contact-icon" />
            </div>
            <div className="address-text text">
              B-005, Ekveera Vihar, Dongarpada Chikhal Dongri Rd. Near John
              XXIII CBSE School Virar West - 401303
            </div>
          </div>
        </div>
      </div> */}
      <div className="container" style={{ marginTop: "10%" }}>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Subject</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlTextarea1"
              name="subject"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary my-2"
            style={{ display: "block", margin: "auto" }}
            value="send"
          >
            Send message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
