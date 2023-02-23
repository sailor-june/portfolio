import React from 'react'
import { RadarChart } from './Radar'
function About() {
  return (
      <div className='content'>
         
        <div className='content second'>
        <h1 className='first'>Hello!</h1>
        <p className='first'> my Name is June :] I am a full-stack web developer, game designer,and graphic artist. I love making interactive and stylish applications. 
            </p>
            <p className='second'>
                -javascript -css -html -node.js -express -mongoose/mongodb -ejs -react -aseprite -django -python -excel -gimp
            </p>
            <div className='third'>
                
            <a href="https://github.com/sailor-june"> <img src="/github-mark.png" className="icon" /> find me on github </a><br/>
            <a href="https://www.linkedin.com/in/juniper-c-james"> <img src="/linkedin.png" className="icon"></img> connect on linkedin</a>
            </div>
            </div>
        </div>
  )
}

export default About