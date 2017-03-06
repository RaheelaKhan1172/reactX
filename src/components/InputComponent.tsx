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
      <div> 
        <Input value={this.props.value} 
          onChange={this.props.onChange} />
        <Button onClick={this.props.onSave}
          message="Done" />
        <Button onClick={this.props.onCancel} 
          message="Cancel" />
        { this.props.peek && 
          <Button onClick={this.props.peek}
          message="What's next?" /> 
        }    
      </div>
    );  
  }
}
