import React, { useState, useEffect } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import { Service } from "./servise";
import { Skills } from "./skills";

import pin from "../Icons/navigation.svg";
import mail from "../Icons/email.svg";
import tel from "../Icons/tele.svg";
import git from "../Icons/github.svg";
import watsap from "../Icons/whatsapp.svg";
import insta from "../Icons/instagram.svg";
import link from "../Icons/linkedin.svg";
import asd from "../Icons/bg.png";
import search from "../Icons/Search.svg";
import send from "../Icons/Send.svg";

export const Home = () => {
  const [exp, setExp] = useState("");
  useEffect(() => {
    let a = new Date();
    let b = new Date("2018/11/29");
    let c = (a.getTime() - b.getTime()) / 1000;
    c /= 3600 * 24;
    let d = Math.abs(c / 365.25).toFixed(1);
    setExp(d);
  }, []);
  return (
    <div>
      <nav id="home" className=" row ">
        <div className="col-sm-12 col-lg-6 col-md-6 navbar_ain">baswanth</div>
        {/* <div className="col-sm-12 col-lg-6 col-md-6 nav_tabs">
          <a href="#home" className="navtab">
            Home
          </a>
          <a href="#about" className="navtab">
            About
          </a>
          <a href="#skills" className="navtab">
            skills
          </a>
          <a href="#work" className="navtab">
            Services & work
          </a>
          <a href="#contact" className="navtab">
            Contact
          </a>
        </div> */}
      </nav>
      <div className="container">
        <div className="row hoe">
          <div className="home">
            <div className="home-container">
              <h5>this is me </h5>
              <h2>baswanth papisetty</h2>
            </div>
            <h6>
              front-end web and hybrid application developer with {exp} years of
              experince from india
            </h6>
            <div className="buttons-div">
              <a href="#servises" className="buttons">
                explore work &nbsp;{" "}
                <span>
                  <img alt="icon" src={search} className="social-icons1" />
                </span>
              </a>
              <a href="#contact" className="buttons">
                contact &nbsp;
                <img alt="icon" src={send} className="social-icons1" />
              </a>
            </div>
            <div style={{ padding: "30px" }}>
              <div className="social-media">
                <div className="contact-cell social">
                 <a href="https://wa.me/917871387268"> <img alt="icon" src={watsap} className="social-icons" /></a>
                </div>
                <div className="contact-cell social">
                <a href="https://github.com/bashu241997"> <img alt="icon" src={git} className="social-icons" /></a>
                </div>
                <div className="contact-cell social">
                <a href="https://www.linkedin.com/in/baswanth-papisetty-91340b9a/?originalSubdomain=in"> <img alt="icon" src={link} className="social-icons" /></a>
                </div>
                <div className="contact-cell social">
                <a href="https://www.instagram.com/baswanth_p/">        <img alt="icon" src={insta} className="social-icons" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* about me */}
        <hr />
        <div>
          <div className="row about centere">
            <div className="col-lg-6 col-md-6 col-sm-12 about-content">
              <h3>about Me</h3>

              <h6>hi </h6>
              <h6>I am baswanth </h6>
              <p>
                Ui/Ux Designer Loves To Design Creatively I'm Software Developer
                With {exp} Years Of Experince Specalizing In Web & Hybrid
                Application Development using digital technologies ie Angular,
                React ,react-native and ionic cordova ,having full Scale project
                development experince throughout the development cycle of an
                application having knowledge in project management platforms
                like jira gitlab and microsoft azure tfs.
              </p>
              <div className="buttons-div">
                <a href="#services" className="buttons">
                  explore my work &nbsp;{" "}
                  <span>
                    <img alt="icon" src={search} className="social-icons1" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 centere">
              <div className="aboutcard">
                <Card
                  style={{
                    width: "280px",
                    backgroundColor: "transparent",
                    border: "0px",
                    padding: "40px",
                  }}
                >
                  <Card.Img variant="top" src={asd} />
                  <Card.Body>
                    <Card.Title>Baswanth</Card.Title>
                    <Card.Text>Web and Mobile Application Developer</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div id="skills" className="skills">
          <Skills />
        </div>
        <hr />
        <div id="servises" className="services">
          <Service />
        </div>
        <hr />
        <div id="contact">
          <div className="row contact">
            <div className="col-lg-12">
              <h3 className="contact-head"> contact me ..!</h3>
            </div>
            <div
              className="col-lg-6 col-md-6  col-sm-12"
              style={{ padding: "30px 0px " }}
            >
              <div className="contact-div">
                <div className="contact-cell">
                  <img alt="icon" src={mail} className="contact-i" />
                </div>
                <div className="contact-text">
                  <OverlayTrigger
                    key="right"
                    placement="right"
                    overlay={<Tooltip id={`tooltip-top`}>Mail me</Tooltip>}
                  >
                    <a href="mailto:p.baslass@outlook.com">p.baswanth.com</a>
                  </OverlayTrigger>
                </div>
              </div>
              <div className="contact-div">
                <div className="contact-cell">
                  <img alt="icon" src={tel} className="contact-i" />
                </div>{" "}
                <div className="contact-text">
                  <OverlayTrigger
                    key="right"
                    placement="right"
                    overlay={
                      <Tooltip id={`tooltip-top`}>click to call Me</Tooltip>
                    }
                  >
                    <a href="tel:+917338702179">Call me..</a>
                  </OverlayTrigger>
                </div>
              </div>
              <div className="contact-div">
                <div className="contact-cell">
                  <img alt="icon" src={pin} className="contact-i" />
                </div>
                <div className="contact-text">
                  11/391 ,santhepeta
                  <br />
                  Andra pradesh
                  <br />
                  India{" "}
                </div>
              </div>
              <div style={{ paddingTop: "30px" }}>
                <h6 style={{ paddingLeft: "15px" }}>
                  Follow me on Social media
                </h6>
                <div className="social-media">
                  <div className="contact-cell social">
                   <a href="https://wa.me/917871387268"> <img alt="icon" src={watsap} className="social-icons" /></a>
                  </div>
                  <div className="contact-cell social">
                  <a href="https://github.com/bashu241997"><img alt="icon" src={git} className="social-icons" /></a>
                  </div>
                  <div className="contact-cell social">
                  <a href="https://www.linkedin.com/in/baswanth-papisetty-91340b9a/?originalSubdomain=in"> <img alt="icon" src={link} className="social-icons" /></a>
                  </div>
                  <div className="contact-cell social">
                  <a href="https://www.instagram.com/baswanth_p/"> <img alt="icon" src={insta} className="social-icons" /></a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6  col-sm-12"
              style={{ padding: "30px 0px" }}
            >
              <form>
                <h5>Message Me</h5>
                <div className="form-div">
                  <label>name</label>
                  <input placeholder="Your Name "  />
                </div>
                <div className="form-div">
                  <label>Email</label>
                  <input placeholder="Email"  />
                </div>
                <div className="form-div">
                  <label>message</label>
                  <input placeholder="Message  .. " />
                </div>
                <div className=" send buttons" onClick={()=>alert("we are working on sending your response Thank you")}>
                  send &nbsp;{" "}
                  <span>
                    <img alt="icon" src={send} className="social-icons1" />
                  </span>
                </div>
              </form>
            </div>

            <div className="col-lg-12 col-sm-12 copy">
              All rights © baswanth {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
