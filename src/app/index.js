import React from "react"
import ReactDOM from "react-dom"

import { User } from "./components/User"

// import { Parent } from "./components/parenttochild/Parent"
//
// class App extends React.Component{
//
//   state = {
//     title: "Old Title"
//   }
//
//   onChange(newtitle){
//     this.setState({
//       title:newtitle
//     })
//   }
//   render(){
//     return(
//       <div>
//           <Parent
//           changeworld = {this.onChange.bind(this,"Change world")} title = {this.state.title}
//           sameworld = {this.onChange.bind(this, "Same world")} title = {this.state.title}
//           />
//
//       </div>
//     )
//   }
// }
class App extends React.Component{

    state = {
        users: [
          {name: 'abc', age: 20},
          {name: 'cde', age: 21},
          {name: 'efg', age: 22}
        ]
    }

    onDelete(index, e){
      const users = Object.assign([], this.state.users)
      users.splice(index, 1)
      this.setState({
        users:users
      })
    }
  render(){
    return(

          <div>
              <ul>
                {
                  this.state.users.map((user, index) => {
                    return(<User age = {user.age}
                      delevent = {this.onDelete.bind(this, index)}
                      >{user.name}</User>)
                  })
                }
              </ul>
          </div>

    )
  }
}

























ReactDOM.render(<App />, document.getElementById("root"))
