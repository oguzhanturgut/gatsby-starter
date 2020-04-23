import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

export default props => (
  <header className={styles.container}>
    <div className={styles.row}>
      <Link to="/">My Gatsby Blog</Link>
    </div>
    <div className={styles.row}>
      <Link to="/">BLOG</Link>
      <Link to="/about">ARTICLES</Link>
    </div>
  </header>
)
