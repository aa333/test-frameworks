import { TOGGLE_TODO } from './types';
import { ActionWithPayload } from '../../../store';
import { TodoPayload } from './actions';

export interface ITodoData {
  enabled: boolean;
  name: string;
  id: number;
}

export interface IState {
  todos: ITodoData[];
}

export const initialState = {
  todos: Array(100).fill(null).map((_, i) => ({ enabled: Math.random() > 0.5, name: `Item ${i}`, id: i })),
};

export default {
  [TOGGLE_TODO] (state: IState, { payload }: ActionWithPayload<TodoPayload>) {
    state.todos[payload.index].enabled = payload.value
  },
};
