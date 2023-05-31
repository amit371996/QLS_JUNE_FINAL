import React, { useEffect, useRef,useState } from 'react';
import "../stylee.css";
import "../responsive.css";
import ReactFullpage from "@fullpage/react-fullpage";
import { graphql, StaticQuery } from "gatsby";
import fullpage_api from 'fullpage.js';

export default function Tabb() {
    const [scroll, setScroll] = useState(0);
    const [scrollClass, setScrollClass] = useState('');

    useEffect(() => {
      const handleScroll = () => {
        const scrollDiv = document.querySelector('.list_manage');
        const scrollTop = scrollDiv.scrollTop;
  
        setScroll(scrollTop);
  
        if (scrollTop < 1) {
     
          
          setScrollClass('scroll_1');
          document.querySelector('.progress').scrollTop = 1;
          console.log("1");
        } else if (scrollTop > 548 && scrollTop < 600) {
          setScrollClass('scroll_2');
          document.querySelector('.progress').scrollTop = 542;
          console.log("2");
        } else if (scrollTop > 1180 && scrollTop < 1300) {
          setScrollClass('scroll_3');
          document.querySelector('.progress').scrollTop = 1101;
          console.log("3");
        } else if (scrollTop > 1748 && scrollTop < 1800) {
          setScrollClass('scroll_4');
          document.querySelector('.progress').scrollTop = 1660;
          console.log("4");
        } else if (scrollTop > 2120 && scrollTop < 2200) {
          setScrollClass('scroll_5');
          document.querySelector('.progress').scrollTop = 2231;
          console.log("5");
        } else if (scrollTop > 2520 && scrollTop < 2560) {
          setScrollClass('scroll_6');
          document.querySelector('.progress').scrollTop = 2772;
          console.log("6");
        } 
  
        const docHeight = scrollDiv.scrollHeight;
        const winHeight = scrollDiv.clientHeight;
        const lineHeight = (scrollTop / (docHeight - winHeight)) * 5;
  
        const progressLine = document.querySelector('.progress .line');
        progressLine.style.height = `${scrollTop}px`;
      };
  
      const scrollDiv = document.querySelector('.list_managee');
      scrollDiv.addEventListener('scroll', handleScroll);
      return () => {
        scrollDiv.removeEventListener('scroll', handleScroll);
      };
  
    }, []);
    const fullpageOptions = {
  
      scrollOverflow: true,
      scrollOverflowOptions: { scrollbars: true },
    };
    const onScrollOverflow = (section, slide, position, direction) => {
        const params = {
            section: section,
            slide: slide,
            position: position,
            direction: direction
        };

        console.log('--- onScrollOverflow ---');
        console.log(params);
    };
    return (
        <>
            <StaticQuery
                query={graphql`
          query {
            wpPage(id: { eq: "cG9zdDoxMDM=" }) {
              title
              slug
              homePartnerSection {
                partnerDetail
                partner {
                  partnerImage {
                    sourceUrl
                  }
                  siteUrl
                }
              }
              about {
                advisorsheading
                description
                heading
                ouradvisors {
                  designation
                  image {
                    sourceUrl
                  }
                  linkedinurl
                  name
                  colorimage {
                    sourceUrl
                  }
                }
                teamheading
                ourteam {
                  designation
                  linkedinurl
                  name
                  image {
                    sourceUrl
                  }
                  colourImage {
                    sourceUrl
                  }
                }
              }
            }
          }
        `}
                render={(data) => (
                    <>
                        <ReactFullpage
                            scrollingSpeed={1000}
                            scrollOverflow={true}
                            onScrollOverflow={onScrollOverflow}
                          
                            render={({ fullpageApi }) => (
                                <>
                                    <ReactFullpage.Wrapper>
                                        <main>
                                            <section className="section id_hide" id="stopr_de">
                                                <div className='secation03 back_ghbd bhg sliderimg'>
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
                                                                <div className="progress" >
                                                                    <ul>
                                                                        <span className="line"></span>
                                                                        <li><a href="#sec1">I</a></li>
                                                                        <li><a href="#sec2">II</a></li>
                                                                        <li><a href="#sec3">III</a></li>
                                                                        <li><a href="#sec4">IV</a></li>
                                                                        <li><a href="#sec5">V</a></li>
                                                                        <li><a href="#sec6">VI</a></li>
                                                                        <li><a href="#sec7">VII</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-11">
                                                                <div className="list_manage" >
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <div className="new_idf">
                                                                                <div className="start_y" id="sec1">
                                                                                    <h2 className="text-start">MINING</h2>
                                                                                    <p>Revolutionise the future of critical earth mineral discovery and extraction</p>
                                                                                    <ul>
                                                                                        <li>Reduce CAPEX for exploratory critical earth mining and improve ESG using artificial intelligence, high-resolution satellite images, data, and sensors</li>
                                                                                        <li>Interpretation of aeromagnetic and satellite imagery data to produce structural and geological maps that help target deposits</li>
                                                                                        <li>Improve demand and supply chain mapping in mining commodities by monitoring different aspects of the supply chain, ranging from mining activity, port inventory and industrial plant production</li>
                                                                                        <li>Near real-time emission monitoring in mining</li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="start_y" id="sec2">
                                                                                    <h2 className="text-start">AGRICULTURE</h2>
                                                                                    <p>Develop next-generation agri-tech solutions, including precision farming, agri-insurance and agriculture monitoring</p>
                                                                                    <ul>
                                                                                        <li>Use real-time data relating crop condition, as well as information on soil, carbon levels, air and temperature to provide analytic insights on crop rotation, planting and harvesting times</li>
                                                                                        <li>Remotely detect pests and differentiate crop species and weeds to improve crop yield targets and crop health</li>
                                                                                        <li>Detect changes in land use and cover from high-resolution satellite data, the more accurate assess management of agriculture, forestry and coastal resources</li>
                                                                                        <li>Improve agri-banking and crop insurance by reducing losses with smarter risk estimates and real-time monitoring</li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="start_y" id="sec3">
                                                                                    <h2 className="text-start">INFRASTRUCTURE</h2>
                                                                                    <p>Improve management of infrastructure risk through proactive monitoring</p>
                                                                                    <ul>
                                                                                        <li>Transmission line planning and route optimization using machine learning and satellite data</li>
                                                                                        <li>Airport information management using geospatial data and machine learning</li>
                                                                                        <li>Monitor sophisticated infrastructures for development, site feasibility analysis and risk management</li>
                                                                                        <li>Rail-road conditions at regional and national levels</li>
                                                                                        <li>Remote location monitoring of assets and infrastructure</li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="start_y" id="sec4">
                                                                                    <h2 className="text-start">ENVIRONMENT</h2>
                                                                                    <p>Protecting the environment through accurate earth observation datasets</p>
                                                                                    <ul>
                                                                                        <li>Monitor methane emissions, as well as carbon levels</li>
                                                                                        <li>Provide more accurate environmental impact assessments through the use of spatially explicit and frequently updated data</li>
                                                                                        <li>Monitor inland waterway health</li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="start_y" id="sec5">
                                                                                    <h2 className="text-start">DISASTER AND RECOVERY</h2>
                                                                                    <p>Offer solutions to better predict, monitor, assess and respond to natural disasters</p>
                                                                                    <ul>
                                                                                        <li>Improve disaster response and management through analysis of natural disasters like earthquakes, cyclones, floods, and bushfire damages</li>
                                                                                        <li>Aid recovery by detecting near real-time changes to allow immediate relief measures to be taken during natural calamities</li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="start_y" id="sec6">
                                                                                    <h2 className="text-start">DEFENCE AND SECURITY</h2>
                                                                                    <p>Use high-resolution satellite data, AI and machine learning to derive intelligent information for defence surveillance and security monitoring</p>
                                                                                    <ul>
                                                                                        <li>Identify military resources and troop movement to aid with relief and security efforts</li>
                                                                                        <li>Detect chemical seepages across land classes</li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section className="section id_hide" id="stopr_de">
                                                <div className='secation03 back_ghbd bhg sliderimg'>
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
                                                                <div className="progress" >
                                                                    <ul>
                                                                        <span className="line"></span>
                                                                        <li><a href="#sec1">I</a></li>
                                                                        <li><a href="#sec2">II</a></li>
                                                                        <li><a href="#sec3">III</a></li>
                                                                        <li><a href="#sec4">IV</a></li>
                                                                        <li><a href="#sec5">V</a></li>
                                                                        <li><a href="#sec6">VI</a></li>
                                                                        <li><a href="#sec7">VII</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-11">
                                                                <div className="list_manage" >
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <div className="new_idf">
                                                                                <div className="start_y" id="sec1">
                                                                                    <h2 className="text-start">MINING</h2>
                                                                                    <p>Revolutionise the future of critical earth mineral discovery and extraction</p>
                                                                                    <ul>
                                                                                        <li>Reduce CAPEX for exploratory critical earth mining and improve ESG using artificial intelligence, high-resolution satellite images, data, and sensors</li>
                                                                                        <li>Interpretation of aeromagnetic and satellite imagery data to produce structural and geological maps that help target deposits</li>
                                                                                        <li>Improve demand and supply chain mapping in mining commodities by monitoring different aspects of the supply chain, ranging from mining activity, port inventory and industrial plant production</li>
                                                                                        <li>Near real-time emission monitoring in mining</li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="start_y" id="sec2">
                                                                                    <h2 className="text-start">AGRICULTURE</h2>
                                                                                    <p>Develop next-generation agri-tech solutions, including precision farming, agri-insurance and agriculture monitoring</p>
                                                                                    <ul>
                                                                                        <li>Use real-time data relating crop condition, as well as information on soil, carbon levels, air and temperature to provide analytic insights on crop rotation, planting and harvesting times</li>
                                                                                        <li>Remotely detect pests and differentiate crop species and weeds to improve crop yield targets and crop health</li>
                                                                                        <li>Detect changes in land use and cover from high-resolution satellite data, the more accurate assess management of agriculture, forestry and coastal resources</li>
                                                                                        <li>Improve agri-banking and crop insurance by reducing losses with smarter risk estimates and real-time monitoring</li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="start_y" id="sec3">
                                                                                    <h2 className="text-start">INFRASTRUCTURE</h2>
                                                                                    <p>Improve management of infrastructure risk through proactive monitoring</p>
                                                                                    <ul>
                                                                                        <li>Transmission line planning and route optimization using machine learning and satellite data</li>
                                                                                        <li>Airport information management using geospatial data and machine learning</li>
                                                                                        <li>Monitor sophisticated infrastructures for development, site feasibility analysis and risk management</li>
                                                                                        <li>Rail-road conditions at regional and national levels</li>
                                                                                        <li>Remote location monitoring of assets and infrastructure</li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="start_y" id="sec4">
                                                                                    <h2 className="text-start">ENVIRONMENT</h2>
                                                                                    <p>Protecting the environment through accurate earth observation datasets</p>
                                                                                    <ul>
                                                                                        <li>Monitor methane emissions, as well as carbon levels</li>
                                                                                        <li>Provide more accurate environmental impact assessments through the use of spatially explicit and frequently updated data</li>
                                                                                        <li>Monitor inland waterway health</li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="start_y" id="sec5">
                                                                                    <h2 className="text-start">DISASTER AND RECOVERY</h2>
                                                                                    <p>Offer solutions to better predict, monitor, assess and respond to natural disasters</p>
                                                                                    <ul>
                                                                                        <li>Improve disaster response and management through analysis of natural disasters like earthquakes, cyclones, floods, and bushfire damages</li>
                                                                                        <li>Aid recovery by detecting near real-time changes to allow immediate relief measures to be taken during natural calamities</li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="start_y" id="sec6">
                                                                                    <h2 className="text-start">DEFENCE AND SECURITY</h2>
                                                                                    <p>Use high-resolution satellite data, AI and machine learning to derive intelligent information for defence surveillance and security monitoring</p>
                                                                                    <ul>
                                                                                        <li>Identify military resources and troop movement to aid with relief and security efforts</li>
                                                                                        <li>Detect chemical seepages across land classes</li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <div id="fullpage">
                                                <div class="section" id="section0">
                                                    <div class="intro">
                                                        <h1>Scrolling inside sections</h1>
                                                        <p>Easy and useful! Just make use of the option `scrollOverflow` for it and add the `scrolloverflow` vendor libary! <br /></p>




                                                    </div>
                                                </div>
                                                <div className={` section secation03 back_ghbd bhg sliderimg ${scrollClass}`} id="section1">
                                                    <div class="slide" id="slide1">
                                                        <div class="intro">
                                                            <div className='container'>
                                                                <div className='row'>
                                                                    <div className='col-md-1'>
                                                                    <div className="progress">
                                                                    <ul>
                                                                        <span className="line"></span>
                                                                        <li><a href="#sec1">I</a></li>
                                                                        <li><a href="#sec2">II</a></li>
                                                                        <li><a href="#sec3">III</a></li>
                                                                        <li><a href="#sec4">IV</a></li>
                                                                        <li><a href="#sec5">V</a></li>
                                                                        <li><a href="#sec6">VI</a></li>
                                                                        <li><a href="#sec7">VII</a></li>
                                                                    </ul>
                                                                </div>
                                                                    </div>
                                                                    <div className='col-md-11'>
                                                                        <div className="list_managee">
                                                                            <div className='row'>
                                                                                <div className='col-md-6'>
                                                                                    <div className="new_idf">
                                                                                        <div className="start_y" id="sec1">
                                                                                            <h2 className="text-start">MINING</h2>
                                                                                            <p>Revolutionise the future of critical earth mineral discovery and extraction</p>
                                                                                            <ul>
                                                                                                <li>Reduce CAPEX for exploratory critical earth mining and improve ESG using artificial intelligence, high-resolution satellite images, data, and sensors</li>
                                                                                                <li>Interpretation of aeromagnetic and satellite imagery data to produce structural and geological maps that help target deposits</li>
                                                                                                <li>Improve demand and supply chain mapping in mining commodities by monitoring different aspects of the supply chain, ranging from mining activity, port inventory and industrial plant production</li>
                                                                                                <li>Near real-time emission monitoring in mining</li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div className="start_y" id="sec2">
                                                                                            <h2 className="text-start">AGRICULTURE</h2>
                                                                                            <p>Develop next-generation agri-tech solutions, including precision farming, agri-insurance and agriculture monitoring</p>
                                                                                            <ul>
                                                                                                <li>Use real-time data relating crop condition, as well as information on soil, carbon levels, air and temperature to provide analytic insights on crop rotation, planting and harvesting times</li>
                                                                                                <li>Remotely detect pests and differentiate crop species and weeds to improve crop yield targets and crop health</li>
                                                                                                <li>Detect changes in land use and cover from high-resolution satellite data, the more accurate assess management of agriculture, forestry and coastal resources</li>
                                                                                                <li>Improve agri-banking and crop insurance by reducing losses with smarter risk estimates and real-time monitoring</li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div className="start_y" id="sec3">
                                                                                            <h2 className="text-start">INFRASTRUCTURE</h2>
                                                                                            <p>Improve management of infrastructure risk through proactive monitoring</p>
                                                                                            <ul>
                                                                                                <li>Transmission line planning and route optimization using machine learning and satellite data</li>
                                                                                                <li>Airport information management using geospatial data and machine learning</li>
                                                                                                <li>Monitor sophisticated infrastructures for development, site feasibility analysis and risk management</li>
                                                                                                <li>Rail-road conditions at regional and national levels</li>
                                                                                                <li>Remote location monitoring of assets and infrastructure</li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div className="start_y" id="sec4">
                                                                                            <h2 className="text-start">ENVIRONMENT</h2>
                                                                                            <p>Protecting the environment through accurate earth observation datasets</p>
                                                                                            <ul>
                                                                                                <li>Monitor methane emissions, as well as carbon levels</li>
                                                                                                <li>Provide more accurate environmental impact assessments through the use of spatially explicit and frequently updated data</li>
                                                                                                <li>Monitor inland waterway health</li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div className="start_y" id="sec5">
                                                                                            <h2 className="text-start">DISASTER AND RECOVERY</h2>
                                                                                            <p>Offer solutions to better predict, monitor, assess and respond to natural disasters</p>
                                                                                            <ul>
                                                                                                <li>Improve disaster response and management through analysis of natural disasters like earthquakes, cyclones, floods, and bushfire damages</li>
                                                                                                <li>Aid recovery by detecting near real-time changes to allow immediate relief measures to be taken during natural calamities</li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div className="start_y" id="sec6">
                                                                                            <h2 className="text-start">DEFENCE AND SECURITY</h2>
                                                                                            <p>Use high-resolution satellite data, AI and machine learning to derive intelligent information for defence surveillance and security monitoring</p>
                                                                                            <ul>
                                                                                                <li>Identify military resources and troop movement to aid with relief and security efforts</li>
                                                                                                <li>Detect chemical seepages across land classes</li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>



                                                </div>
                                                <section className="section id_hide" id="stopr_de">
                                                    <div className='secation03 back_ghbd bhg sliderimg'>
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
                                                                            <li><a href="#sec6">VI</a></li>
                                                                            <li><a href="#sec7">VII</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-11">
                                                                    <div className="list_manage">
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <div className="new_idf">
                                                                                    <div className="start_y" id="sec1">
                                                                                        <h2 className="text-start">MINING</h2>
                                                                                        <p>Revolutionise the future of critical earth mineral discovery and extraction</p>
                                                                                        <ul>
                                                                                            <li>Reduce CAPEX for exploratory critical earth mining and improve ESG using artificial intelligence, high-resolution satellite images, data, and sensors</li>
                                                                                            <li>Interpretation of aeromagnetic and satellite imagery data to produce structural and geological maps that help target deposits</li>
                                                                                            <li>Improve demand and supply chain mapping in mining commodities by monitoring different aspects of the supply chain, ranging from mining activity, port inventory and industrial plant production</li>
                                                                                            <li>Near real-time emission monitoring in mining</li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="start_y" id="sec2">
                                                                                        <h2 className="text-start">AGRICULTURE</h2>
                                                                                        <p>Develop next-generation agri-tech solutions, including precision farming, agri-insurance and agriculture monitoring</p>
                                                                                        <ul>
                                                                                            <li>Use real-time data relating crop condition, as well as information on soil, carbon levels, air and temperature to provide analytic insights on crop rotation, planting and harvesting times</li>
                                                                                            <li>Remotely detect pests and differentiate crop species and weeds to improve crop yield targets and crop health</li>
                                                                                            <li>Detect changes in land use and cover from high-resolution satellite data, the more accurate assess management of agriculture, forestry and coastal resources</li>
                                                                                            <li>Improve agri-banking and crop insurance by reducing losses with smarter risk estimates and real-time monitoring</li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="start_y" id="sec3">
                                                                                        <h2 className="text-start">INFRASTRUCTURE</h2>
                                                                                        <p>Improve management of infrastructure risk through proactive monitoring</p>
                                                                                        <ul>
                                                                                            <li>Transmission line planning and route optimization using machine learning and satellite data</li>
                                                                                            <li>Airport information management using geospatial data and machine learning</li>
                                                                                            <li>Monitor sophisticated infrastructures for development, site feasibility analysis and risk management</li>
                                                                                            <li>Rail-road conditions at regional and national levels</li>
                                                                                            <li>Remote location monitoring of assets and infrastructure</li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="start_y" id="sec4">
                                                                                        <h2 className="text-start">ENVIRONMENT</h2>
                                                                                        <p>Protecting the environment through accurate earth observation datasets</p>
                                                                                        <ul>
                                                                                            <li>Monitor methane emissions, as well as carbon levels</li>
                                                                                            <li>Provide more accurate environmental impact assessments through the use of spatially explicit and frequently updated data</li>
                                                                                            <li>Monitor inland waterway health</li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="start_y" id="sec5">
                                                                                        <h2 className="text-start">DISASTER AND RECOVERY</h2>
                                                                                        <p>Offer solutions to better predict, monitor, assess and respond to natural disasters</p>
                                                                                        <ul>
                                                                                            <li>Improve disaster response and management through analysis of natural disasters like earthquakes, cyclones, floods, and bushfire damages</li>
                                                                                            <li>Aid recovery by detecting near real-time changes to allow immediate relief measures to be taken during natural calamities</li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="start_y" id="sec6">
                                                                                        <h2 className="text-start">DEFENCE AND SECURITY</h2>
                                                                                        <p>Use high-resolution satellite data, AI and machine learning to derive intelligent information for defence surveillance and security monitoring</p>
                                                                                        <ul>
                                                                                            <li>Identify military resources and troop movement to aid with relief and security efforts</li>
                                                                                            <li>Detect chemical seepages across land classes</li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>

                                        </main>
                                    </ReactFullpage.Wrapper>
                                </>
                            )}
                        />
                    </>
                )}
            />
        </>
    );
}

