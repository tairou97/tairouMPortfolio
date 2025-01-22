import { useEffect } from "react";
import { gsap } from "gsap";
import "./App.css";

function App() {
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
    <div className="App">
      <h1 className="text">Hello World!</h1>
      <p>This is a simple animation using GSAP.</p>
    </div>
  );
}

export default App;
