import * as ActionType from './ActionType'

const initialState = {
    count: 0,
    Logging: true,
    minutes : 0,
    seconds : 0,
    onClick: true,
  };

  export default function productReducer(state = initialState, action) {
    switch(action.type) {
      case ActionType.PLAY:
      if(state.seconds > 0){
        return{
        ...state,
        seconds : state.seconds -1
      }
    }
    if(state.seconds ===0){
           if( state.minutes ===0){
             return{
               ...state,
             }
           }
      return {
        ...state,
        minutes: state.minutes - 1,
              seconds: 59
      }
    }
       break
      case ActionType.PAUSE:
        return {
          ...state,
          count : state.count
        };
  
      case ActionType.RESET:
        return {
          ...state,
          count : 0,
          minutes : 0,
          seconds : 0
      };
      case ActionType.ADD:
        return{
        ...state,
        minutes : action.min,
        seconds : action.sec
        };

        case ActionType.CLICKED:
          return{
            ...state,
            onClick : false,
            Logging : false
          };
        case ActionType.SHOW_NUMBER :
          return{
            ...state,
            onClick : true,
            Logging : true
          }
      default:
        return state;
    }
  }