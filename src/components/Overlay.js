// 实现一个简易的蒙层效果，抽象出一个通用的Overlay组件
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Overlay extends Component {
  constructor() {
    super();
    console.log('Overlay constructor');
    this.container = document.createElement('div');
  }

  componentDidMount() {
    document.querySelector('#app').appendChild(this.container);
  }

  componentWillUnmount() {
    console.log('Overlay componentWillUnmount');
    document.querySelector('#app').removeChild(this.container);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="overlay">
        <span className='overlay-close' onClick={this.props.onClose}>&times;</span>
        {this.props.children}
      </div>,
      document.querySelector('#app')
    );
  }
}