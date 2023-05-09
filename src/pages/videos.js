
import React, { useState, useEffect } from 'react';
import "../stylee.css";
import "../responsive.css"
import { Link, StaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import EvlonPopUp from '../components/Allvideospopup/Evlonpopup/evlonpopup';
import Layout from '../components/layout/layout';

export default function Videos() {
 
    library.add(faEnvelope, faPlay)
    const [isOpen, setIsOpen] = useState(false);
    const [popUpUrl, setPopUpUrl] = useState('');
    const handleOpenModal = (url) => {
        setIsOpen(true);
        setPopUpUrl(url);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    return (
        <StaticQuery
            query={graphql`
        query {
            allWpVideos(sort: {date: DESC}) {
                edges {
                  node {
                    excerpt
                    content
                    title
                    slug
                    news {
                        archiveImage {
                          sourceUrl
                        }
                      }
                    video {
                      videoUrl
                    }
                    featuredImage {
                      node {
                        date(formatString: "DD MMMM yyyy")
                        sourceUrl
                        author {
                          node {
                            name
                          }
                        }
                      }
                    }
                  }
                }
              }
        }
      `}
            render={(data) => {
                const videos = data.allWpVideos.edges.map((edge) => edge.node);
                const totalItems = videos.length;
                const totalPages = Math.ceil(totalItems / itemsPerPage);
                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;

                const handlePageClick = (pageNumber) => {
                    setCurrentPage(pageNumber);
                }

                const renderPageNumbers = () => {
                    let pageNumbers = [];
                    for (let i = 1; i <= totalPages; i++) {
                        pageNumbers.push(
                            <li key={i}>
                                <a href="#" className={currentPage === i ? 'active' : null} onClick={() => handlePageClick(i)}>{i}</a>
                            </li>
                        );
                    }
                    return pageNumbers;
                }
                return (
                    <Layout>
                        <section class="new00">
                            <div class="secation01 bhg secn_abouts">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="our_main_heading text-center">
                                                <div class="bread_cumg">
                                                    <h1 class="text-center"><strong>Our  </strong>Videos</h1>
                                                    <p>Get the latest updates and helpful information</p>
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
                            <div class="whats_new_page">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="list_tab_wg">
                                                <ul>
                                                    <li ><Link to='/event'>Events</Link></li>
                                                    <li><Link to='/whats_new'>News</Link></li>
                                                    <li><Link to='/blog'>Blogs</Link></li>
                                                    <li><Link to='/partner'>Partner News</Link></li>
                                                    <li class="active_cl"><Link to='/videos'>Videos</Link></li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="list_mnbv">
                                <div class="container">
                                    <div class="row">
                                        {videos.slice(startIndex, endIndex).map((vido) => {
                                            const videourl = vido.video.videoUrl;
                                            return (
                                                <>
                                                    <div class="col-md-6" key={vido.id}>

                                                        <div class="our_lkhb">
                                                            <div class="imh_bc">
                                                                <div class="inner_ghv">
                                                                    <img src={vido.news.archiveImage.sourceUrl} />
                                                                    <div class="video_incon_wrap" id="343" data-videourl={vido.video.videoUrl}>

                                                                        <div class="icon_fgb" onClick={() => handleOpenModal(videourl)} >
                                                                            <FontAwesomeIcon icon={faPlay} />
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div class="date_wrad_news">
                                                                    <div class="date_rn">
                                                                        <div class="date_icon"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/icon-_calendar-outline_.png" /></span>{vido.featuredImage.node.date}</div>
                                                                    </div>
                                                                    <div class="oir_amin">
                                                                        <div class="uhgbv"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/userfv.png" /></span>{vido.featuredImage.node.author && vido.featuredImage.node.author.node && vido.featuredImage.node.author.node.name}</div>
                                                                    </div>
                                                                </div>
                                                                <div class="heading_nmb">
                                                                    <h4>
                                                                        <Link to={"/video/" + vido.slug}>
                                                                            {vido.title}  </Link>
                                                                    </h4>
                                                                    <div class="next_page">
                                                                        <Link to={"/video/" + vido.slug} className="read-more"> Read more
                                                                            <span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/arrowright.png" /></span>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}

                                        <ul className="pagination">{renderPageNumbers()}</ul>

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


                    </Layout>
                )
            }}
        />

    )
}


