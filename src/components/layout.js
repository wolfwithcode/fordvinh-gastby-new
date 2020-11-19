/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import Banner from "../components/Banner"
import Menu from "../components/Menu"
import MenuBottom from '../components/MenuBottom'
// import Footer from "../components/Footer"

import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div className="col-md-8 offset-md-2" style={{paddingLeft:'0px', paddingRight:'0px'}}>
      <Menu enableBackgroundImage={true}/>
      {/* <Banner/> */}
      </div>
      <div>
        <main>{children}</main>        
      </div>
      <MenuBottom />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
