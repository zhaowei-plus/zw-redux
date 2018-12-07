import React, { Component } from 'react';

export const Header = (props) => {
  return (
    <div className="panel-heading  text-center">
      {props.title}
    </div>
  );
}