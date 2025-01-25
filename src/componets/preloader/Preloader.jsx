import { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [languageIndex, setLanguageIndex] = useState(0);

  // Array mit "Hallo" in verschiedenen Sprachen
  const greetings = [
    "° Hallo",
    "° Hello",
    "° Bonjour",
    "° Hola",
    "° Ciao",
    "° Привет",
    "° こんにちは",
    "° 안녕하세요",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLanguageIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 100); // Der Text wechselt alle 1000ms (1 Sekunde)

    const timer = setTimeout(() => {
      clearInterval(interval);
      setLoading(false); // Preloader nach 7 Sekunden beenden
    }, 5000); // Dauer des Preloaders: 7 Sekunden

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    loading && (
      <div className="preloader">
        <div className="loader"></div>
        <div className="loading-text">{greetings[languageIndex]}</div>
      </div>
    )
  );
};

export default Preloader;
