import React from "react"
import { graphql } from "gatsby"
import Layout from "../component/layout"
import Title from "../component/title"
import styles from "./post.module.scss"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className={styles.container}>
        <Title text={post.frontmatter.title}></Title>
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "#fafafa",
            backgroundImage:
              "url(https://source.unsplash.com/960x200/?" +
              post.frontmatter.keywords +
              ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginBottom: "30px",
          }}
        ></div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
      }
    }
  }
`
