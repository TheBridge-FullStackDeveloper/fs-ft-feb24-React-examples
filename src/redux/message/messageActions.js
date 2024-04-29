import {WRITE_MESSAGE,DELETE_MESSAGE} from './messageTypes'

export const writeMessage = (message="") =>{
    return {
        type: WRITE_MESSAGE,
        payload: message
    }
}

export const deleteMessage = () =>{
    return {
        type: DELETE_MESSAGE
    }
}