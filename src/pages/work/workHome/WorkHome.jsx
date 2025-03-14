import { useState, useEffect } from "react";
import "./WorkHome.scss";
import { Link } from "react-router-dom";

const WorkHome = () => {
  const [works, setWorks] = useState({ work: [], moreWorks: [] });
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWorks = async () => {
      try {
        const response = await fetch("/works.json");
        const data = await response.json();
        setWorks(data);
      } catch (error) {
        console.erro("Fehler beim Laden der JSON:", error);
        setError("Daten konnten nicht geladen werden.");
      }
    };

    getWorks();
  }, []);

  return (
    <div className="homeWork">
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          <h3>Works</h3>
          <ul>
            {works.work.map((p) => (
              <li key={p.id}>
                <Link to={p.link} target="_blank" rel="noopener noreferrer">
                  {p.image && <img src={p.image} alt={p.title} />}
                </Link>
                <h4>{p.title}</h4>
                <p>{p.description}</p>
                <p>
                  <strong>Technologies:</strong> {p.technologies.join(", ")}
                </p>
                <Link to={p.link} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </Link>
              </li>
            ))}
          </ul>

          <div className="moreWorks" to="/works">
            <Link to="/work"> Mehr ...</Link>
          </div>

          {/* <h3>More Works</h3>
          <ul>
            {works.moreWorks.map((p) => (
              <li key={p.id}>
                {p.title}: {p.description}
              </li>
            ))}
          </ul> */}
        </>
      )}
    </div>
  );
};

export default WorkHome;
