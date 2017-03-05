/// <reference path="../interfaces/interfaces.d.ts" />

export class ListModel implements IListOfItems {
  public toDo: Array<IItem>;

  constructor() {
    this.toDo = [];
  }
}
