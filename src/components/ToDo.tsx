/// <reference path="../interfaces/interfaces.d.ts" />

import * as React from "react";

import { Button } from "./Button";
import { Input } from "./Input";
import { Item } from "./Item";
import { observer } from "mobx-react";
import DevTools from 'mobx-react-devtools';

@observer
export class ToDo extends React.Component<IToDoProps,{}> {
  
  constructor(props: any) {
    super(props);

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
    this.props.store.addItem(this.props.store.task);
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
    this.props.store.onChange(event); 
  }

  donePeeking() {
    this.props.store.peek();
  }

  peek() {
    this.props.store.peek();
  } 

  render() {
    let dataToRender: any = null; //change it so that certain views will only render based off of result
    console.log("happened");  
    return (
      <div>
        {this.props.store.peeking && 
          this.props.store.tasksToDo.toDo[1] && 
          this.props.store.tasksToDo.toDo[1].value && 
          <Button 
            onClick={this.donePeeking}
            message="Done "/>
        }

        { this.props.store.peeking && 
          !this.props.store.tasksToDo.toDo[1] && 
          "Nothing else to do!" &&
          <Button
            onClick={this.donePeeking}
            message="Done" />
        } 

        { this.props.store.tasksToDo.toDo.length > 0 && 
          this.props.store.tasksToDo.toDo[0].value }
          { this.props.store.tasksToDo.toDo.length === 0 &&
            "Add some tasks!" }
        <Input 
          onChange={this.onChange} 
          name="task" 
          value={this.props.store.task} />
        <Button 
         onClick={this.onAdd}
         message="Add Task" />

        <Button 
          onClick={this.peek}
          message="Peek next" />
      <DevTools />
      </div>
    /*  <div>
      <Button 
       onClick={() => "hi"}
       />
      <Input value="cool"
        onChange={() =>"not"}
        name="test" />

      <Item onEdit= {() => "editing" }
        editing={false}/>
    </div> */
    );
  }
  
};  
