/// <reference path="../interfaces/interfaces.d.ts" />

import * as React from "react";

export class Input extends React.Component<IInput, {}> {
  constructor(props: IInput) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event: any) {
    event.persist();
    this.props.onChange(event);
  }

  render() {
    return (
      <input 
       type="text" 
       value={this.props.value}
       onChange={this.onChange}
       name={this.props.name} />
    );
  }
    
}
