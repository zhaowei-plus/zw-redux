import React, { Component } from 'react';

export const Header = (props) => {
  return (
    <div className="panel-heading  text-center">
      <span>{props.title}</span>
      <span className="badge">{props.count}</span>
    </div>
  );
}