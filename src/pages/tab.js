import React, { useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const Tab = () => {
  const handleAfterLoad = (origin, destination, direction) => {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (destination.index > 0) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  };

  const handleScrollToTop = (fullpageApi) => {
    fullpageApi.moveTo(1);
  };

  return (
    <ReactFullpage
      sectionsColor={['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke']}
      afterLoad={handleAfterLoad}
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <div className="section">Section 1</div>
          <div className="section">Section 2</div>
          <div className="section">Section 3</div>
          <div className="section">Section 4
        
          </div>
          <button id="scroll-to-top" className='top_arrow_wrap' onClick={() => handleScrollToTop(fullpageApi)}>
            Scroll to Top
          </button>
         
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default Tab
