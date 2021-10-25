import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import paises from '../reducer/reducer';


export const store = createStore(
  paises, 
  compose( applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (args) => args, ),
 );