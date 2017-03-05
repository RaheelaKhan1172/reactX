interface IItem {
  key:string;
  value:string;
  completed:boolean;
}

interface IItemProps {
  editing: boolean;
  onEdit: (event: any) => void;
}

interface IListOfItems {
  toDo: Array<IItem>;
}

interface IInput {
  value: string;
  name: string;
  classType?: string;
  onChange: (event: any) => void;
}

interface IButton {
  name?: string;
  message?:string;
  onClick: () => void;
}

interface IToDoModel {
  onAdd: () => void;
  onSave: () => void;
  onEdit: (event: any) => void;
  onDone: (event: any) => void;
  onDelete: (event: any) => void;
  onChange: (event: any) => void;
  peek: () => void;
  donePeeking: () => void;
}

interface ToDoState {
  task: string;
  editing: boolean;
  peeking: boolean;
}

interface IAppStore {
  addItem:(text:string) => void;
  editItem: (event: any) => void;
  tasksToDo: IListOfItems;
  peek: () =>  void;
  onChange: (event: any) => void;
  editing: boolean;
  peeking: boolean;
  task: string;
  doneOrDelete: () => void;
  getCurrentTask();
}

interface IToDoProps {
  store: IAppStore;
}
