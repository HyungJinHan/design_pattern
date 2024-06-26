import { IRemovable, RemoveState } from "./Removable";
import Todo from "./Todo";

class TodoList implements IRemovable {
  private todos: Todo[];
  private removeState: RemoveState = RemoveState.IDLE;

  constructor(todos: Todo[] | null = null) {
    if (todos) {
      this.todos = todos;
      return;
    }

    this.todos = [new Todo("테스트")];
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  getTodos() {
    return this.todos.filter(
      (todo) => todo.getRemoveState() !== RemoveState.REMOVE
    );
  }

  add(message: string) {
    this.todos.push(new Todo(message));
  }

  remove(): void {
    if (this.removeState !== RemoveState.REMOVE) {
      this.removeState = RemoveState.REMOVE;
    }
  }

  getRemoveState(): RemoveState {
    return this.removeState;
  }
}

export default TodoList;
