import tesla from "../images/tesla.png";
import vi from "../images/VI-clone.png";
import emi from "../images/emi.png";
import form from "../images/form.png";
import task from "../images/task.png";
import file from "../images/file.png";
import { MdOutlineAdsClick } from "react-icons/md";

function Projects() {
  return (
    <div className="main-3">
      <div className="circle"></div>
      <div className="about">
        <h1 style={{position:"relative"}}>
          My <span>Projects</span>
        </h1>
      </div>
      <div className="projects">
        <div>
        <span>Tesla <MdOutlineAdsClick style={{fontSize:"16px"}}/></span>
          <img src={tesla} alt="" style={{scale:"1.2"}}></img>
        </div>
        <div>
        <span>VI <MdOutlineAdsClick style={{fontSize:"16px"}}/></span>
          <img src={vi} alt="" style={{scale:"1.1"}}></img>
        </div>
        <div>
        <span>EMI Calculator <MdOutlineAdsClick style={{fontSize:"16px"}}/></span>
          <img src={emi} alt="" style={{scale:"1.1"}}></img>
        </div>
        <div>
        <span>Form Register <MdOutlineAdsClick style={{fontSize:"16px"}}/></span>
          <img src={form} alt="" style={{scale:"1.2"}}></img>
        </div>
        <div>
        <span>File Uploader <MdOutlineAdsClick style={{fontSize:"16px"}}/></span>
          <img src={file} alt="" style={{scale:"1.2"}}></img>
        </div>
        <div>
        <span>Task Manager <MdOutlineAdsClick style={{fontSize:"16px"}}/></span>
          <img src={task} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Projects;
