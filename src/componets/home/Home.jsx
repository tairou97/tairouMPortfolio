import Tairou from "../../assets/ich3.jpeg";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
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
      </div>
      <div className="boxmain">
        <Carousel className="box">
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
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
