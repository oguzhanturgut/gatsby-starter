const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  // called once per each node when created
  if (node.internal.type === "MarkdownRemark") {
    // console.log(`Processing a node with type of ${node.internal.type}`)
    const { createNodeField } = actions
    const slug = createFilePath({ node, getNode, basePath: "markdown" })
    // console.log(slug)
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// Create post pages programmatically
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/post.js"),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
