import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const BlogTitle = styled.h3`
    margin-bottom = 20px;
    color: blue;
`
const BlogLink = styled(Link)`
    text-decoration: none;
`


export default ({ data }) => {
    
return (
  <Layout>
    <SEO title="Home" />
    <div>
        <h1>Erwin Buysse's Blog</h1>
        <h4>{data.allMarkdownRemark.totalCount} Post's'</h4>
        {data.allMarkdownRemark.edges.map( ({node}) => (
            <div key={node.id}>
            <BlogLink to= {node.fields.slug}>
              <BlogTitle>
                { node.frontmatter.title} - {node.frontmatter.date}
              </BlogTitle>
            </BlogLink>
              <p>{node.excerpt}</p>
            </div>
        ))
    }
    </div>
  </Layout>
)

}

export const query = graphql`
query {
 allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          date
          description
          title
        }
        fields{
            slug
        }
        excerpt
        html
      }
    }
  }
}
`