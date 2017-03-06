/// <reference path="../interfaces/interfaces.d.ts" />

import * as React from "react";
import { observable } from "mobx";

export class Item extends React.Component<IItemProps, {}> {
  constructor(props: IItemProps) {
    super(props);

  }

  render() {
    console.log(this.props.value, "in item render");
    return (
      <div> 
        { this.props.value }
      </div>
    );
  }
}
