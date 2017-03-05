/// <reference path="../interfaces/interfaces.d.ts" />

import * as React from "react";
import { observable } from "mobx";
import DevTools from "mobx-react-devtools";

import { ListModel } from "../models/ListModel";
import { ItemModel } from "../models/ItemModel";

class AppStore implements IAppStore {
  @observable tasksToDo: IListOfItems;
  
  constructor() {
    this.tasksToDo = new ListModel();
  } 

  addItem() {
      
  }
}
