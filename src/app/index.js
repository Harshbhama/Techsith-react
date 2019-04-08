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
          changeworld = {this.onChange.bind(this,"Change world")} title = {this.state.title}
          sameworld = {this.onChange.bind(this, "Same world")} title = {this.state.title}
          />

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
