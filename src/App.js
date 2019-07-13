import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import Autocomplete from './components/autocomplete/Autocomplete';
import logo from './logo.svg';
import 'normalize.css';
import './App.css';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Autocomplete />
      </Provider>
      
    );
  }
}

export default App;
