import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../component/layout"
import Title from '../component/title'

export default (props) => (
  <Layout>
    <div>
      <Title text={'Welcome'}/>
      {/*<Title text={props.data.site.siteMetadata.title}/>*/}
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About Me</Link>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dicta
        doloribus et exercitationem iste laboriosam maxime, mollitia neque
        obcaecati odio provident quae, quo, quos saepe temporibus ullam unde ut
        voluptatem?
      </p>

      <div>
        {props.data.allMarkdownRemark.edges.map(({node}) => (
          <article>
            <div>
              <strong>{node.frontmatter.title}</strong>
            </div>
            <div>
              {node.excerpt}
            </div>
          </article>
        ))}
      </div>
    </div>
  </Layout>
)

// export const query = graphql `query{
//   site {
//     siteMetadata{
//       title
//     }
//   }
// }`

export const query = graphql ` query {
  allMarkdownRemark(sort: {fields : [frontmatter___date], order: DESC}) {
  totalCount
  edges {
    node {
      id
      frontmatter {
        title
        image
        date(formatString: "MMMM YYYY")
      }
      excerpt
    }
  }
}
}
`
