import { ActionContext } from 'vuex';
import { IState } from './mutations';
import { TOGGLE_TODO } from './types';

import { RootState } from '../../../store';

export interface Payload {
  index: number;
  value: boolean;
}

export const toggleTodo = (
  { commit }: ActionContext<IState, RootState>,
  payload: Payload
): void => {
  commit({
    type: TOGGLE_TODO,
    payload
  })
}
