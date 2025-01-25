// App.jsx
import { useState, useEffect } from "react";
import Preloader from "./componets/preloader/Preloader"; // Importiere die Preloader-Komponente
import "./App.css";
import Home from "./componets/home/Home";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuliere das Laden der Seite und entferne den Preloader nach 3 Sekunden
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Preloader zeigt sich für 3 Sekunden
  }, []);

  return (
    <div className="App">
      <Preloader />
      {loading ? null : <Home />}
      {/* Zeige die Home-Komponente nur, wenn das Laden beendet ist */}
    </div>
  );
};

export default App;
