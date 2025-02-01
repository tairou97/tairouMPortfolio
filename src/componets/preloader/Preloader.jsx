"use client";
import { useEffect, useState } from "react";
import { slideUp, opacity } from "./anim";
import { motion } from "framer-motion";
import "./Preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [languageIndex, setLanguageIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

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
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

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

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    loading && (
      <motion.div
        variants={slideUp}
        initial="initial"
        exit="exit"
        className="preloader"
      >
        {dimension.height > 0 && (
          <>
            <motion.p
              variants={opacity}
              initial="initial"
              animate="enter"
              className="loading-text"
            >
              {greetings[languageIndex]}
            </motion.p>
            <svg>
              <motion.path
                variants={curve}
                initial="initial"
                exit="exit"
                d={initialPath}
              ></motion.path>
            </svg>
          </>
        )}
      </motion.div>
    )
  );
};

export default Preloader;
