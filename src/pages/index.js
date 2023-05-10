
import React, { useState, useEffect } from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import "../stylee.css"
import "../responsive.css"
import Layout from "../components/layout/layout"
import homepgbg from '../image/Blog-image-7th-April-409x214-1.jpg';
import homepgb2 from '../image/homebg.png';
import homepgb3 from '../image/events.png';
import homepgb4 from '../image/25_546.jpg';
import homepgb5 from '../image/imgpsh_fullsize_anim-1.png';
import { Link, StaticQuery, graphql } from 'gatsby';


// const DisplayVideo = (imageUrls) => {
//     let result = '';
//     let start = 0;
//     let end = 5;
//     const totalSections = imageUrls.length;
//     for(let i=0; i< totalSections; i++) {
//         result += '<ul>'
//         for(let j =start; j<end; j++) {
//             result+=`
//             <li><a href="#"><img src=${imageUrls[j]} alt='' /> </a> </li>
//             `
//             start++;
//         }
//         result+='</ul>'
//         end+=5;
//     }
//     return result;
// }

const Home = () => {
  const [isFullpage, setIsFullpage] = useState(true);

  // const imageUrls = [

  //   "https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26692.png",
  //   "https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26691.png",
  //   "https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26697.png",
  //   "https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26700.png",
  //   "https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26702.png"

  // ]
  // const firstSection = imageUrls.slice(0, 5);
  // const secondSection = imageUrls.slice(5, 10);
  // const thirdSection = imageUrls.slice()



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setIsFullpage(false);
      } else {
        setIsFullpage(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (

    <StaticQuery
      query={graphql`
			query {
				allWpSolution(sort: {id: ASC}) {
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
				  },

				  wpPage(id: {eq: "cG9zdDo3"}) {
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
                        siteUrl
					  }
					}
				  }
          allWpEvents(limit: 1, sort: {date: DESC}) {
            edges {
              node {
                id
                title
                slug
                news {
                  homePageImage {
                    sourceUrl
                  }
                }
                excerpt
              }
            }
          }
          allWpPost(limit: 1, sort: {date: DESC}) {
            edges {
              node {
                id
                title
                slug
                news {
                  homePageImage {
                    sourceUrl
                  }
                }
                excerpt
              }
            }
          }
          allWpPartners(limit: 1, sort: {date: DESC}) {
            edges {
              node {
                id
                title
                slug
                news {
                  homePageImage {
                    sourceUrl
                  }
                }
                excerpt
              }
            }
          }
          allWpVideos(limit: 1, sort: {date: DESC}) {
            edges {
              node {
                id
                title
                slug
                news {
                  homePageImage {
                    sourceUrl
                  }
                }
                excerpt
              }
            }
          }
          allWpNews(limit: 1, sort: {date: DESC}) {
            edges {
              node {
                id
                title
                slug
                news {
                  homePageImage {
                    sourceUrl
                  }
                }
                excerpt
              }
            }
          }
                
			}
		`}


      render={data => (
        <>
          {isFullpage ? (
            <ReactFullpage
              //fullpage options
              // licenseKey={'YOUR_KEY_HERE'}
              scrollingSpeed={1000} /* Options here */

              render={({ fullpageApi }) => (
                <Layout>
                  <ReactFullpage.Wrapper>
                    <section class="section">
                      <div class="secation01 homebnr bhg">
                        <div class="container">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="our_main_heading">
                                <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.homeSlider.sliderHeading }}></h1>
                                <div class="imge_for_mobile">
                                  <img src="http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/Mask-group-6-1-1.png" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section class="section">
                      <div class="secation02 bhg">
                        <div class="jhg_tfrd">
                          <div class="container">
                            <div class="row">
                              <div class="col-md-5 colmd5" /*style="position: relative;"*/>
                                <div class="kj_bgvcdfs">
                                  <div class="image_hfgfss">
                                    <source src="assets/image/vg.mp4" />
                                  </div>
                                  <div class="image_gnbdd">
                                    <div class="image_hfgfss">
                                      <video autoplay="true" muted="" loop="" playsInline="" preload="metadata" class="video" id="myVideo" /*style="min-width:100%; min-height:100%;"*/>
                                        <source src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/earth-65103.mp4?autoplay=1" />
                                      </video>
                                    </div>
                                  </div>

                                </div>
                              </div>
                              <div class="col-md-7">
                                <div class="our_about_wrap" dangerouslySetInnerHTML={{ __html: data.wpPage.homeSlider.about }}>
                                </div>
                                <div class="btn_g">
                                  <Link to="/about">View More</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section class="section id_hide" id="stopr_de">
                      <div class="secation03 back_ghbd bhg sliderimg">
                        <div class="container">
                          <div class="row">

                            <div class="col-md-12">
                              <div class="our_about_wrap">
                                <h2 class="text-start">Solutions</h2>
                                <h4 class="text-start">State-of-the-art technology combined with relentless effort towards excellence</h4>


                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-1">
                              <div class="progress">
                                <ul>
                                  <span class="line"></span>
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
                            <div class="col-md-11">
                              <div class="list_manage">
                                <div class="row">
                                  <div class="col-md-6">
                                    <div class="new_idf">
                                      {data && data.allWpSolution && data.allWpSolution.edges && data.allWpSolution.edges.map((edge, i) => {
                                        const solution = edge.node;
                                        return (
                                          <>
                                            <div class="start_y" id="sec1" key={solution.id}>
                                              <h2 class="text-start">{solution.title}</h2>

                                              <div className='slmntxt' dangerouslySetInnerHTML={{ __html: solution.content }}></div>
                                            </div>

                                          </>
                                        )
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
                    <section class="section">
                      <div class="section04 bhg">
                        <div class="container">
                          <div class="row align-items-center">
                            <div class="col-md-6">
                              <div class="ourr_tsgdf">
                                <ul>
                                  <li>
                                    <ul>
                                      <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26692.png" alt='' /> </a> </li>
                                      <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26691.png" alt='' /> </a> </li>
                                      <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26697.png" alt='' /> </a> </li>
                                      <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26700.png" alt='' /> </a> </li>
                                      <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26702.png" alt='' /> </a> </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <ul>
                                      <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26693.png" alt='' /> </a> </li>
                                      <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26695.png" alt='' /> </a> </li>
                                      <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26698.png" alt='' /></a> </li>
                                      <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26701.png" alt='' /> </a> </li>
                                      <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26703.png" alt='' /> </a> </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <ul>
                                      <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26694.png" alt='' /> </a> </li>
                                      <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26696.png" alt='' /> </a> </li>
                                      <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26699.png" alt='' /></a> </li>
                                      <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26704.png" alt='' /></a> </li>
                                      <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26705.png" alt='' /> </a> </li>
                                    </ul>
                                  </li>
                                  <div class="clr"></div>
                                </ul>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="our_about_wrap" >
                                <div className='' dangerouslySetInnerHTML={{ __html: data.wpPage.homePartnerSection.partnerDetail }}>

                                </div>
                                {/* <div class="btn_g">
                                  <Link to="/partner">Meet Us</Link>
                                </div> */}
                              </div>



                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section class="section">
                      <div class="secation05 bhg">
                        <div class="container">
                          <div class="row">

                            <div class="col-md-12">
                              <div class="our_about_wrap">
                                <h2 class="text-start">What's New</h2>
                                <h4 class="text-start">Get the latest updates and helpful information</h4>


                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="htbdgh">
                          <div class="htbdgh">


                            <div class="gidr_news">
                              <div class="grif_wrap grif_wrap1">
                                <div class="itemg_hbg ngpv1">
                                  <div class="itemsnq itemsnq1">
                                    {data && data.allWpPost && data.allWpPost.edges && data.allWpPost.edges.map((edge, i) => {
                                      const allddt = edge.node;
                                      return (
                                        <div class="our_tsadr">

                                          <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />

                                          <div class="our_tfdsd">
                                            <div class="gtfrd">
                                              <h3>
                                                <Link to={"/blog/" + allddt.slug}>
                                                  {allddt.title.slice(0, 50)}...
                                                </Link></h3>

                                              <p>  {allddt.excerpt.slice(0, 50)}... </p>
                                              <div class="our_tascrt">
                                                <Link to="/blog">View All Posts</Link>

                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )
                                    })}

                                  </div>
                                  <div class="itemsnq itemsnq2">
                                    {data && data.allWpNews && data.allWpNews.edges && data.allWpNews.edges.map((edge, i) => {
                                      const allddt = edge.node;
                                      return (
                                        <div class="our_tsadr">
                                          <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />
                                          <div class="our_tfdsd">
                                            <div class="gtfrd">
                                              <h3>
                                                <Link to={"/news/" + allddt.slug}>
                                                  {allddt.title.slice(0, 50)}...
                                                </Link></h3>
                                              <p>  {allddt.excerpt.slice(0, 50)}... </p>
                                              <div class="our_tascrt">
                                                <Link to="/whats_new">View All News</Link>

                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )
                                    })}

                                  </div>
                                </div>
                                <div class="itemg_hbg ngpv2">
                                  {data && data.allWpEvents && data.allWpEvents.edges && data.allWpEvents.edges.map((edge, i) => {
                                    const allddt = edge.node;
                                    return (
                                      <div class="itemsnq itemsnq3">
                                        <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />

                                        <div class="our_tfdsd">
                                          <div class="gtfrd">
                                            <h3>
                                              <Link to={"/event/" + allddt.slug}>
                                                {allddt.title.slice(0, 50)}...
                                              </Link></h3>
                                            <p>{allddt.excerpt.slice(0, 50)}...</p>
                                            <div class="our_tascrt">
                                              <Link to="/event">View All Events</Link>

                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  })}

                                </div>
                              </div>
                              <div class="grif_wrap grif_wrap2">
                                {data && data.allWpPartners && data.allWpPartners.edges && data.allWpPartners.edges.map((edge, i) => {
                                  const allddt = edge.node;
                                  return (
                                    <div class="itemsnq itemsnq4">
                                      <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />

                                      <div class="our_tfdsd">
                                        <div class="gtfrd">
                                          <h3>
                                            <Link to={"/partner/" + allddt.slug}>
                                              {allddt.title.slice(0, 50)}...
                                            </Link>
                                          </h3>
                                          <p>
                                            {allddt.excerpt.slice(0, 50)}...</p>
                                          <div class="our_tascrt">
                                            <Link to="/partner">View All Partners</Link>
                                          </div>
                                        </div>
                                      </div>

                                    </div>
                                  )
                                })}

                                {data && data.allWpVideos && data.allWpVideos.edges && data.allWpVideos.edges.map((edge, i) => {
                                  const allddt = edge.node;
                                  return (
                                    <div class="itemsnq itemsnq5">
                                      <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />
                                      <div class="our_tfdsd">
                                        <div class="gtfrd">
                                          <h3>
                                            <Link to={"/video/" + allddt.slug}>
                                              {allddt.title.slice(0, 50)}...
                                            </Link>
                                          </h3>
                                          <p>
                                            {allddt.excerpt.slice(0, 50)}...</p>
                                          <div class="our_tascrt">
                                            <Link to="/videos">View All Videos</Link>

                                          </div>
                                        </div>
                                      </div>

                                    </div>
                                  )
                                })}

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
          ) : (
            <Layout>
              <div>
                <section class="section">
                  <div class="secation01 homebnr bhg">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="our_main_heading" >
                            <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.homeSlider.sliderHeading }}></h1>
                            <div class="imge_for_mobile">
                              <img src="http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/Mask-group-6-1-1.png" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                 <section class="section">
                      <div class="secation02 bhg">
                        <div class="jhg_tfrd">
                          <div class="container">
                            <div class="row">
                              <div class="col-md-5 colmd5" /*style="position: relative;"*/>
                                <div class="kj_bgvcdfs">
                                  <div class="image_hfgfss">
                                    <source src="assets/image/vg.mp4" />
                                  </div>
                                  <div class="image_gnbdd">
                                    <div class="image_hfgfss">
                                      <video autoplay="true" muted="" loop="" playsInline="" preload="metadata" class="video" id="myVideo" /*style="min-width:100%; min-height:100%;"*/>
                                        <source src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/earth-65103.mp4?autoplay=1" />
                                      </video>
                                    </div>
                                  </div>

                                </div>
                              </div>
                              <div class="col-md-7">
                                <div class="our_about_wrap" dangerouslySetInnerHTML={{ __html: data.wpPage.homeSlider.about }}>
                                </div>
                                <div class="btn_g">
                                  <Link to="/about">View More</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                <section class="section id_hide" id="stopr_de">
                  <div class="secation03 back_ghbd bhg sliderimg">
                    <div class="container">
                      <div class="row">

                        <div class="col-md-12">
                          <div class="our_about_wrap">
                            <h2 class="text-start">Solutions</h2>
                            <h4 class="text-start">State-of-the-art technology combined with relentless effort towards excellence</h4>


                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-1">
                          <div class="progress">
                            <ul>
                              <span class="line"></span>
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
                        <div class="col-md-11">


                          <div class="list_manage">
                            <div class="row">
                              <div class="col-md-6">
                                <div class="new_idf">
                                  {data && data.allWpSolution && data.allWpSolution.edges && data.allWpSolution.edges.map((edge, i) => {
                                    const solution = edge.node;
                                    return (
                                      <>
                                        <div class="start_y" id="sec1" key={solution.id}>
                                          <h2 class="text-start">{solution.title}</h2>

                                          <div className='slmntxt' dangerouslySetInnerHTML={{ __html: solution.content }}></div>
                                        </div>

                                      </>
                                    )
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
                <section class="section">
                  <div class="section04 bhg">

                    <div class="container">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="ourr_tsgdf">
                            <ul>
                              <li>
                                <ul>
                                  <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26692.png" alt='' /> </a> </li>
                                  <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26691.png" alt='' /> </a> </li>
                                  <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26697.png" alt='' /> </a> </li>
                                  <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26700.png" alt='' /> </a> </li>
                                  <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26702.png" alt='' /> </a> </li>
                                </ul>
                              </li>
                              <li>
                                <ul>
                                  <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26693.png" alt='' /> </a> </li>
                                  <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26695.png" alt='' /> </a> </li>
                                  <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26698.png" alt='' /></a> </li>
                                  <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26701.png" alt='' /> </a> </li>
                                  <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26703.png" alt='' /> </a> </li>
                                </ul>
                              </li>
                              <li>
                                <ul>
                                  <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26694.png" alt='' /> </a> </li>
                                  <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26696.png" alt='' /> </a> </li>
                                  <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26699.png" alt='' /></a> </li>
                                  <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26704.png" alt='' /></a> </li>
                                  <li><a href="#"><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26705.png" alt='' /> </a> </li>
                                </ul>
                              </li>
                              <div class="clr"></div>
                            </ul>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="our_about_wrap" >
                            <div className='' dangerouslySetInnerHTML={{ __html: data.wpPage.homePartnerSection.partnerDetail }}>

                            </div>

                          </div>



                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section class="section">
                  <div class="secation05 bhg">
                    <div class="container">
                      <div class="row">

                        <div class="col-md-12">
                          <div class="our_about_wrap">
                            <h2 class="text-start">What's New</h2>
                            <h4 class="text-start">Get the latest updates and helpful information</h4>


                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="htbdgh">
                      <div class="htbdgh">


                        <div class="gidr_news">
                          <div class="grif_wrap grif_wrap1">
                            <div class="itemg_hbg ngpv1">
                              <div class="itemsnq itemsnq1">
                                {data && data.allWpPost && data.allWpPost.edges && data.allWpPost.edges.map((edge, i) => {
                                  const allddt = edge.node;
                                  return (
                                    <div class="our_tsadr">

                                      <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />

                                      <div class="our_tfdsd">
                                        <div class="gtfrd">
                                          <h3>
                                            <Link to={"/blog/" + allddt.slug}>
                                              {allddt.title.slice(0, 50)}...
                                            </Link></h3>

                                          <p>  {allddt.excerpt.slice(0, 50)}... </p>
                                          <div class="our_tascrt">
                                            <Link to="/blog">View All Posts</Link>

                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })}

                              </div>
                              <div class="itemsnq itemsnq2">
                                {data && data.allWpNews && data.allWpNews.edges && data.allWpNews.edges.map((edge, i) => {
                                  const allddt = edge.node;
                                  return (
                                    <div class="our_tsadr">
                                      <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />
                                      <div class="our_tfdsd">
                                        <div class="gtfrd">
                                          <h3>
                                            <Link to={"/news/" + allddt.slug}>
                                              {allddt.title.slice(0, 50)}...
                                            </Link></h3>
                                          <p>  {allddt.excerpt.slice(0, 50)}... </p>
                                          <div class="our_tascrt">
                                            <Link to="/whats_new">View All News</Link>

                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })}

                              </div>
                            </div>
                            <div class="itemg_hbg ngpv2">
                              {data && data.allWpEvents && data.allWpEvents.edges && data.allWpEvents.edges.map((edge, i) => {
                                const allddt = edge.node;
                                return (
                                  <div class="itemsnq itemsnq3">
                                    <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />

                                    <div class="our_tfdsd">
                                      <div class="gtfrd">
                                        <h3>
                                          <Link to={"/event/" + allddt.slug}>
                                            {allddt.title.slice(0, 50)}...
                                          </Link></h3>
                                        <p>{allddt.excerpt.slice(0, 50)}...</p>
                                        <div class="our_tascrt">
                                          <Link to="/event">View All Events</Link>

                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })}

                            </div>
                          </div>
                          <div class="grif_wrap grif_wrap2">
                            {data && data.allWpPartners && data.allWpPartners.edges && data.allWpPartners.edges.map((edge, i) => {
                              const allddt = edge.node;
                              return (
                                <div class="itemsnq itemsnq4">
                                  <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />

                                  <div class="our_tfdsd">
                                    <div class="gtfrd">
                                      <h3>
                                        <Link to={"/partner/" + allddt.slug}>
                                          {allddt.title.slice(0, 50)}...
                                        </Link>
                                      </h3>
                                      <p>
                                        {allddt.excerpt.slice(0, 50)}...</p>
                                      <div class="our_tascrt">
                                        <Link to="/partner">View All Partners</Link>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              )
                            })}

                            {data && data.allWpVideos && data.allWpVideos.edges && data.allWpVideos.edges.map((edge, i) => {
                              const allddt = edge.node;
                              return (
                                <div class="itemsnq itemsnq5">
                                  <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />
                                  <div class="our_tfdsd">
                                    <div class="gtfrd">
                                      <h3>
                                        <Link to={"/video/" + allddt.slug}>
                                          {allddt.title.slice(0, 50)}...
                                        </Link>
                                      </h3>
                                      <p>
                                        {allddt.excerpt.slice(0, 50)}...</p>
                                      <div class="our_tascrt">
                                        <Link to="/videos">View All Videos</Link>

                                      </div>
                                    </div>
                                  </div>

                                </div>
                              )
                            })}

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className='section scrll_section'>

                </section>
              </div>
            </Layout>
          )}
        </>

      )}
    />
  )

}
export default Home;