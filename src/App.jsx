// App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Preloader from "./componets/preloader/Preloader"; // Importiere die Preloader-Komponente
import "./App.css";
import Routes from "./componets/Routes/Routes";
import NavBar from "./componets/Nav/NavBar";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuliere das Laden der Seite und entferne den Preloader nach 3 Sekunden
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Preloader zeigt sich für 3 Sekunden
  }, []);

  return (
    <Router>
      <div className="App">
        <Preloader />
        {loading ? null : (
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
