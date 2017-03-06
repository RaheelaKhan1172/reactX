/// <reference path="../interfaces/interfaces.d.ts" />

import * as React from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export class EditingComponent extends React.Component<InputComponentProps, {}> {
  constructor(props: InputComponentProps) {
    super(props);
    
  }

  render() {
    return (
      <div className="item">
        <div className="inp"> 
        <Input value={this.props.value} 
          onChange={this.props.onChange} />
        <Button className="add"
          onClick={this.props.onSave}
          message="+" />
        </div>
      <div className="btn_group"> 
        <Button onClick={this.props.onCancel} 
          message="Cancel" />
        { this.props.peek && 
          <Button onClick={this.props.peek}
          message="What's next?" /> 
        }    
      </div>
      </div>
    );  
  }
}
