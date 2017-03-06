interface IItem {
  key:string;
  value:string;
  completed:boolean;
}

interface IItemProps {
  value: string; 
}

interface IListOfItems {
  toDo: Array<IItem>;
}

interface IInput {
  value: string;
  name?: string;
  classType?: string;
  onChange: (event: any) => void;
}

interface InputComponentProps extends IInput {
  onCancel: () => void;
  onSave: () => void;
}

interface IButton {
  name?: string;
  message?:string;
  onClick?: () => void;
}

interface PeekingProps {
  value:string;
  message?:string;
  name?:string;
  onClick: () => void;
}

interface MainProps extends IButton, IItemProps, IInput {
  add: () => void;
  edit?: () => void;
  delete?: () => void;
  peek?:() => void;
  valueItem: string;
  done: () => void;
}

interface IToDoModel {
  onAdd: () => void;
  onSave: () => void;
  cancelEdit: () => void;
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
  editItem: () => void;
  tasksToDo: IListOfItems;
  peek: () =>  void;
  onChange: (event: any) => void;
  editing: boolean;
  peeking: boolean;
  task: string;
  doneEditing: () => void;
  cancelEdit: () => void;
  doneOrDelete: () => void;
  getCurrentTask();
}

interface IToDoProps {
  store: IAppStore;
}
