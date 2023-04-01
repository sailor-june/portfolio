import React from "react";
import Accordion from "./Accordion";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Portfolio() {
  
  return (
    
    <div className="content" id="portfolio">
      <h1>Portfolio</h1>
      <h2>Click the links below for more information</h2>
      <div className="content second">





        <Accordion proj_title="Project Luna" description= {<div> 
        Project luna is a simple and streamlined interface for requesting lunar data.
        <br></br>
        <br></br>
        The goal of this project is to provide useful information about the moon in an elegant and easy to read format.
        <br></br>
        <br></br>
        
         Data about the moon are acquired from external apis, and rendered into a concise and logical display.
        <br></br>
        <br></br>
        Simply enter your location in the text bar at the bottom of the page, and press the button to retrieve data about times for sunset, sunrise,the current moon phase, and more.
        <br></br>
        <br></br>
        GitHub repo:  
        <a href="https://github.com/sailor-june/project-luna"> https://github.com/sailor-june/project-luna</a>
        <br></br>
        <br></br>
        Click the image below to visit the deployed project:
        </div>
        }  link="https://sailor-june.github.io/project-luna/" />




        <Accordion proj_title="Fortune Diary" description={<>
        Fortune Diary is a full MERN stack application that lets you draw tarot cards, and save your reading as a diary entry via mongoDB.
        <br></br>
        <br></br> 
        authentication provided by Google Firebase
        <br></br>
        <br></br>
        GitHub Repo:
        <a href="https://github.com/sailor-june/ReacTarot">https://github.com/sailor-june/ReacTarot</a>
        <br></br>
        <br></br>
        Click the image below to visit the deployed project:
        </>} link="https://fortune-diary.netlify.app"  />
        
        <Accordion proj_title="Bunny Rancher" description={<>
        Bunny rancher is a game about raising the strongest Bunnies in the land.
        <br></br>
        <br></br>
         Bunny Rancher is a full stack web application built with Django and mongoDB, with authentication powered by Google Firebase.
         <br></br>
         <br></br>
         Acquire, train, and merge Bunnies to become the top trainer!<br></br>
         <br></br>
         <br></br>
         GitHub Repo:
         <a href="https://github.com/sailor-june/bunny_rancher">https://github.com/sailor-june/bunny_rancher</a>
         <br></br>
         <br></br>
         Click the image below to visit the deployed project:
         </>} link="https://bunnyrancher.herokuapp.com/"/>
        
        <Accordion proj_title="Mercantile" description={<> 
        Mercantile is a proof-of-concept Community bartering platform.
        <br></br>
        <br></br>
        Mercantile is a full stack web application built with React, Mongoose, and Express.js
          <br></br>
         <br></br>
         I was designated Front End lead for this project :]
         <br></br>
         <br></br>
         GitHub Repo:
         <a href= "https://github.com/sailor-june/mercantile-frontend">Front end: https://github.com/sailor-june/mercantile-frontend</a>
          <br></br>
          <br></br>
          Click the image below to visit the deployed project:
          </>} link="https://m3rcantile.netlify.app/" />
        {/* <Accordion proj_title="Art and Design Gallery" description='' /> */}
        </div>
        </div>
    
  );
}

export default Portfolio;
