import React from "react"
import { Child } from "./Child"

export const Parent = (props) => {
  return(
    <div>
      <Child {...props} dosomething = {props.changeworld} />
      <Child {...props} dosomething = {props.sameworld} />
    </div>
  )
}
