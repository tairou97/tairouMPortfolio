import "./Work.scss";
import about from "../../assets/about.jpeg";
import ich from "../../assets/ich.jpeg";
import ich2 from "../../assets/ich2.jpeg";
import ich3 from "../../assets/ich3.jpeg";

const Work = () => {
  return (
    <div className="workContainer">
      <h1>Work</h1>
      <span className="line"></span>
      <div className="workBox">
        <div className="workItem1 itme">
          <img src={about} alt="" />
        </div>
        <div className="workItem2 itme">
          <img src={ich} alt="" />
        </div>
        <div className="workItem3 itme">
          <img src={ich2} alt="" />
        </div>
        <div className="workItem4 itme">
          <img src={ich3} alt="" />
        </div>
        <div className="workItem5 itme">
          <img src={about} alt="" />
        </div>
        <div className="workItem6 itme">
          <img src={ich} alt="" />
        </div>
        <div className="workItem7 itme">
          <img src={ich2} alt="" />
        </div>
        <div className="workItem8 itme">
          <img src={about} alt="" />
        </div>
        <div className="workItem9 itme">
          <img src={ich} alt="" />
        </div>
        <div className="workItem10 itme">
          <img src={ich2} alt="" />
        </div>
        <div className="workItem11 itme">
          <img src={about} alt="" />
        </div>
        <div className="workItem12 itme">
          <img src={ich} alt="" />
        </div>
        <div className="workItem13 itme">
          <img src={about} alt="" />
        </div>
        <div className="workItem14 itme">
          <img src={ich} alt="" />
        </div>
        <div className="workItem15 itme">
          <img src={ich2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Work;
