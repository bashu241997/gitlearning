import React, { useState, useEffect } from "react";
import "./service.css";
import mob from "../Icons/seroffer.svg";
import ser from "../Icons/services.svg";
import blog from "../Icons/blog.svg";
import left from "../Icons/left.svg";
import right from "../Icons/right.svg";
import port from "../Icons/portfolio.svg"
export const Service = () => {
  const _data = [
    {
      id: "1",
      category: "service offered",
      tittle: "web application development",
      icon: ser,
      description:
        "Develop web application useing latest front end technologies angular and react js",
      link: "",
    },
    {
      id: "2",
      category: "service offered",
      tittle: "mobile application development",
      icon: mob,
      description:
        "Develop mobile application useing latest front end technologies ionic cordova ,flutter  and react native",
      link: "",
    },
    {
      id: "3",
      category: "Personal project",
      tittle: "responsive chat application",
      icon: port,
      description:
        "chat application Developed using react with socket io and node as back end for both web and obile responsive ",
      link: "https://pingmeanytime.herokuapp.com/",
    },
    {
      id: "4",
      category: "Medium blog post",
      tittle: "blog post on implementation and deployments  with react js ",
      icon: blog,
      description:
        " application Development and deployment  using react and implementing redux and saga for web as responsive app ",
      link: "https://medium.com/@baswanth/",
    },
  ];

  const [thumbnails, setThumnails] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideStyle, setCurrentSlideStyle] = useState({});
  const [nextSlideStyle, setNextSlideStyle] = useState({});
  const [previousSlideStyle, setPreviousSlideStyle] = useState({});
  console.log(previousSlideStyle)
  useEffect(() => {
    setThumnails(_data);
    setCurrentSlideStyle(_data[currentSlide]);

    if (currentSlide > 0) {
      setPreviousSlideStyle(_data[currentSlide - 1]);
    } else {
      setPreviousSlideStyle(_data[_data.length - 1]);
    }

    if (currentSlide === _data.length - 1) {
      setNextSlideStyle(_data[0]);
    } else {
      setNextSlideStyle(_data[currentSlide + 1]);
    }

    const loop = setInterval(() => {
      if (currentSlide === _data.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 5000);
    return () => clearInterval(loop);
  }, [currentSlide]);

  function previous() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(thumbnails.length - 1);
    }
  }

  function next() {
    if (currentSlide === thumbnails.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <div>
      <div className="row servicehead">Services offered and personal work</div>
      <div className="row">
        <div className="col-sm-12 col-lg-12">
          <section className="slideshow">
            <div className="slide-holder">
              <span className="icons-here" onClick={previous}>
                <img src={left} alt="icon" className="iconser" />
              </span>
              <section className="slide current-slide">
                <div className="slide-thumbnail">
                  <div className="current-one">
                    <img src={nextSlideStyle.icon} alt="icon" />
                    <h5>{currentSlideStyle.category}</h5>
                    <h6>{currentSlideStyle.tittle}</h6>
                    <p>{currentSlideStyle.description}</p>
                    {currentSlideStyle.link &&
                    currentSlideStyle.link.length > 0 ? (
                      <a className="serlink" href={currentSlideStyle.link} target="blank">click to view</a>
                    ) : null}
                  </div>
                </div>
              </section>

              <span className="icons-here" onClick={next}>
                <img src={right} alt="icon" className="iconser" />{" "}
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
