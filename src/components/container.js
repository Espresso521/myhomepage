import React from "react"
import { container } from "../style/container.module.css"

const contain = ({ children }) => {
  console.log("huzer1 " + container)
  return (
    < div className={container} > {children}</div >
  )
}

export default contain