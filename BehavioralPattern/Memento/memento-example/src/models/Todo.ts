import { IRemovable, RemoveState } from "./Removable";

class Todo implements IRemovable {
  private removeState: RemoveState;
  private readonly message: string;

  constructor(message: string) {
    this.removeState = RemoveState.IDLE;
    this.message = message;
    this.remove = this.remove.bind(this);
  }

  getMessage() {
    return this.message;
  }

  getRemoveState(): RemoveState {
    return this.removeState;
  }

  remove(): void {
    if (this.removeState !== RemoveState.REMOVE) {
      this.removeState = RemoveState.REMOVE;
    }
  }
}

export default Todo;
