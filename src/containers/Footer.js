import React, { Component } from 'react';

export const Footer = (props) => {
  return (
    <div className="panel-footer text-center">
      <button type="button" className="btn btn-primary" onClick={props.onClick}>
        {props.btnName}
      </button>
    </div>
  );
}