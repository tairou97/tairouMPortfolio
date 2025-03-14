import Img from "../../../public/about.jpeg";
import ImgCl from "../../assets/logo-transparent-png.png";
import AbouteMe from "../home/homeAbout/homeAbout";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="containerAbout">
        <div className="aboutBox1">
          <div className="more">
            <h1>Bit More About Me</h1>
            <img src={Img} alt="" />
          </div>
          <AbouteMe />
        </div>
        <div className="aboutBox2">
          {" "}
          <h1>Ich kann dir helfen mit ...</h1>
          <div className="experience">
            <div className="experienceBox1">
              <span>01</span>
              <div className="stripe"></div>
              <h3>Development</h3>
              <p>
                Ich entwickle performante und skalierbare Webanwendungen mit
                modernen Technologien wie React, Node.js, SQL und Sequelize.
                Mein Fokus liegt auf sauberem Code, effizienter
                Datenverarbeitung und einer starken User Experience.
              </p>
            </div>
            <div className="experienceBox2">
              {" "}
              <span>02</span> <div className="stripe"></div>
              <h3> Animation & UI</h3>
              <p>
                Ich erwecke Webseiten mit durchdachten Animationen und
                Mikrointeraktionen zum Leben. Durch den Einsatz von GSAP, Framer
                Motion und CSS sorge ich für nahtlose Übergänge und dynamische
                Effekte, die das Nutzererlebnis optimieren. Zudem optimiere ich
                das UI-Design direkt im Code für eine moderne, intuitive
                Darstellung.
              </p>
            </div>
            <div className="experienceBox3">
              {" "}
              <span>03</span> <div className="stripe"></div>
              <h3>✦ Das Gesamtpaket</h3>
              <p>
                Von der ersten Idee bis zur finalen Umsetzung – ich begleite den
                gesamten Entwicklungsprozess. Dank meiner technischen Expertise
                und meinem Gespür für moderne Webstandards entwickle ich
                leistungsstarke, dynamische und benutzerfreundliche Weblösungen.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutBox3">
          {" "}
          <div className="clients1">
            {" "}
            <h1>Clients & Works</h1>
          </div>
          <div className="clients2">
            <img src={ImgCl} alt="" />
          </div>
          <div className="clients3">
            {" "}
            <img src={ImgCl} alt="" />
          </div>
          <div className="clients4">
            {" "}
            <img src={ImgCl} alt="" />
          </div>
          <div className="clients5">
            {" "}
            <img src={ImgCl} alt="" />
          </div>
        </div>
        <div className="aboutBox4">4</div>
        <div className="aboutBox5">5</div>
        <div className="aboutBox6">6</div>
      </div>
    </div>
  );
};

export default About;
