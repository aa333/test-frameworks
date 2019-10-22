import { ActionContext } from 'vuex';
import { IState } from './mutations';
import { TOGGLE_TODO } from './types';

import { RootState } from '../../../store';

export interface TodoPayload {
  index: number;
  value: boolean;
}

export const toggleTodo = (
  { commit }: ActionContext<IState, RootState>,
  payload: TodoPayload
): void => {
  commit({
    type: TOGGLE_TODO,
    payload
  })
}
