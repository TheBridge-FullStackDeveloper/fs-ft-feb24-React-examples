import {combineReducers} from 'redux';
import counterReducer from './counter/counterReducer';
import messageReducer from './message/messageReducer';

const rootReducer = combineReducers({
    counterR:counterReducer,
    messageR:messageReducer
})

export default rootReducer;