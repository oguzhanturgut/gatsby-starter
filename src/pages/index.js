import React from "react"
import { Link } from "gatsby"

import Layout from "../component/layout"

export default () => (
  <Layout>
    <div>
      <h1>INDEX PAGE</h1>
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About Me</Link>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dicta
        doloribus et exercitationem iste laboriosam maxime, mollitia neque
        obcaecati odio provident quae, quo, quos saepe temporibus ullam unde ut
        voluptatem?
      </p>
    </div>
  </Layout>
)
