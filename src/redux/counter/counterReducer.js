import {INCREMENT,DECREMENT,RESET} from './counterTypes';

const INITIAL_STATE = {
    counter: 0
}

export default function counterApp(state = INITIAL_STATE, action){
    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                counter: state.counter - 1
            }
        case RESET:
            return {
                counter: 0
            }
        default:
            return state
    }
  }