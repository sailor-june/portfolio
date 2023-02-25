import React from 'react'
import { RadarChart } from './Radar'
function About() {
  return (
      <div className='content'>
         
        <h1 className='first'>Juniper James, Software Developer</h1>
        <h1> </h1>
        <div className='content second'>
        <p className='first'> Hello, my Name is June! :] I am a full-stack web developer, game designer,and graphic artist. I love making interactive and stylish applications. 
            </p>
            <p className='second'>
                <h3>SKILLS SUMMARY:</h3>
                <h5>JavaScript, React, CSS, HTML, Jquery, Express.js, Python, Django, Mongoose, MongoDB, Heroku, Google Firebase, postgreSQL, Netlify</h5>
            </p>
            <div className='third'>
                
            <a href="https://github.com/sailor-june" className='first'> <img src="github-mark.png" className="icon" /> find me on github </a><br/>
            <a href="https://www.linkedin.com/in/juniper-c-james"> <img src="linkedin.png" className="icon"></img> connect on linkedin</a>
            </div>
            </div>
        </div>
  )
}

export default About