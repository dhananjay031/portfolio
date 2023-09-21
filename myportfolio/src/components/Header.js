import React from "react";
import { AiOutlineCode } from "react-icons/ai";

function Header(){
    return <div className="header">
        <div className="logo">
         <span><AiOutlineCode className="codeLogo"/></span>
        </div>
        <div className="buttons">
          <span>About</span>
          <span>Experience</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>
        
    </div>
}

export default Header;