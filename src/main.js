import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import reducer from './reducers';

/**
 * 创建一个Redux Store，用来存放本应用中所有的state
 * 注：一个应用中只能有一个Store
 *
 * createStore(reducer, [initState, enhancer])
 *
 * */
const store = createStore(reducer);

/**
 * Provider 组件功能：
 * 1、在原应用组件上包裹一层，使原来整个应用成为Provider的子组件
 * 2、接受Redux的Store作为Props，通过context对象传递给子孙组件的connect
 * */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);