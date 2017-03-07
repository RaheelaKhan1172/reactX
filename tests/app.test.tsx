

import { stateStore } from "../src/components/AppStore";

var returnVal:string = stateStore.getCurrentTask();
test("should add items correctly", () => {
  expect(stateStore.tasksToDo.toDo.length).toBe(0);

  stateStore.addItem("test");
  stateStore.addItem("ing");
  stateStore.addItem("!");

  expect(stateStore.tasksToDo.toDo.length).toBe(3);

  var returnStr:string = stateStore.getCurrentTask();
  console.log("b4", stateStore.tasksToDo.toDo);
  expect(returnStr).toBe("test");

  stateStore.doneOrDelete();
  console.log(stateStore.tasksToDo.toDo);
  expect(stateStore.tasksToDo.toDo.length).toBe(2);

  returnStr = stateStore.getCurrentTask();
  expect(returnStr).toBe("ing");
  
});

test("should not crash if queue is empty", () => {
  expect(returnVal).toBe("No tasks to do");
});

var peek:boolean = stateStore.peeking;

test("should peek correctly", () => {
  expect(peek).toBe(false);
  stateStore.peek();
  peek = stateStore.peeking;
  expect(peek).toBe(true);  
  stateStore.peek();
  peek = stateStore.peeking;
  expect(peek).toBe(false);
});


var editing:boolean = stateStore.editing;

test("should edit correctly", () => {
  expect(editing).toBe(false);  
  stateStore.editItem();
  editing = stateStore.editing;
  expect(editing).toBe(true);  
  stateStore.editItem();
  stateStore.doneEditing();
  editing = stateStore.editing;
  expect(editing).toBe(false);  
  
  stateStore.editItem();
  
  editing = stateStore.editing;
 
 
  expect(editing).toBe(true);
  stateStore.peek();

  peek = stateStore.peeking;

  expect(peek).toBe(true);

  expect(editing).toBe(true);

  stateStore.peek();

  peek = stateStore.peeking;
  
  expect(peek).toBe(false);

  expect(editing).toBe(true);

  stateStore.cancelEdit();

  editing = stateStore.editing;

  expect(editing).toBe(false); 
  
});

describe("test", () => {
  it("should add stuff", () => {
    expect(2 + 2).toBe(4);
  });
});
