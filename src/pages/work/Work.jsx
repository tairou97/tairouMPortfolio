import "./Work.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Work = () => {
  const [moreWorks, setMoreWorks] = useState({ moreWorks: [] });

  useEffect(() => {
    const getMoreWorks = async () => {
      try {
        const response = await fetch("/works.json");
        const data = await response.json();
        setMoreWorks(data);
      } catch (error) {
        console.error("Fehler beim Laden der JSON:", error);
      }
    };

    getMoreWorks();
  }, []);

  return (
    <div className="workContainer">
      <div className="head">
        <h2>
          &quot;Innovative digitale Produkte für die nächste Generation schaffen
          – mit kreativen Ideen und modernen Technologien, die die digitale Welt
          von morgen prägen.&quot;
        </h2>
      </div>
      <h1>Work</h1>
      <span className="line"></span>
      <ul className="work">
        {moreWorks.moreWorks.map((p) => (
          <li key={p.id}>
            <Link to={p.link} target="_blank" rel="noopener noreferrer">
              {p.image && <img src={p.image} alt={p.title} />}
            </Link>
            <div className="workInfo">
              <h4>{p.title}</h4>

              <p>{p.description}</p>
              <p>
                <strong>Technologies: {p.technologies.join(", ")}</strong>
              </p>
              <p>
                <Link to={p.link} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </Link>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
