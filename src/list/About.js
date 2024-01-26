import "./about.css";

function About() {
  return (
    <div className="main-1">
      <div className="circle"></div>
      <div className="about" style={{ position: "relative" }}>
        <h1>
          About <span>me</span>
        </h1>
        <h3>
          " Small aim ia a <span>Crime</span> ; Have great <spam>Aim</spam> "
        </h3>
      </div>
      <div className="personal" style={{ position: "relative" }}>
        <p>
          I graduated in 2023 with a BSc in Aeronautical Science from GKM
          College in Chennai. I pursued MERN stack web development at Error
          Makes Clever Academy in Keeranur as a secondary option. My long-term
          ambition being in aircraft maintenance engineering and my short-term
          goal becoming a web developer.
        </p>
      </div>
      <div className="knowledge" style={{ position: "relative" }}>
        <div>Front-End</div>
        <div>Back-End</div>
        <div>Data Base</div>
      </div>
    </div>
  );
}

export default About;
