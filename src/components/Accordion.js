import { useState, useRef, useEffect } from "react";


function Accordion(props) {
    const accordionData = {
      title: props.proj_title,
      content: props.description,
      img: `${process.env.PUBLIC_URL}/${props.proj_title}.jpeg`.replace(' ','_'),
      link: props.link
    };
    const [isActive, setIsActive] = useState(false);
    const { title, content, img, link } = accordionData;
    
    const contentRef = useRef(null);
  
    useEffect(() => {
      if (isActive && contentRef.current) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      } else if (contentRef.current) {
        contentRef.current.style.maxHeight = "0";
      }
    }, [isActive]);
  
    return (
      <>
        <div className="accordion">
          <div className="accordion-item">
            <div
              className="accordion-title"
              onClick={() => setIsActive(!isActive)}
            >
              <h3 className="first">{title}
              </h3>
            
            </div>
  
            <div
              className="accordion-content"
              ref={contentRef}
              style={{ overflow: "hidden", transition: "max-height 1.5s ease" }}
              >
              <h3>{content}</h3>
                
              <a href={link}>
              <img src={img} onError={(e) => e.target.style.display='none'} /></a>

              
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Accordion;
  