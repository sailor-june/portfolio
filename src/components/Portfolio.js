import React from "react";
import Accordion from "./Accordion";
function Portfolio() {
  
  return (
    
    <div className="content">
      <h1 className="first">Portfolio</h1>
      <div className="content second">
        <Accordion proj_title="Project Luna" description= {<div> 
        Project luna is a simple and streamlined interface for requesting lunar data.<br></br>
        The goal of this project is to provide useful information about the moon in an elegant and easy to read format.<br></br>
        
         Data about the moon are acquired from external apis, and rendered into a concise and logical display.<br></br>
        
        Simply enter your location in the text bar at the bottom of the page, and press the button to retrieve your data.<br></br>
        </div>
        }  className="is-left"  link="https://sailor-june.github.io/project-luna/" />
        <Accordion proj_title="Fortune Diary" description="Boy howdy" className="second" />
        
        <Accordion proj_title="Bunny Rancher" description="wowowoowo" className="third"/>
        
        <Accordion proj_title="Mercantile" description="eeeeee" className='fourth' />
        <Accordion proj_title="Art and Design Gallery" description='' />
        </div>
        </div>
    
  );
}

export default Portfolio;
