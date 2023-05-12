import React from "react";
import "../stylee.css";
import "../responsive.css"
import { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import { graphql, StaticQuery, Link } from "gatsby";
import ReactFullpage from "@fullpage/react-fullpage";

const About = () => {
	const [isFullpage, setIsFullpage] = useState(true);

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
	const getSection = (data, start, end) => {
		const imageUrls = data && data.wpPage && data.wpPage.homePartnerSection && data.wpPage.homePartnerSection.partner;

		console.log(imageUrls);
		return imageUrls.slice(start, end) || [];

	}
	return (

		<StaticQuery
			// scrollingSpeed={1000}
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
			render={data => (
				<>
					{isFullpage ? (
						<ReactFullpage
							render={({ fullpageApi }) => (
								<Layout>
									<ReactFullpage.Wrapper>
										<main>
											<section className="section">
												<div className="secation01 bhg secn_abouts">
													<div className="container">
														<div className="row">
															<div className="col-md-12">
																<div className="our_main_heading text-center">
																	<div className="bread_cumg" dangerouslySetInnerHTML={{ __html: data.wpPage.about.heading }}>

																	</div>
																</div>
																<div className="img_arrow">
																	<div className="roww_wrap">
																		<a href="#">
																			<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/arrow.svg" />
																		</a>
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
																<div className="col-md-5 colmd5">
																	<div className="kj_bgvcdfs">
																		<div className="image_hfgfss">
																			<source src="assets/image/vg.mp4" />
																		</div>

																		<div className="image_gnbdd">
																			{/* <div className="roghrtf">
																				<div className="ljkf">
																					<img src={anmimg1} />
																				</div>
																				<div className="ghbd">
																					<img src={anmimg2} />
																					 <img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/star.svg">
																				</div>
																				<div className="ghbd1">
																					<img src={anmimg3} />
																					<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/bloone.svg"/>
																				</div>
																				<div className="ghbd2">
																					<img src={anmimg4} />
																					<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/eardff.svg"/>
																				</div>
																				<div className="ghbd3">
																					<img src={anmimg5} />
																					<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/wav.svg"/>
																				</div>
																				<div className="ghbd4">
																					<img src={anmimg6} />
																					<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/moon.svg"/>
																				</div>
																			</div> */}
																			<div className="image_hfgfss">
																				<video
																					autoplay="true"
																					muted=""
																					loop=""
																					playsinline=""
																					preload="metadata"
																					className="video"
																					id="myVideo"
																				>
																					<source src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/earth-65103.mp4" />
																				</video>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="col-md-7">
																	<div className="our_about_wrap" dangerouslySetInnerHTML={{ __html: data.wpPage.about.description }}>



																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</section>
											<section className="section">
												<div className="secatioonteam bhg">
													<div className="jhg_tfrd paddint_top padding_Btnh">
														<div className="container">
															<div className="row">
																<div className="col-md-12">
																	<div className="main_heading">
																		<div className="our_about_wrap text-start" dangerouslySetInnerHTML={{ __html: data.wpPage.about.teamheading }}>

																		</div>
																	</div>
																</div>
															</div>
															<div className="our_vba">
																<div className="row mar_yes">
																	{data &&
																		data.wpPage &&
																		data.wpPage.about &&
																		data.wpPage.about.ourteam.map((prop, i) => {
																			return (
																				<>
																					<div className="col-xsm-12 col-sm-6 col-md-6 col-lg-3 teambx">
																						<div className="image_tema">
																							<div className="f1_container">
																								<div className="f1_card shadow">
																									<div className="front face">

																										<img src={prop.image.sourceUrl} />
																									</div>
																									<div className="back face center">

																										<img src={prop.colourImage.sourceUrl} />
																									</div>
																								</div>
																							</div>
																							<div className="details">
																								<div className="left_part_name">
																									<h4>{prop.name}</h4>
																									<span>
																										{prop.designation}
																									</span>
																								</div>
																								<div className="right_part_name">
																									<Link to=
																										{prop.linkedinurl}
																										target="_blank"
																									>
																										<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/linkdin.png" />
																									</Link>
																								</div>
																							</div>
																						</div>
																					</div>
																				</>
																			)
																		})}



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


										</main>
									</ReactFullpage.Wrapper>

								</Layout>
							)}
						/>
					) : (
						<Layout>
							<main>
								<section className="section">
									<div className="secation01 bhg secn_abouts">
										<div className="container">
											<div className="row">
												<div className="col-md-12">
													<div className="our_main_heading text-center">
														<div className="bread_cumg" dangerouslySetInnerHTML={{ __html: data.wpPage.about.heading }}>

														</div>
													</div>
													<div className="img_arrow">
														<div className="roww_wrap">
															<a href="#">
																<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/arrow.svg" />
															</a>
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
													<div className="col-md-5 colmd5">
														<div className="kj_bgvcdfs">
															<div className="image_hfgfss">
																<source src="assets/image/vg.mp4" />
															</div>

															<div className="image_gnbdd">

																<div className="image_hfgfss">
																	<video
																		autoplay="true"
																		muted=""
																		loop=""
																		playsinline=""
																		preload="metadata"
																		className="video"
																		id="myVideo"
																	>
																		<source src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/earth-65103.mp4" />
																	</video>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-7">
														<div className="our_about_wrap" dangerouslySetInnerHTML={{ __html: data.wpPage.about.description }}>



														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
								<section className="section">
									<div className="secatioonteam bhg">
										<div className="jhg_tfrd paddint_top padding_Btnh">
											<div className="container">
												<div className="row">
													<div className="col-md-12">
														<div className="main_heading">
															<div className="our_about_wrap text-start" dangerouslySetInnerHTML={{ __html: data.wpPage.about.teamheading }}>

															</div>
														</div>
													</div>
												</div>
												<div className="our_vba">
													<div className="row mar_yes">
														{data &&
															data.wpPage &&
															data.wpPage.about &&
															data.wpPage.about.ourteam.map((prop, i) => {
																return (
																	<>
																		<div className="col-xsm-12 col-sm-6 col-md-6 col-lg-3 teambx">
																			<div className="image_tema">
																				<div className="f1_container">
																					<div className="f1_card shadow">
																						<div className="front face">

																							<img src={prop.image.sourceUrl} />
																						</div>
																						<div className="back face center">

																							<img src={prop.colourImage.sourceUrl} />
																						</div>
																					</div>
																				</div>
																				<div className="details">
																					<div className="left_part_name">
																						<h4>{prop.name}</h4>
																						<span>
																							{prop.designation}
																						</span>
																					</div>
																					<div className="right_part_name">
																						<Link to=
																							{prop.linkedinurl}
																							target="_blank"
																						>
																							<img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/linkdin.png" />
																						</Link>
																					</div>
																				</div>
																			</div>
																		</div>
																	</>
																)
															})}



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


							</main>
						</Layout>
					)}
				</>


			)}
		/>
	);
};

export default About;