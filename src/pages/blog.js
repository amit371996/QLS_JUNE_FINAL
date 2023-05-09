
import React from 'react';
import "../stylee.css";
import "../responsive.css"
import { Link, StaticQuery, graphql } from "gatsby"
import Layout from '../components/layout/layout';
import { useState } from 'react';
export default function Blog() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    return (
        <StaticQuery
            query={graphql`
            query {
                allWpPost(sort: {date: DESC}) {
					edges {
					  node {
						excerpt
						id
						slug
						title
                        news {
                            archiveImage {
                              sourceUrl
                            }
                          }
						featuredImage {
						  node {
							link
							sourceUrl
							date(formatString: "DD MMMM yyyy")
							author {
							  node {
								name
							  }
							}
						  }
						}
						link
					  }
					}
				  }
              }
            `}
            render={(data) => {
                const blogs = data.allWpPost.edges.map((edge) => edge.node);
                const totalItems = blogs.length;
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
                        <div>
                            <section class="section new00">
                                <div class="secation01 bhg secn_abouts">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="our_main_heading text-center">
                                                    <div class="bread_cumg">
                                                        <h1 class="text-center"><strong>Our  </strong> Blogs</h1>
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
                            <section class="sectionnewss">
                                <div class="whats_new_page">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="list_tab_wg">
                                                    <ul>
                                                        <li><Link to='/event'>Events</Link></li>
                                                        <li><Link to='/whats_new'>News</Link></li>
                                                        <li class="active_cl"><Link to='/blog'>Blogs</Link></li>
                                                        <li><Link to='/partner'>Partner News</Link></li>
                                                        <li><Link to='/videos'>Videos</Link></li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list_mnbv">
                                    <div class="container">
                                        <div class="row">
                                            {blogs.slice(startIndex, endIndex).map((blog) => {
                                                return(
                                                    <div class="col-md-6" key={blog.id} >
                                                    <div class="our_lkhb">
                                                        <div class="imh_bc">
                                                            <div class="inner_ghv">
                                                                <a href="https://www.qlspace.com.au/from-space-to-the-ground-how-satellite-monitoring-helps-predict-and-respond-to-natural-disasters/">

                                                                    <img src={blog.news.archiveImage.sourceUrl} />
                                                                </a>
                                                            </div>
                                                            <div class="date_wrad_news">
                                                                <div class="date_rn">
                                                                    <div class="date_icon"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/icon-_calendar-outline_.png" /></span>{blog.featuredImage.node.date}</div>
                                                                </div>
                                                                <div class="oir_amin">
                                                                    <div class="uhgbv"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/userfv.png" /></span>{blog.featuredImage.node.author && blog.featuredImage.node.author.node && blog.featuredImage.node.author.node.name}</div>
                                                                </div>
                                                            </div>
                                                            <div class="heading_nmb">
                                                                <h4>
                                                                    <Link to={"/blog/" + blog.slug}>
                                                                        {blog.title}  </Link>
                                                                </h4>


                                                                <div class="next_page">
                                                                    <Link to={"/blog/" + blog.slug} className="read-more"> Read more
                                                                        <span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/arrowright.png" /></span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                                
                                            })}
                                            
                                            <ul className="pagination">{renderPageNumbers()}</ul>

                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </Layout>
                )
            }}
        />

    )
}


