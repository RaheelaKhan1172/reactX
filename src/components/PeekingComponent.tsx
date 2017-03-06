// <reference path="../interfaces/interfaces.d.ts" />

import * as React from "react";
import { Button } from "./Button";
import { Item } from "./Item";

export class PeekingComponent extends React.Component<PeekingProps, {}> {
  
  constructor(props: PeekingProps) {
    super(props);
  } 

  render() {
    return (
      <div>
        <Item value={this.props.value} />
        <Button onClick={this.props.onClick}
          message={this.props.message} />
      </div> 
    );
  }
}
