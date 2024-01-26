import { FaArrowRight } from "react-icons/fa6";
import vicky from "./vignesh.png"

function Home() {
  return (
    <div className="main">
      <div className="circle"></div>
      <div className="photo">
        <img src={vicky} alt=""></img>
      </div>
      <div className="content" style={{position:"relative"}}>
        <h1 style={{position:"relative"}}>I'm <span>vigneshwaran</span></h1>
        <p style={{textAlign:"center"}} className="mern">- MERN stack developer -</p>
        <p className="para">
          Passionate Full Stack Developer proficient in React.js, Express.js,
          and MongoDB. Extensive experience in creating scalable web
          applications with a focus on user experience. Strong problem-solving
          skills and a collaborative team player. Dedicated to continuous
          learning and staying abreast of emerging technologies. Excited to
          contribute technical prowess to dynamic projects.
        </p>
        <a href="vigneshwaran.pdf" download="Vigneshwaran">
          Download CV
        <span><FaArrowRight/></span>
        </a>
      </div>
    </div>
  );
}

export default Home;
