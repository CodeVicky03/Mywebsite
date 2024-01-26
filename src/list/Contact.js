import "./about.css";
import touch from "../touch.png";
import { FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { FaLocationDot } from "react-icons/fa6";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vwb97yn', 'template_euhmfdp', form.current, 'dOS9_-C-wlhpKw658')
      .then((result) => {
          console.log(result.text);
          alert("Message send successfully")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="main-2">
      <div className="circle"></div>
      <div className="about">
        <h1 style={{position:"relative"}} className="h1">
          Get In <span>Touch</span>
        </h1>
      </div>
      <div className="picture">
        <div className="img">
          <img src={touch} alt=""></img>
          <div>
            <a href="https://github.com/CodeVicky03">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vignesh-waran-03v?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <BsLinkedin />
            </a>
            <a href="https://maps.app.goo.gl/555ESVjpu6SLq8s78" target="_blank" rel="noreferrer">
              <FaLocationDot/>
            </a>
          </div>
        </div>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="from_name"/>
          <input type="email" placeholder="mail ID" name="from_email"/>
          <textarea rows="6" cols="50" placeholder="Type Message" name="message"></textarea>
          <input type="submit" style={{backgroundColor:"white", color:"black", cursor:"pointer",fontWeight:"600"}}/>
          <br></br>
        </form>
      </div>
    </div>
  );
}

export default Contact;
