import { observable, action } from 'mobx';
import { ITodoData } from '../../../../../shared/initialState';

export interface TodoInterface {
  list: ITodoData[];
  selectTodo: (checked: boolean, index: number) => void;
}

export class TodoStore implements TodoInterface {
  @observable
  list =  Array(100).fill(null).map((_, i) => ({ enabled: Math.random() > 0.5, name: `Item ${i}` }))

  @action
  selectTodo (checked: boolean, index: number): void {
    this.list[index].enabled = checked;
  }
}
