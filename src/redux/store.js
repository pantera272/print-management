import { createStore, combineReducers } from 'redux';
import paperReducer from './paperReducer';
import initialState from './initialState';

const subreducers = {
  papers: paperReducer,
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;