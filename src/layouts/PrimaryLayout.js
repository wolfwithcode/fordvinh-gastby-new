import React from "react"
// import Header from "../components/Header"
// import Footer from "../components/Footer"
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MenuBottom from '../components/MenuBottom'
import SEO from "../components/seo"

const PrimaryLayout = props => (
  <div>
    <SEO title="Tin tức xe Ford Vinh"/>
    <Menu enableBackgroundImage={false}/>
    <main>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className={props.column}>{props.children}</div>
        </div>
      </div>
    </main>
    {/* <Footer /> */}
    <MenuBottom />
  </div>
)

export default PrimaryLayout
