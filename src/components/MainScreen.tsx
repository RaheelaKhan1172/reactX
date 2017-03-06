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
    return (
      <div>
      <div className="inp">
      <Input onChange={this.props.onChange}
        value={this.props.value} />
      <Button className="add"
        message="+"
        onClick={this.props.add} />
      </div>
     
      <div className="item">
        <div className="task_main">        
       <Item value={this.props.valueItem}/>

        { this.props.done &&
          <Button className="finish"
          message="Finished"
          onClick={this.props.done} />
        }
        </div>
        <div className="Mt(10px) btn_group"> 
        { this.props.peek &&
          <Button className="next"
          message="What's next?"
          onClick={this.props.peek} />
        }
        
        { this.props.delete && 
        <Button className=""
          message="Delete" 
          onClick= {this.props.delete} />
        }

        { this.props.edit &&
          <Button className=""
          message="Edit" 
          onClick={this.props.edit} />
        }
      </div>

      </div>
      </div>
    );
  }
}
