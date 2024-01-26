import "./nav.css";
import { FaHome } from "react-icons/fa";
import { BsPersonCheckFill } from "react-icons/bs";
import { RiCheckboxMultipleFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

function Nav() {

  const [changeValue, setchangeValue] = useState("")

  function changed(e){
    if(e === "value"){
      setchangeValue("0px")
    }
    if(e === "valueone"){
      setchangeValue("-60%")
    }
  }

  return (
    <div>
      <div className="boxx" style={{marginLeft: changeValue}}>
        <div className="cancel" onClick={()=> changed("valueone")}>
          <FaXmark/>
        </div>
        <div className="list">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar">
        <section>
          <div onClick={()=>changed("value")}>
            <p>
              <IoMenu />
            </p>
          </div>
        </section>
        <div>
          <a href="/">
            <FaHome />
          </a>
        </div>
        <div>
          <a href="/about">
            <BsPersonCheckFill />
          </a>
        </div>
        <div>
          <a href="/projects">
            <RiCheckboxMultipleFill />
          </a>
        </div>
        <div>
          <a href="/contact">
            <IoMdMail />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
