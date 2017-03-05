/// <reference path="../interfaces/interfaces.d.ts" />

import * as React from "react";
import { observable } from "mobx";

export class Item extends React.Component<IItemProps, {}> {
  constructor(props: IItemProps) {
    super(props);

    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(event: any) {
    this.props.onEdit(event);
  }

  render() {
    return (
      <div> 
      { this.props.editing ? 
        <input type="text" /> : 
        "List" 
      }  
      </div>
    );
  }
}
