// App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Preloader from "./componets/preloader/Preloader"; // Korrigierter Import-Pfad
import "./App.css";
import Routes from "./componets/Routes/Routes"; // Korrigierter Import-Pfad
import NavBar from "./componets/Nav/NavBar"; // Korrigierter Import-Pfad
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuliere das Laden der Seite und entferne den Preloader nach 3 Sekunden
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup für den Timeout
  }, []);

  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        new LocomotiveScroll();
      } catch (error) {
        console.error("Fehler beim Laden von Locomotive Scroll:", error);
      }
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <Router>
      <div className="App">
        <AnimatePresence mode="wait">
          {loading && <Preloader />}
        </AnimatePresence>
        {!loading && (
          <>
            <NavBar />
            <Routes />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
