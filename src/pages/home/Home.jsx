import Tairou from "../../assets/ich3.jpeg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

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

  useEffect(() => {
    const elements = document.querySelectorAll(".text, p");

    elements.forEach((element) => {
      // Text in Zeichen splitten
      const chars = element.textContent.split("");
      element.innerHTML = chars
        .map((char) => `<span class="char">${char}</span>`)
        .join("");

      // Animation für die Zeichen
      gsap.from(element.querySelectorAll(".char"), {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.05,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div className="container">
      <div className="image">
        <img src={Tairou} alt="Tairou" />
        <div className="sliderContainer">
          <div ref={slider} className="slider">
            <p ref={firstText}>Tairou Mouhamed ° </p>
            <p ref={secondText}>° Tairou Mouhamed </p>
          </div>
        </div>
      </div>

      <div className="headline">
        <div className="App1">
          <h1 className="text">Hello World!</h1>
          <p>This is a simple animation using GSAP.</p>
        </div>
        <div className="App2">
          <h1 className="text">React</h1>
          <p>React is a JavaScript library for building user interfaces.</p>
        </div>
        <div className="App3">
          <h1 className="text">GSAP</h1>
          <p>GSAP is a JavaScript library for animations.</p>
        </div>
        <div className="App4">
          <h1 className="text">And more...</h1>
          <p>
            This is just a simple example, you can add more animations as
            needed.
          </p>
        </div>
        <div className="App5">
          <h1 className="text">Thank you!</h1>
          <p>This is a simple animation using GSAP.</p>
        </div>
        <div className="App6">
          <h1 className="text">By Tairou</h1>
          <p>This is a simple animation using GSAP.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
