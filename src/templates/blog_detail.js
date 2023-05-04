import React from "react"

//import Layout from "../components/layout"
import { Link, graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import "../stylee.css"
import "../responsive.css"
export default ({ data }) => {

  const news = data.allWpPost.edges[0].node



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
                      <h1 class="text-center"><strong>Blog </strong> details</h1>
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
          <div class="section_nb">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="news_details">
                    <div class="date_wrap">
                      <p>{news.date}</p>
                    </div>
                    <div class="heading_news">
                      <h1>{news.title}</h1>
                    </div>
                    <div class="news_details_image">
                      <img src={news.featuredImage.node.sourceUrl} />
                    </div>
                    <div class="cont_news_details">
                      <div class="cont_wrsf">
                        <div class="col-md-12">

                          <div dangerouslySetInnerHTML={{ __html: news.content }} />


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
      </main>

    </Layout>

  )
}

export const query = graphql`
  query($slug: String!) {
    allWpPost (filter: { slug: { eq: $slug } }) {
        edges {
          node {
            id
            title            
            excerpt
            slug
            date(formatString: "DD MMMM yyyy")
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
           
          }
        }
      }
  }`