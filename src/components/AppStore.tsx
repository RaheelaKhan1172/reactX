/// <reference path="../interfaces/interfaces.d.ts" />

import { observable, computed, action } from "mobx";
import DevTools from "mobx-react-devtools";

import { ListModel } from "../models/ListModel";
import { ItemModel } from "../models/ItemModel";

class AppStore implements IAppStore {
  @observable tasksToDo: IListOfItems;
  @observable editing: boolean;
  @observable peeking: boolean;
  @observable task: string;

     
  constructor() {
    this.tasksToDo = new ListModel();
    this.editing = false;
    this.peeking = false;
    this.task = "";
  }

  @action addItem(text:string) {
    console.log("text",text);
    this.tasksToDo.toDo.push(new ItemModel(text));
    this.task = "";
  }

  @action editItem(event: any) {
    this.editing = true;
  }

  @action peek() {
    this.peeking = !this.peeking;
  }

  @action onChange(event:any) {
    this.task = event.target.value;
  }

  @action doneOrDelete() {
  this.tasksToDo.toDo = this.tasksToDo.toDo.slice(1,this.tasksToDo.toDo.length);
  }

  getCurrentTask() {
    return this.tasksToDo.toDo[0].value;
  } 
}

export const stateStore = new AppStore();
