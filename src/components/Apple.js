import React, { Component } from 'react';
import { connect } from 'redux';
import FruitList from './FruitList';

import { Header } from '../containers/Header';
import { Footer } from '../containers/Footer';

export default class Apple extends Component {
  onClick = () => {
    console.log('摘苹果')
  }

  render() {
    return (
      <div className="panel panel-default">
        <Header title="苹果" />

        <div className="panel-body">
          <FruitList />
        </div>

        <Footer btnName="摘苹果" onClick={this.onClick} />
      </div>
    );
  }
}