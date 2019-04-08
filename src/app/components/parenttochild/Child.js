import React from "react"

export const Child = (props) => {
  return(
      <div>
        <button onClick = {props.dosomething}>{props.title} </button>
         

      </div>
  )
}
