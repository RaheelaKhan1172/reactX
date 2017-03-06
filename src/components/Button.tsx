/// <reference path="../interfaces/interfaces.d.ts" /> 

import * as React from "react";


export class Button extends React.Component<IButton, {}> {
  constructor(props: IButton) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick();
  }

  render() {
    return (
      <button 
       className={this.props.className ? this.props.className + " btn" : "btn" }  
       name={this.props.name} 
       onClick={this.onClick}>
         {this.props.message}
      </button>
    );
  } 
}
