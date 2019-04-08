import React from "react"

export const Child = (props) => {
  return(
      <div>
        <button onClick = {props.dosomething}>CLICK </button>
         <p> title = {props.title} </p>
      </div>
  )
}
