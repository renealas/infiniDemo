import React from 'react';
import Navigation from './app/navigations/Navigation';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

//import reducer
import registroReducer from './app/store/reducers/registro';

const rootReducer = combineReducers({
  registro: registroReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>

  );
}

