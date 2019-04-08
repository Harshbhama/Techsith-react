import React from "react"
import ReactDOM from "react-dom"

import { Parent } from "./components/parenttochild/Parent"

class App extends React.Component{

  state = {
    title: "Old Title"
  }

  onChange(newtitle){
    this.setState({
      title:newtitle
    })
  }
  render(){
    return(
      <div>
          <Parent
          dosomething = {this.onChange.bind(this,"NEW TITLE")} title = {this.state.title}
          />

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
