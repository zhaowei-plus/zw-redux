import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import { sayHello } from 'yage-npm';
import regexpStore  from 'zcy-regexpstore-front';

import App from './components/App';
import reducer from './reducers';

console.log(sayHello());
console.log(regexpStore)

/**
 * 创建一个Redux Store，用来存放本应用中所有的state
 * 注：一个应用中只能有一个Store
 *
 * createStore(reducer, [initState, enhancer])
 *
 * */
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);