import Tairou from "../../assets/ich3.jpeg";
import HomeAbout from "./homeAbout/homeAbout";
import WorkHome from "../work/workHome/WorkHome";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// import { Carousel } from "react-responsive-carousel";
import "./Home.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animation);
    xPercent += 0.1 * direction;
  };

  // useEffect(() => {
  //   const elements = document.querySelectorAll(".text, p");

  //   elements.forEach((element) => {
  //     // Text in Zeichen splitten
  //     const chars = element.textContent.split("");
  //     element.innerHTML = chars
  //       .map((char) => `<span class="char">${char}</span>`)
  //       .join("");

  //     // Animation für die Zeichen
  //     gsap.from(element.querySelectorAll(".char"), {
  //       duration: 1,
  //       opacity: 0,
  //       y: 50,
  //       stagger: 0.05,
  //       ease: "power2.out",
  //     });
  //   });
  // }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="Jobs">
          <div className="jobsDe">
            <motion.h4
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="jobFr">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Freelance
                </motion.span>
              </span>
              Web Developer
            </motion.h4>
          </div>
        </div>
        <div className="image">
          <img src={Tairou} alt="Tairou" />
          <div className="sliderContainer">
            <div ref={slider} className="slider">
              <p ref={firstText}>Tairou Mouhamed ° </p>
              <p ref={secondText}>° Tairou Mouhamed </p>
            </div>
          </div>
        </div>
      </div>
      {/*==================== Home About ==================== */}
      <HomeAbout />
      <div className="aboute3">
        <Link to="/about">Mehr ... </Link>
      </div>
      {/*==================== Work Home ==================== */}
      <WorkHome />
    </div>
  );
}

export default Home;
