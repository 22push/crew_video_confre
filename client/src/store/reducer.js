import { combineReducers} from 'redux';
import userreducer from './reducers/userreducer'
import loginreducer from './reducers/loginreducer';
import meetingreducer from './reducers/meetingreducer';
const minReducer =  combineReducers({
    user : userreducer,
    login: loginreducer,
    meeting: meetingreducer
});
 export default minReducer;