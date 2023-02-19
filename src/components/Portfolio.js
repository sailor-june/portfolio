import React from "react";
import Accordion from "./Accordion";
function Portfolio() {
  
  return (
    
    <div className="content">
      <h1 className="first">Portfolio</h1>
      <div className="content second">
        <Accordion proj_title="Project Luna" description="lorem ipsum"  className="is-left" />
        <Accordion proj_title="Fortune Diary" description="Boy howdy" className="second" />
        
        <Accordion proj_title="Bunny Rancher" description="wowowoowo" className="third"/>
        
        <Accordion proj_title="Mercantile" description="eeeeee" className='fourth' />
        <Accordion proj_title="Art and Design Gallery" description='' />
        </div>
        </div>
    
  );
}

export default Portfolio;
