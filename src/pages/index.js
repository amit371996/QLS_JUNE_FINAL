
import React, { useState, useEffect } from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import "../stylee.css"
import "../responsive.css"
import Layout from "../components/layout/layout"
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


const getSection = (data, start, end) => {
  const imageUrls = data && data.wpPage && data.wpPage.homePartnerSection && data.wpPage.homePartnerSection.partner;

  console.log(imageUrls);
  return imageUrls.slice(start, end) || [];

}

const Home = () => {
  const [isFullpage, setIsFullpage] = useState(true);

  // const imageUrls = [

  //   "https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26692.png",
  //   "https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26691.png",
  //   "https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26697.png",
  //   "https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26700.png",
  //   "https://www.qlspace.com.au/wp-content/uploads/2023/03/Group-26702.png"

  // ]
  // let imageUrls = [];  
  // const firstSection = imageUrls.slice(0, 5);
  // const secondSection = imageUrls.slice(5, 10);
  // const thirdSection = imageUrls.slice(10,15)





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
                    <section className="section">
                      <div className="secation01 homebnr bhg">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="our_main_heading">
                                <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.homeSlider.sliderHeading }}></h1>
                                <div className="imge_for_mobile">
                                  <img src="http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/Mask-group-6-1-1.png" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="section">
                      <div className="secation02 bhg">
                        <div className="jhg_tfrd">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-5 colmd5" /*style="position: relative;"*/>
                                <div className="kj_bgvcdfs">
                                  <div className="image_hfgfss">
                                    <source src="assets/image/vg.mp4" />
                                  </div>
                                  <div className="image_gnbdd">
                                    <div className="image_hfgfss">
                                      <video autoPlay={true} muted="" loop="" playsInline="" preload="metadata" className="video" id="myVideo" /*style="min-width:100%; min-height:100%;"*/>
                                        <source src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/earth-65103.mp4?autoPlay=1" />
                                      </video>
                                    </div>
                                  </div>

                                </div>
                              </div>
                              <div className="col-md-7">
                                <div className="our_about_wrap" dangerouslySetInnerHTML={{ __html: data.wpPage.homeSlider.about }}>
                                </div>
                                <div className="btn_g">
                                  <Link to="/about">View More</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="section id_hide" id="stopr_de">
                      <div className="secation03 back_ghbd bhg sliderimg">
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
                              <div className="list_manage">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="new_idf">
                                      {data && data.allWpSolution && data.allWpSolution.edges && data.allWpSolution.edges.map((edge, i) => {
                                        const solution = edge.node;
                                        return (
                                          <>
                                            <div className="start_y" id="sec1" key={solution.id}>
                                              <h2 className="text-start">{solution.title}</h2>

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
                    <section className="section">
                      <div className="section04 bhg">
                        <div className="container">
                          <div className="row align-items-center">
                            <div className="col-md-6">
                              <div className="ourr_tsgdf">
                                <ul>
                                  <li>
                                    <ul>

                                      {
                                        getSection(data, 0, 5).map(url => (
                                          <li><Link to={url.siteUrl}><img src={url.partnerImage.sourceUrl} alt='' /> </Link> </li>
                                        ))
                                      }
                                    </ul>
                                  </li>
                                  <li>
                                    <ul>

                                      {
                                        getSection(data, 5, 10).map(url => (
                                          <li><Link to={url.siteUrl}><img src={url.partnerImage.sourceUrl} alt='' /> </Link> </li>
                                        ))
                                      }
                                    </ul>
                                  </li>
                                  <li>
                                    <ul>

                                      {
                                        getSection(data, 10, 15).map(url => (
                                          <li><Link to={url.siteUrl}><img src={url.partnerImage.sourceUrl} alt='' /> </Link> </li>
                                        ))
                                      }
                                    </ul>
                                  </li>

                                  <div className="clr"></div>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="our_about_wrap" >
                                <div className='' dangerouslySetInnerHTML={{ __html: data.wpPage.homePartnerSection.partnerDetail }}>

                                </div>
                                {/* <div className="btn_g">
                                  <Link to="/partner">Meet Us</Link>
                                </div> */}
                              </div>



                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="section">
                      <div className="secation05 bhg">
                        <div className="container">
                          <div className="row">

                            <div className="col-md-12">
                              <div className="our_about_wrap">
                                <h2 className="text-start">What's New</h2>
                                <h4 className="text-start">Get the latest updates and helpful information</h4>


                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="htbdgh">
                          <div className="htbdgh">


                            <div className="gidr_news">
                              <div className="grif_wrap grif_wrap1">
                                <div className="itemg_hbg ngpv1">
                                  <div className="itemsnq itemsnq1">
                                    {data && data.allWpPost && data.allWpPost.edges && data.allWpPost.edges.map((edge, i) => {
                                      const allddt = edge.node;
                                      return (
                                        <div className="our_tsadr">

                                          <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />

                                          <div className="our_tfdsd">
                                            <div className="gtfrd">
                                              <h3>
                                                <Link to={"/blog/" + allddt.slug}>
                                                  {allddt.title.slice(0, 50)}...
                                                </Link></h3>

                                              <p>  {allddt.excerpt.slice(0, 50)}... </p>
                                              <div className="our_tascrt">
                                                <Link to="/blog">View All Posts</Link>

                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )
                                    })}

                                  </div>
                                  <div className="itemsnq itemsnq2">
                                    {data && data.allWpNews && data.allWpNews.edges && data.allWpNews.edges.map((edge, i) => {
                                      const allddt = edge.node;
                                      return (
                                        <div className="our_tsadr">
                                          <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />
                                          <div className="our_tfdsd">
                                            <div className="gtfrd">
                                              <h3>
                                                <Link to={"/news/" + allddt.slug}>
                                                  {allddt.title.slice(0, 50)}...
                                                </Link></h3>
                                              <p>  {allddt.excerpt.slice(0, 50)}... </p>
                                              <div className="our_tascrt">
                                                <Link to="/whats_new">View All News</Link>

                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )
                                    })}

                                  </div>
                                </div>
                                <div className="itemg_hbg ngpv2">
                                  {data && data.allWpEvents && data.allWpEvents.edges && data.allWpEvents.edges.map((edge, i) => {
                                    const allddt = edge.node;
                                    return (
                                      <div className="itemsnq itemsnq3">
                                        <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />

                                        <div className="our_tfdsd">
                                          <div className="gtfrd">
                                            <h3>
                                              <Link to={"/event/" + allddt.slug}>
                                                {allddt.title.slice(0, 50)}...
                                              </Link></h3>
                                            <p>{allddt.excerpt.slice(0, 50)}...</p>
                                            <div className="our_tascrt">
                                              <Link to="/event">View All Events</Link>

                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  })}

                                </div>
                              </div>
                              <div className="grif_wrap grif_wrap2">
                                {data && data.allWpPartners && data.allWpPartners.edges && data.allWpPartners.edges.map((edge, i) => {
                                  const allddt = edge.node;
                                  return (
                                    <div className="itemsnq itemsnq4">
                                      <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />

                                      <div className="our_tfdsd">
                                        <div className="gtfrd">
                                          <h3>
                                            <Link to={"/partner/" + allddt.slug}>
                                              {allddt.title.slice(0, 50)}...
                                            </Link>
                                          </h3>
                                          <p>
                                            {allddt.excerpt.slice(0, 50)}...</p>
                                          <div className="our_tascrt">
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
                                    <div className="itemsnq itemsnq5">
                                      <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />
                                      <div className="our_tfdsd">
                                        <div className="gtfrd">
                                          <h3>
                                            <Link to={"/video/" + allddt.slug}>
                                              {allddt.title.slice(0, 50)}...
                                            </Link>
                                          </h3>
                                          <p>
                                            {allddt.excerpt.slice(0, 50)}...</p>
                                          <div className="our_tascrt">
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
                <section className="section">
                  <div className="secation01 homebnr bhg">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="our_main_heading" >
                            <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.homeSlider.sliderHeading }}></h1>
                            <div className="imge_for_mobile">
                              <img src="http://steamlinedesign.com/suchi/qls/wp-content/uploads/2023/03/Mask-group-6-1-1.png" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="section">
                  <div className="secation02 bhg">
                    <div className="jhg_tfrd">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-5 colmd5" /*style="position: relative;"*/>
                            <div className="kj_bgvcdfs">
                              <div className="image_hfgfss">
                                <source src="assets/image/vg.mp4" />
                              </div>
                              <div className="image_gnbdd">
                                <div className="image_hfgfss">
                                  <video autoPlay muted loop playsInline preload="metadata" className="video" id="myVideo">
                                    <source src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/earth-65103.mp4" />
                                  </video>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div className="col-md-7">
                            <div className="our_about_wrap" dangerouslySetInnerHTML={{ __html: data.wpPage.homeSlider.about }}>
                            </div>
                            <div className="btn_g">
                              <Link to="/about">View More</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="section id_hide" id="stopr_de">
                  <div className="secation03 back_ghbd bhg sliderimg">
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


                          <div className="list_manage">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="new_idf">
                                  {data && data.allWpSolution && data.allWpSolution.edges && data.allWpSolution.edges.map((edge, i) => {
                                    const solution = edge.node;
                                    return (
                                      <>
                                        <div className="start_y" id="sec1" key={solution.id}>
                                          <h2 className="text-start">{solution.title}</h2>

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
                <section className="section">
                  <div className="section04 bhg">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <div className="ourr_tsgdf">
                            <ul>
                              <li>
                                <ul>

                                  {
                                    getSection(data, 0, 5).map(url => (
                                      <li><Link to={url.siteUrl}><img src={url.partnerImage.sourceUrl} alt='' /> </Link> </li>
                                    ))
                                  }
                                </ul>
                              </li>
                              <li>
                                <ul>

                                  {
                                    getSection(data, 5, 10).map(url => (
                                      <li><Link to={url.siteUrl}><img src={url.partnerImage.sourceUrl} alt='' /> </Link> </li>
                                    ))
                                  }
                                </ul>
                              </li>
                              <li>
                                <ul>

                                  {
                                    getSection(data, 10, 15).map(url => (
                                      <li><Link to={url.siteUrl}><img src={url.partnerImage.sourceUrl} alt='' /> </Link> </li>
                                    ))
                                  }
                                </ul>
                              </li>

                              <div className="clr"></div>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="our_about_wrap" >
                            <div className='' dangerouslySetInnerHTML={{ __html: data.wpPage.homePartnerSection.partnerDetail }}>

                            </div>
                            {/* <div className="btn_g">
                                  <Link to="/partner">Meet Us</Link>
                                </div> */}
                          </div>



                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="section">
                  <div className="secation05 bhg">
                    <div className="container">
                      <div className="row">

                        <div className="col-md-12">
                          <div className="our_about_wrap">
                            <h2 className="text-start">What's New</h2>
                            <h4 className="text-start">Get the latest updates and helpful information</h4>


                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="htbdgh">
                      <div className="htbdgh">


                        <div className="gidr_news">
                          <div className="grif_wrap grif_wrap1">
                            <div className="itemg_hbg ngpv1">
                              <div className="itemsnq itemsnq1">
                                {data && data.allWpPost && data.allWpPost.edges && data.allWpPost.edges.map((edge, i) => {
                                  const allddt = edge.node;
                                  return (
                                    <div className="our_tsadr">

                                      <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />

                                      <div className="our_tfdsd">
                                        <div className="gtfrd">
                                          <h3>
                                            <Link to={"/blog/" + allddt.slug}>
                                              {allddt.title.slice(0, 50)}...
                                            </Link></h3>

                                          <p>  {allddt.excerpt.slice(0, 50)}... </p>
                                          <div className="our_tascrt">
                                            <Link to="/blog">View All Posts</Link>

                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })}

                              </div>
                              <div className="itemsnq itemsnq2">
                                {data && data.allWpNews && data.allWpNews.edges && data.allWpNews.edges.map((edge, i) => {
                                  const allddt = edge.node;
                                  return (
                                    <div className="our_tsadr">
                                      <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />
                                      <div className="our_tfdsd">
                                        <div className="gtfrd">
                                          <h3>
                                            <Link to={"/news/" + allddt.slug}>
                                              {allddt.title.slice(0, 50)}...
                                            </Link></h3>
                                          <p>  {allddt.excerpt.slice(0, 50)}... </p>
                                          <div className="our_tascrt">
                                            <Link to="/whats_new">View All News</Link>

                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })}

                              </div>
                            </div>
                            <div className="itemg_hbg ngpv2">
                              {data && data.allWpEvents && data.allWpEvents.edges && data.allWpEvents.edges.map((edge, i) => {
                                const allddt = edge.node;
                                return (
                                  <div className="itemsnq itemsnq3">
                                    <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />

                                    <div className="our_tfdsd">
                                      <div className="gtfrd">
                                        <h3>
                                          <Link to={"/event/" + allddt.slug}>
                                            {allddt.title.slice(0, 50)}...
                                          </Link></h3>
                                        <p>{allddt.excerpt.slice(0, 50)}...</p>
                                        <div className="our_tascrt">
                                          <Link to="/event">View All Events</Link>

                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })}

                            </div>
                          </div>
                          <div className="grif_wrap grif_wrap2">
                            {data && data.allWpPartners && data.allWpPartners.edges && data.allWpPartners.edges.map((edge, i) => {
                              const allddt = edge.node;
                              return (
                                <div className="itemsnq itemsnq4">
                                  <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />

                                  <div className="our_tfdsd">
                                    <div className="gtfrd">
                                      <h3>
                                        <Link to={"/partner/" + allddt.slug}>
                                          {allddt.title.slice(0, 50)}...
                                        </Link>
                                      </h3>
                                      <p>
                                        {allddt.excerpt.slice(0, 50)}...</p>
                                      <div className="our_tascrt">
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
                                <div className="itemsnq itemsnq5">
                                  <img src={allddt.news.homePageImage.sourceUrl} alt='' className='img-fluid' />
                                  <div className="our_tfdsd">
                                    <div className="gtfrd">
                                      <h3>
                                        <Link to={"/video/" + allddt.slug}>
                                          {allddt.title.slice(0, 50)}...
                                        </Link>
                                      </h3>
                                      <p>
                                        {allddt.excerpt.slice(0, 50)}...</p>
                                      <div className="our_tascrt">
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

              </div>
            </Layout>
          )}
        </>

      )}
    />
  )

}
export default Home;