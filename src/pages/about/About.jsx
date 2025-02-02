import Img from "../../assets/ich.jpeg";
import ImgCl from "../../assets/logo-transparent-png.png";
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

          <p className="aboutText">
            Ich bin Tairou, 26, Full-Stack-Entwickler aus Berlin. Mit meiner
            Leidenschaft für innovative Technologien und sauberem Code entwickle
            ich Lösungen, die Nutzer begeistern. Ich bringe Projekte mit vollem
            Einsatz voran – lass uns gemeinsam etwas bewegen!
          </p>
        </div>
        <div className="aboutBox2">
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
        <div className="aboutBox3">3</div>
        <div className="aboutBox4">4</div>
        <div className="aboutBox5">5</div>
        <div className="aboutBox6">6</div>
      </div>
    </div>
  );
};

export default About;
