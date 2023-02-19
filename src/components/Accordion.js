import { useState, useRef, useEffect } from "react";


function Accordion(props) {
    const accordionData = {
      title: props.proj_title,
      content: props.description,
      img: `/${props.proj_title}.jpeg`.replace(' ','_')
    };
    const [isActive, setIsActive] = useState(false);
    const { title, content, img } = accordionData;
  
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
              style={{ overflow: "hidden", transition: "max-height 1.5s ease-in-out" }}
            >
              {content}
              <img src={img}></img>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Accordion;
  