import React from 'react';
import './App.css';
import Header from './Header';
import Timer from './Timer.js';


class App extends React.Component {
    constructor() {
      super();
      this.state = {
        title: "React timer"
      }
    }
    
  render() {
     
      return (
        <div className = "container" >
           <Header titles ={this.state.title} />
           <Timer />
        </div>
      )
  }
}

export default App;
