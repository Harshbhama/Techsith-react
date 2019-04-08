import React from "react"
import ReactDOM from "react-dom"

import { User } from "./components/User"
import UniqueId from 'react-html-id'

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

    constructor(){
      super()
      UniqueId.enableUniqueIds(this)
      this.state = {
          users: [
            {id:this.nextUniqueId(), name: 'abc', age: 20},
            {id:this.nextUniqueId(), name: 'cde', age: 21},
            {id:this.nextUniqueId(), name: 'efg', age: 22}
          ]
      }
      console.log(this.state)

    }



    onDelete(index, e){
      const users = Object.assign([], this.state.users)
      users.splice(index, 1)
      this.setState({
        users:users
      })
    }

    changeUserName(id, e){
      const index = this.state.users.findIndex((user) => {
          return user.id === id
      })

      const user = Object.assign({}, this.state.users[index])

      user.name = e.target.value

      const users = Object.assign([], this.state.users)

      users[index] = user
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
                    return(<User
                      key = {user.id}
                      age = {user.age}
                      delevent = {this.onDelete.bind(this, index)}
                      changeEvent = {this.changeUserName.bind(this, user.id)}
                      >{user.name}
                      </User>)
                  })
                }
              </ul>
          </div>

    )
  }
}

























ReactDOM.render(<App />, document.getElementById("root"))
