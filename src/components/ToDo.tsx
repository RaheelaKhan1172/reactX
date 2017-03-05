/// <reference path="../interfaces/interfaces.d.ts" />

import * as React from "react";


import { Button } from "./Button";
import { Input } from "./Input";
import { Item } from "./Item";

export class ToDo extends React.Component<{},ToDoState> {
  
  constructor(props: any) {
    super(props);

    this.state = { task: "", editing: false, peeking:false };

    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDone = this.onDone.bind(this);
    this.donePeeking = this.donePeeking.bind(this);
    this.peek = this.peek.bind(this);
  }

  onAdd() {
    /* display prompt so user can add a new item 
       needs to be a reaction -- ui needs to change */
  }

  onDelete() {
    /* remove first item from array, 
       should cause a reaction -- ui needs to change 
       to display next item in array */
  }

  onEdit() {
    /* should display the item as an input so user can edit it
      if user changes it, replace it's value */
  }

  onDone() {
    /* should remove to do from list, display next item i list, 
      set completed to-do as the value for prev completed */
  }

  onChange(event: any) {
    this.setState( () => ({
      task: event.target.value
    }));

    
  }
  donePeeking() {

  }

  peek() {

  } 

  render() {
    return (
      <div>
      <Button 
       onClick={() => "hi"}
       />
      <Input value="cool"
        onChange={() =>"not"}
        name="test" />

      <Item onEdit= {() => "editing" }
        editing={false}/>
    </div>
    );
  }
  
};  
