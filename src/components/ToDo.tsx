/// <reference path="../interfaces/interfaces.d.ts" />

import * as React from "react";

import { Button } from "./Button";
import { Input } from "./Input";
import { Item } from "./Item";
import { PeekingComponent } from "./PeekingComponent";
import { EditingComponent } from "./InputComponent";
import { MainScreen } from "./MainScreen";

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
    this.onSave = this.onSave.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  
  onSave() {
    this.props.store.doneEditing();
  }
 
  cancelEdit() {
    this.props.store.cancelEdit();
  }
   
  onAdd() {
    /* display prompt so user can add a new item 
       needs to be a reaction -- ui needs to change */
    if (this.props.store.task) {
      this.props.store.addItem(this.props.store.task);
    }
  }

  onDelete() {
    this.props.store.doneOrDelete();
    /* remove first item from array, 
       should cause a reaction -- ui needs to change 
       to display next item in array */
  }

  onEdit() {
    this.props.store.editItem();
    /* should display the item as an input so user can edit it
      if user changes it, replace it's value */
  }

  onDone() {
    this.props.store.doneOrDelete();
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
    let dataToRender:any = null; //change it so that certain views will only render based off of result
     
    if (this.props.store.peeking) {
      dataToRender = (this.props.store.tasksToDo.toDo[1]  ? 
                      <PeekingComponent value={this.props.store.tasksToDo.toDo[1].value} onClick={this.props.store.peek} message="Done" /> :
                      <PeekingComponent value="Nothing else to do" onClick={this.donePeeking} message="Done" />
                      );
    } else if (this.props.store.editing) {
      dataToRender = <EditingComponent value={this.props.store.task} onChange={this.onChange} onCancel={this.cancelEdit} peek={this.peek} onSave={this.onSave} />
    } else {
      if (this.props.store.tasksToDo.toDo[0]) {
        dataToRender = <MainScreen onChange={this.onChange} value={this.props.store.task} done={this.onDone} add={this.onAdd} delete={this.onDelete} edit={this.onEdit} valueItem={this.props.store.tasksToDo.toDo[0].value} /> 
      } else {
        dataToRender = <MainScreen onChange={this.onChange} value={this.props.store.task} add={this.onAdd} done={null} delete={null} edit={null} valueItem="No tasks to do! Add something" />
      }
    } 
    
    console.log(dataToRender,this.props.store.tasksToDo);
   
    return (
      <div>
      { dataToRender }
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
