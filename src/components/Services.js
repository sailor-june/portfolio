import React from "react";
import Accordion from "./Accordion";

function Services() {
  return (
    <div className="content" id="services">
    
      <h1 className="first">Services</h1>
    <div className="content">
      <>
      <Accordion proj_title="Intro to coding lessons" description=
      {<>Have you ever wanted to learn how to code but didn't know where to start? Look no further than my "intro to coding" service!<br></br>
       As someone who's been through the process of learning to code, I can relate to the challenges that beginners face.<br></br>
        I will work with you at your own pace to teach you the basics of programming languages like HTML, CSS, Python, and JavaScript.<br></br>


      Together, we'll go through step-by-step tutorials, and I'll provide you with the resources you need to build your own websites, apps, and games. Whether you're looking to improve your job prospects, start your own business, or simply gain a new hobby, my "intro to coding" service can help you achieve your goals.<br></br>
      
      With flexible scheduling and affordable pricing, there's never been a better time to start learning to code. Contact me today to take the first step towards a new and exciting skillset!</> }   />  
      
      <Accordion proj_title="Web Development" description={<>

Looking for a freelance web developer to build your next website or web application? Look no further!<br></br>

I have extensive experience in JavaScript, React, CSS, HTML, Jquery, Express.js, Python,<br></br>

 Django, Mongoose, MongoDB, Heroku, Google Firebase, postgreSQL, and Netlify.<br></br>

Whether you need a simple landing page, an e-commerce site, or a complex web application, I can help bring your vision to life.<br></br> With a focus on clean, modern design and user experience, I will work with you to create a custom solution that meets your needs.<br></br>

In addition to my technical skills, I am committed to providing excellent communication and customer service.<br></br>
 I believe that strong relationships are the key to successful projects, and I always strive to exceed my clients' expectations.<br></br>

Ready to take your online presence to the next level? Contact me today to discuss your project and see how I can help!</>}/>
      
      <Accordion proj_title="Pixel Art Commissions" description={<>Looking for unique and eye-catching artwork for your game, website, or social media? Look no further! <br></br> I specialize in creating custom pixel art that will make your project stand out.<br></br>

With my expertise in pixel art and design, I can create a wide range of assets including characters, backgrounds, objects, and icons.
<br></br><br></br>
 I take great care to ensure that every piece I create is high-quality and tailored to your specific needs!<br></br>

Whether you're looking for a retro-inspired aesthetic or a modern twist on classic pixel art, I can work with you to bring your vision to life.<br></br> I take pride in my attention to detail and strive to deliver artwork that exceeds your expectations.<br></br>

My commission process is easy and straightforward. Simply provide me with a brief description of what you're looking for, and I'll provide you with a quote.<br></br> Once we've agreed on the project details, I'll get to work creating your custom pixel art.<br></br>

Don't settle for generic artwork - let me create something truly unique for your project.<br></br> Contact me today to discuss your commission and see how I can help bring your ideas to life!<br></br> </>} />
      </>
      
      </div>
      </div>
  );
}

export default Services;
