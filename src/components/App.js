import React, { Component } from 'react';
import Apple from './Apple';
import Orange from './Orange';


/* 姓名，年龄 */

export default class App extends Component {
  onClick = () => {
    console.log('摘水果');
  }

  render() {
    return (
      <div className="panel panel-default">


        <div className="panel-body">
          <div className="container">
            <div className="row">

              <div className="col-md-6">
                <Apple />
              </div>

              <div className="col-md-6">
                <Orange />
              </div>

            </div>
          </div>
        </div>

      </div>
    );
  }
}