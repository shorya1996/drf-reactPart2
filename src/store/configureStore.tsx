import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

// import logger from 'redux-logger';
import rootReducer from '../reducers';
declare const window: any;
export default function configureStore(initialState) {
    const finalCreateStore = compose<any>(
        applyMiddleware(promise, thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);

    const store = finalCreateStore(rootReducer, initialState);
    return store;
}
