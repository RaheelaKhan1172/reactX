/// <reference path="../interfaces/interfaces.d.ts" />

export class ItemModel implements IItem {
  public key : string;
  public value : string;
  public completed : boolean;

  constructor(value_:string) {
    this.key = (Math.floor(Math.random()) * 100 * 2 + 1).toString();
    this.value = value_;
    this.completed = false;
  }
}
