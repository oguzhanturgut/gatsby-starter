import React from "react"

import Layout from "../component/layout"
import Title from "../component/title"
import ArticleList from "../component/article-list"

export default () => (
  <Layout>
    <div>
      <Title text={"Welcome"} />
      {/*<Title text={props.data.site.siteMetadata.title}/>*/}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dicta
        doloribus et exercitationem iste laboriosam maxime, mollitia neque
        obcaecati odio provident quae, quo, quos saepe temporibus ullam unde ut
        voluptatem?
      </p>
      <ArticleList />
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
