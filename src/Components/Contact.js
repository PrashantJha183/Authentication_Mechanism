import React, { useRef } from 'react'
import Header from './Header'
import Footer from './Others/Footer'
import emailjs from "@emailjs/browser";

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
            alert("Your message have been recieved");
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
            <div className='contact-body'>
                <div className="form-main">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-name">
                            <label htmlFor="exampleFormControlInput1"></label>
                            <input
                                type="text"
                                className="name-body"
                                id="exampleFormControlInput1"
                                placeholder="Name Surname"
                                name="name"
                            />
                        </div>

                        <div className="form-subject">
                            <label htmlFor="exampleFormControlTextarea1"></label>
                            <input
                                type="text"
                                className="name-body"
                                id="exampleFormControlTextarea1"
                                placeholder="Subject "
                                name="subject"
                            />
                        </div>
                        <div className="form-msg">
                            <label htmlFor="exampleFormControlTextarea1"></label>
                            <textarea
                                className="name-body"
                                id="exampleFormControlTextarea1"
                                placeholder="Your Message Here"
                                rows="3"
                                name="message"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="form-button"
                            value="send"
                        >
                            Send message
                        </button>
                    </form>
                </div>


                <div className='contact'>

                    <div className="hr1"></div>
                    <div className='contact-info'>
                        <div className='contact-heading'>Or contact us at </div>
                        <div className='email'>
                            <div className='icon-1'>
                                <img
                                    src='mail.png'
                                    alt=''
                                    className='contact-icon'
                                />

                            </div>
                            <div className='mail-text text'>
                                toastedmedia.creatives@gmail.com<br />
                                ayushparab.work@gmail.com<br />
                                kulkarniyash.work@gmail.com
                            </div>
                        </div>
                        <div className='phone'>
                            <div className='icon-2'>
                                <img
                                    src='phone.png'
                                    alt=''
                                    className='contact-icon'
                                />
                            </div>
                            <div className='phone-text text'>
                                +91-8080469320<br />
                                +91-8390896630
                            </div>

                        </div>
                        <div className='address'>
                            <div className='icon-3'>
                                <img
                                    src='navigation.png'
                                    alt=''
                                    className='contact-icon'
                                />
                            </div>
                            <div className='address-text text'>
                                B-005, Ekveera Vihar, Dongarpada Chikhal Dongri Rd. Near John XXIII CBSE School Virar West - 401303
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
