import { WRITE_MESSAGE, DELETE_MESSAGE } from './messageTypes';

const INITIAL_STATE = {
    message: "--"
}

export default function messageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case WRITE_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                message: INITIAL_STATE.message
            }
        default:
            return state
    }
}