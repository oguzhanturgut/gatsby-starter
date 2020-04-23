import React from "react"
import styles from "./layout.module.scss"

import Header from "../component/header"

export default props => (
  <div className={styles.container}>
    <Header />
    {props.children}
  </div>
)
