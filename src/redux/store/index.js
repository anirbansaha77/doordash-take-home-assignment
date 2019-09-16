import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import Reducers from '../reducers';


const middleware = [thunk];
const enhancers = [];
const reducer = combineReducers({
  ...Reducers,
});

// const persistConfig = {
//   key: 'root',
//   storage,
// }
const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
enhancers.push(devToolsExtension());

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);


// const persistedReducer = persistReducer(persistConfig, reducer)


const store = createStore(reducer, {}, composedEnhancers);
export default store;
export const persistor = persistStore(store);
