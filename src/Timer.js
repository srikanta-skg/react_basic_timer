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
      this.start_handeler = this.start_handeler.bind(this)
      this.event_handeler = this.event_handeler.bind(this);
      this.stop_handeler = this.stop_handeler.bind(this);
    }

   componentDidMount(){
     console.log("dom has mounted into HTML file")
   }

   event_handeler = (event) => {
        var value = event.target.value
        var min = Math.floor(value / 60);
        var sec = value % 60;
        this.setState({
            [event.target.name]: min
        });
        this.setState({
            seconds: sec
        });
    }

    start_handeler = () => {
      if ( this.state.seconds <= 0.1  &&  this.state.minutes <= 0 ) {
        alert("enter value greater then 1")
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
    stop_handeler = () => {
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
       start_handeler =  { this.start_handeler }
       event_handeler = { this.event_handeler }
       stop_handeler =  { this.stop_handeler }
       />       
        </div>
      )
  }
}

export default Timer;
