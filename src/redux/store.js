import { createStore } from 'redux';
const reducer = (state, action) => {
  return state;
};

const initialState = {
  paper: [
    {id: 1, name: 'GC-2', width: 1000, height: 700, grammage: 210},
    {id: 2, name: 'GC-5', width: 300, height: 500, grammage: 180},
    {id: 3, name: 'GC-3', width: 1400, height: 300, grammage: 250},
    {id: 4, name: 'GC-25', width: 800, height: 400, grammage: 350}
  ]
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;