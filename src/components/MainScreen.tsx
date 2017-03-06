/// <reference path="../interfaces/interfaces.d.ts" />

import * as React from "react";
import { Button } from "./Button";
import { Item } from "./Item";
import { Input } from "./Input";

export class MainScreen extends React.Component<MainProps,{}> {
  constructor(props: MainProps) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
      <Input onChange={this.props.onChange}
        value={this.props.value} />
      <Button message="Add"
        onClick={this.props.add} />
      
      { this.props.delete && 
      <Button message="Delete" 
        onClick= {this.props.delete} />
      }

      { this.props.edit &&
      <Button message="Edit" 
        onClick={this.props.edit} />
      }

      {this.props.done &&
      <Button message="Finished"
        onClick={this.props.done} />
      } 
      <Item value={this.props.valueItem}/>

      </div>
    );
  }
}
