import React from "react"

export const User = (props) =>{
  return(
    <li>
    <span>name: {props.children} age: {props.age} </span>
    <input onChange = {props.changeEvent} value = {props.children} /> 
    <button onClick = {props.delevent}>DELETE</button>

    </li>
  )
}
