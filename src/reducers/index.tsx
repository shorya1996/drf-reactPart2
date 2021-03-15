import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import loginReducer from './LoginReducer';

const rootReducer = combineReducers({
    loginReducer: loginReducer,
});

export default rootReducer;