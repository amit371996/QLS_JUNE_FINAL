import React, { useState, useEffect } from 'react';
import ReactFullpage from "@fullpage/react-fullpage";

import "../stylee.css"
import "../responsive.css"
import Layout from "../components/layout/layout"

import { Link, StaticQuery, graphql } from 'gatsby';

const getImageForScrollPosition = (scrollPosition) => {
  if (scrollPosition < 1) {
    return 'http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/Mask-group-5.png';
  } else if (scrollPosition > 548 && scrollPosition < 600) {
    return 'http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/agri.png';
  } else if (scrollPosition > 1180 && scrollPosition < 1300) {
    return 'http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/infra-1.png';
  } else if (scrollPosition > 1748 && scrollPosition < 1800) {
    return 'http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/your-image-url-here.png';
  } else {
    return 'http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/default-image-url-here.png';
  }
};

const Tab = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(getImageForScrollPosition(scrollPosition));

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setScrollPosition(scroll);
      setBackgroundImage(getImageForScrollPosition(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const [scrollClass, setScrollClass] = useState('');

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollDiv = document.getElementById('scroll-div');
  //     if (scrollDiv.scrollTop > 400) { // Change the scroll position as per your requirement
  //       setScrollClass('background-image-2');
  //     }if(scrollDiv.scrollTo > 100) {
  //       setScrollClass('background-image-1');
  //     }
  //     if(scrollDiv.scrollTo > 900) {
  //       setScrollClass('background-image-1');
  //     }
  //   };

  //   const scrollDiv = document.getElementById('scroll-div');
  //   scrollDiv.addEventListener('scroll', handleScroll);
  //   return () => {
  //     scrollDiv.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const [scroll, setScroll] = useState(0);
  const [scrollClass, setScrollClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollDiv = document.querySelector('.list_manage');
      const scrollTop = scrollDiv.scrollTop;

      setScroll(scrollTop);

      if (scrollTop < 1) {
        setScrollClass('scroll_1');
      } else if (scrollTop > 548 && scrollTop < 600) {
        setScrollClass('scroll_2');
      } else if (scrollTop > 1180 && scrollTop < 1300) {
        setScrollClass('scroll_3');
      } else if (scrollTop > 1748 && scrollTop < 1800) {
        setScrollClass('scroll_4');
      } else if (scrollTop > 2120 && scrollTop < 2200) {
        setScrollClass('scroll_5');
      } else if (scrollTop > 2520 && scrollTop < 2560) {
        setScrollClass('scroll_6');
      } else if (scrollTop > 2575) {
        // Handle moving to another section/page
        // fullpage_api.moveSectionDown();
        // fullpage_api.moveTo(4);
      }

      const docHeight = scrollDiv.scrollHeight;
      const winHeight = scrollDiv.clientHeight;
      const lineHeight = (scrollTop / (docHeight - winHeight)) * 5;

      const progressLine = document.querySelector('.progress .line');
      progressLine.style.height = `${scrollTop}px`;
    };

    const scrollDiv = document.querySelector('.list_manage');
    scrollDiv.addEventListener('scroll', handleScroll);
    return () => {
      scrollDiv.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <StaticQuery
      query={graphql`
        query {
          allWpSolution(sort: { id: ASC }) {
            edges {
              node {
                slug
                content
                excerpt
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                title
                id
              }
            }
          }
          wpPage(id: { eq: "cG9zdDo3" }) {
            homeSlider {
              about
              sliderHeading
            }
            homePartnerSection {
              partnerDetail
              partner {
                partnerImage {
                  sourceUrl
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <ReactFullpage
            scrollingSpeed={1000} /* Options here */
            render={({ fullpageApi }) => (
              <Layout>
                <ReactFullpage.Wrapper>
                  <section className="section id_hide" id="stopr_de" >
                    <div className={`secation03 back_ghbd bhg sliderimg ${scrollClass}`}>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="our_about_wrap">
                              <h2 className="text-start">Solutions</h2>
                              <h4 className="text-start">State-of-the-art technology combined with relentless effort towards excellence</h4>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-1">
                            <div className="progress">
                              <ul>
                                <span className="line"></span>
                                <li><a href="#sec1">I</a></li>
                                <li><a href="#sec2">II</a></li>
                                <li><a href="#sec3">III</a></li>
                                <li><a href="#sec4">IV</a></li>
                                <li><a href="#sec5">V</a></li>
                                <li><a href="#sec5">VI</a></li>
                                <li><a href="#sec5">7</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-11">
                            <div className='list_manage'>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="new_idf">
                                    {data &&
                                      data.allWpSolution &&
                                      data.allWpSolution.edges &&
                                      data.allWpSolution.edges.map((edge, i) => {
                                        const solution = edge.node;
                                        return (
                                          <div className="start_y" id="sec1" key={solution.id}>
                                            <h2 className="text-start">{solution.title}</h2>
                                            <div className="slmntxt" dangerouslySetInnerHTML={{ __html: solution.content }}></div>
                                          </div>
                                        );
                                      })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </ReactFullpage.Wrapper>
              </Layout>
            )}
          />
        </>
      )}
    />
  );
};

export default Tab;
