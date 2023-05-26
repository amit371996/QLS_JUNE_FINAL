import React, { useState, useEffect } from 'react';
import ReactFullpage from "@fullpage/react-fullpage";

import "../stylee.css"
import "../responsive.css"
import Layout from "../components/layout/layout"

import { Link, StaticQuery, graphql } from 'gatsby';
const Tab = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleAfterLoad = (origin, destination, direction) => {
    if (destination.index > 0) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const handleScrollToTop = (fullpageApi) => {
    // Call the fullpage API's moveTo method to jump to the first section
    fullpageApi.moveTo(1);
  };
const mystyle={
  display: 'none',
  position: 'fixed',
  bottom: '20px',
  right: '20px',

  padding: '10px',
  backgroundColor: '#333',
  color: '#fff',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer'
}
  return (
    <ReactFullpage
      afterLoad={handleAfterLoad}
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <h1>Section 1</h1>
          </div>
          <div className="section">
            <h1>Section 2</h1>
          </div>
          <div className="section">
            <h1>Section 3</h1>
          </div>

          {showScrollToTop && (
            <button id="scroll-to-top" style={mystyle} onClick={() => handleScrollToTop(fullpageApi)}>
              Scroll to Top
            </button>
          )}
        </ReactFullpage.Wrapper>
      )}
    />
  );
};
  
export default Tab;
