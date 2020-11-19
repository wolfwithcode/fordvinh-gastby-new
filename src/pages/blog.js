import React from "react"
import Link from "gatsby-link"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { Container } from "react-bootstrap"
const BlogPage = ({ data }) => {
    console.log( 'BlogPage data',data);
return (
    <PrimaryLayout column="col-xs-6">
      <Container>
      <h1>Bảng tin</h1>
      </Container>
      
    {data.allWordpressPost.nodes.map((node, index) => (
      <Post
        key={'post-'+index}
        alt={node.featured_media && node.featured_media.slug || ""}
        image={node.featured_media && node.featured_media.source_url || ""}
        title={node.title}
        excerpt={node.excerpt}
        readMore={node.slug}
      />
    ))}    

  </PrimaryLayout>
)}

export default BlogPage


export const query = graphql`
  {
  allWordpressPost{
    nodes {
      slug
      title
      excerpt
      featured_media {
        source_url
        slug
      }
    }
  }
}
`