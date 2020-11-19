import React from "react"
import { graphql } from "gatsby"
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MenuBottom from '../components/MenuBottom'
import SEO from "../components/seo"
import innertext from "innertext"
const BlogpostLayout = ({ data }) => {
  console.log("data ", data);
  const post = data.wordpressPost
  return (
    <div>
      <SEO
        title={innertext(post.title)}
        description={innertext(post.excerpt)}
        image={(post.feature_media && post.featured_media.source_url || "") }
        keywords={post.categories.map(res => res.name).join(", ")}
      />
      <Menu enableBackgroundImage={false}/>
      <main>
        <div className="container">
          <div className="row justify-content-md-center">
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    <MenuBottom />
    </div>
  )
}

export default BlogpostLayout

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      content
      title
      featured_media {
        source_url
      }
      categories {
        name
      }
      excerpt
    }
  }
`
