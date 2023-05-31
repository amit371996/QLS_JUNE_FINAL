import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout/layout"
import PrivateRoute from "../components/privateRout/privateRoute"
import Home from "."
import About from "./about_us"
import Solution from "./solutions"
import Whatsnew from "./whats_new"
import Partner from "./partner"
import Blog from "./blog"

import Event from "./event"
import Videos from "./videos"
import VideoPopup from "../components/Allvideospopup/Evlonpopup/evlonpopup"
import Privacy_Policy from "./privacy_policy"
// import Tab2 from "./tab2"

const App = () => (
  <Layout>
    <Router basepath="/app">
      <PrivateRoute path="/" component={Home} />
      <PrivateRoute path="/about_us" component={About} />
      <PrivateRoute path="/solutions" component={Solution} />
      <PrivateRoute path="/whats_new" component={Whatsnew} />
      <PrivateRoute path="/partner" component={Partner} />
      <PrivateRoute path="/blog" component={Blog} />
      <PrivateRoute path="/event" component={Event} />
      <PrivateRoute path="/videos" component={Videos} />
      <PrivateRoute path="/videospopup" component={VideoPopup} />
      <PrivateRoute path="/privacy_policy" component={Privacy_Policy} />
      {/* <PrivateRoute path="/tab2" component={Tab2} /> */}
    </Router>
  </Layout>
)

export default App
