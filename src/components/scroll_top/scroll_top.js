import React from 'react'
import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleUp} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import '../../stylee.css'
export default function Scroll_Top() {
    library.add(faAngleUp);
    const [displayButton, setDisplayButton] = useState(false);

    useEffect(() => {
      const scrollToTopButton = document.getElementById('scroll-to-top');
      scrollToTopButton.style.display = 'none';
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setDisplayButton(true);
      } else {
        setDisplayButton(false);
      }
    };
  
    const handleButtonClick = () => {
      window.scrollTo(0, 0);
    };
  return (
    <div><button id="scroll-to-top" class="top_arrow_wrap"  style={{ display: displayButton ? 'block' : 'none' }}
    onClick={handleButtonClick}> <FontAwesomeIcon icon={faAngleUp} /></button>
    
    </div>
   
  )
}
