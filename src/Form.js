import React from 'react';

function Form(props) {
    console.log(props)
    let minutes = props.obj.minutes;
    let seconds = props.obj.seconds;
    let icon_Click = props.obj.icon_Click;
    let show_Number = props.obj.show_Number;

    return (
        <form  > 
        <div className = "number" >  
             <div>
                 <p className = "text_color small"> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p> 
                 { show_Number == true ?  <input type="number"  name = "minutes" className = "input_taker" placeholder = 'Enter Number' onChange={props.event_handeler} ></input> :             
                  <div>  { minutes === 0 && seconds === 0  ? <h1 className = "text_color">0</h1> : <h1 className = "text_color">Time: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1> } </div>  }
                     <div> <br></br> <br></br><br></br></div>
             </div>
            <div className = "icons">  
                   { icon_Click == true ? <input className = "start_button" type="button" onClick  = {props.start_handeler} /> : 
                   <input className = "pause_button"  type="button"  value = " " onClick  = {props.stop_handeler} />     }           
            <label onSubmit={props.start_handeler}>
             <button className = "restart_button" ></button> </label>       
             <div> <br></br> </div>
           </div>
        </div>
          </form>
     )
 }


export default Form;




