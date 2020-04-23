import React from "react"
import styles from "./404.module.scss"
import { Link } from "gatsby"

import Layout from "../component/layout"

export default props => (
  <Layout>
    <div className={styles.content}>
      <h1 className={styles.header}>Page not found</h1>
      <p className={styles.errorMessage}>The page is not found.</p>
      <Link to="/">Home</Link>
    </div>
  </Layout>
)
