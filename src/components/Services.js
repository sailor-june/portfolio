import React from "react";
import Accordion from "./Accordion";

function Services() {
  return (
    <div className="content">
    <h1 className="first">Services</h1>
    <div className="content second">
      <>
      <Accordion proj_title="Intro to coding lessons" description="lorem ipsum"   />
      <Accordion proj_title="Web Development" description="Boy howdy"/>
      <Accordion proj_title="Pixel Art Commissions" description="wowowoowo" />
      </>
      
      </div>
      </div>
  );
}

export default Services;
