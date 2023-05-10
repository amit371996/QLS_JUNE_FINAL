import React from "react"
import { useState,useEffect } from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import "../stylee.css"
import "../responsive.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import EvlonPopUp from '../components/Allvideospopup/Evlonpopup/evlonpopup';
export default ({ data }) => {

    const videos = data.allWpVideos.edges[0].node

    const [isOpen, setIsOpen] = useState(false);
    const [popUpUrl, setPopUpUrl] = useState('');
    const handleOpenModal = (url) => {
        setIsOpen(true);
        setPopUpUrl(url);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };
    library.add(faEnvelope, faPlay);
    const popurlvideo=videos.video.videoUrl;
    return (

        <Layout>

            <main>
                <section class="section new00">
                    <div class="secation01 bhg secn_abouts">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="our_main_heading text-center">
                                        <div class="bread_cumg">
                                            <h1 class="text-center"><strong>Videos </strong> details</h1>
                                            <p>{videos.title}</p>
                                        </div>
                                    </div>
                                    <div class="img_arrow">
                                        <div class="roww_wrap">
                                            <a href="#"><img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/arrow.svg" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section">
                    <div class="section_nb">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="news_details">
                                        <div class="date_wrap">
                                            <p>{videos.date}</p>
                                        </div>
                                        <div class="heading_news">
                                            <h1>{videos.title}</h1>
                                        </div>
                                        <div class="inner_ghv vedio_details">
                                            <img src={videos.featuredImage.node.sourceUrl} />
                                            <div class="video_incon_wrap" id="343" data-videourl="https://www.qlspace.com.au/wp-content/uploads/2023/03/1678093494570.mp4">
                                                
                                                <div class="icon_fgb" onClick={() => handleOpenModal(`${popurlvideo}?autoplay=1`)} >
                                                    <FontAwesomeIcon icon={faPlay} />
                                                </div>

                                            </div>
                                        </div>
                                        
                                        <div class="cont_news_details">
                                            <div class="cont_wrsf">
                                                <div class="col-md-12">

                                                    <div dangerouslySetInnerHTML={{ __html: videos.content }} />


                                                    <div class="link_for_more"><p><b><a href="https://spacenews.com/musk-predicts-next-starship-launch-in-a-couple-months/#:~:text=Musk%20estimated%20SpaceX%20will%20attempt,nearly%20100%25%20within%2012%20months." target="_blank" rel="noopener">For  More  Information</a></b></p>
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
                <section>
                    <EvlonPopUp
                        isOpen={isOpen}
                        onClose={handleCloseModal}
                        videoSrc={popUpUrl}
                    />
                </section>

            </main>

        </Layout>

    )
}

export const query = graphql`
  query($slug: String!) {
    allWpVideos (filter: { slug: { eq: $slug } }) {
        edges {
          node {
            id
            title            
            excerpt
            slug
            date(formatString: "DD MMMM yyyy")
            content
            video {
                videoUrl
              }
            featuredImage {
              node {
                sourceUrl
              }
            }
           
          }
        }
      }
  }`