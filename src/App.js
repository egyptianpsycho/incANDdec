import { Component } from "react"
import Home from "./Component/Home/Home"
import Header from "./Component/Header/Header";
class App extends Component{
  state = {
    myName : "Ziad",
    year : "19" ,
    city : "Portsaid"
  }
  render(){
    return (
    <div>
      <Header myName = {this.state.myName} year = {this.state.year} city = {this.state.city} />
      <Home />
    </div>
    ) ;
  }
}

export default App;
