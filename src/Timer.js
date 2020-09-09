import React from 'react';
import Form from './Form.js';

class Timer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        minutes: 0,
        seconds: 0,
        title: "React timer",
        icon_Click: true,
        show_Number: true,
      }
      this.myChangeHandler = this.myChangeHandler.bind(this)
      this.myChangeHandler2 = this.myChangeHandler2.bind(this);
      this.myChangeHandler3 = this.myChangeHandler3.bind(this);
    }

    componentWillUnmount() {
      clearInterval(this.myInterval)
    }

    myChangeHandler2 = (event) => {
        var value = event.target.value
        var min = Math.floor(value / 60);
        var sec = value % 60;
        console.log(event.target.value)
        console.log("i am value :", value)
        this.setState({
            [event.target.name]: min
        });
        this.setState({
            seconds: sec
        });
    }

    myChangeHandler = () => {

      if (this.state.seconds <= 0  ) {
        alert("Enter value greater then 1")
        return;
      }
      this.setState({
        icon_Click: false
      })
      this.setState({
        show_Number: false
      })

      this.myInterval = setInterval(() => {
        const {
          seconds,
          minutes
        } = this.state
        if (seconds > 0) {
          this.setState(({
            seconds
          }) => ({
            seconds: seconds - 1
          }))
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(this.myInterval)
          } else {
            this.setState(({
              minutes
            }) => ({
              minutes: minutes - 1,
              seconds: 59
            }))
          }
        }
      }, 1000)
    }
    componentDidUpdate() {
      console.log("updated")
    }
    myChangeHandler3 = () => {
      clearInterval(this.myInterval)
      this.setState({
        icon_Click: true
      })
      this.setState({
        show_Number: true
      })
    }

  render() {
     
      return (
        <div className = "container" >
       <Form obj ={this.state} 
       myChangeHandler =  { this.myChangeHandler }
       myChangeHandler2 = { this.myChangeHandler2 }
       myChangeHandler3 =  { this.myChangeHandler3 }
       />       
            </div>
      )
  }
}

export default Timer;
