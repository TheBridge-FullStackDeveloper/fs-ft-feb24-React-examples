import {combineReducers} from 'redux';
import counterReducer from './counter/counterReducer';
import messageReducer from './message/messageReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    counterR:counterReducer,
    messageR:messageReducer,
    userR:userReducer

})

export default rootReducer;