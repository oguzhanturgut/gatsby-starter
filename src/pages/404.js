import React from "react"
import styles from "./404.module.scss"

export default props => (
  <div className={styles.content}>
    <h1 className={styles.header}>Page not found</h1>
    <p className={styles.errorMessage}>The page is not found.</p>
  </div>
)
