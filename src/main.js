import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './components/App';
import reducer from './reducers';

import rootSaga from './saga';

// createSagaMiddleware的作用是创建一个redux中间件，并将sagas与Redux store建立链接
const sagaMiddleware = createSagaMiddleware();

/**
 * 创建一个Redux Store，用来存放本应用中所有的state
 * 注：一个应用中只能有一个Store，也只有store才能改变state
 *
 * createStore(reducer, [initState, enhancer])
 *
 * 中间件： -- 在发出action，到reducer函数接受acton之间，执行具有副作用的操作
 * */
const store = createStore(
  reducer,
  // applyMiddleware(thunk), // 表示使用Thunk中间件，之后所有的dispatch都会经过thunk中间件进行处理
  applyMiddleware(sagaMiddleware), // 表示使用saga中间件，之后所有的dispatch都会经过thunk中间件进行处理
);

// 动态执行saga，用于applyMiddleWare阶段之后执行saga。返回一个Task描述对象，并一直执行，监听action
sagaMiddleware.run(rootSaga)

/**
 * Provider 组件功能：
 * 1、在原应用组件上包裹一层，使原来整个应用成为Provider的子组件
 * 2、接受Redux的Store作为Props，通过context对象传递给子孙组件的connect
 * */

// const action = type => store.dispatch({ type });
// action("GET_AGE");

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);