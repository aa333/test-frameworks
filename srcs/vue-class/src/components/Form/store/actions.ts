import { ActionContext } from 'vuex';
import { IState } from './mutations';
import { SET_TIME, SET_VALIDATION, SUBMIT_TIME, SET_REQUEST } from './types';
import { getHoursMinutesSecondsFromString, delay } from '../../../../../shared/initialState';

import { RootState } from '../../../store';

export const setTime = (
  { commit, dispatch }: ActionContext<IState, RootState>,
  time: string
): void => {
  commit({
    type: SET_TIME,
    payload: time
  })
}

export const setValidation = (
  { commit }: ActionContext<IState, RootState>,
  value: boolean
): void => {
  commit({
    type: SET_VALIDATION,
    payload: value
  })
}

export const sumbitTime = async(
  { commit, dispatch, state }: ActionContext<IState, RootState>
): Promise<void> => {
  const isValid = getHoursMinutesSecondsFromString(state.time);
  dispatch('setValidation', !!isValid);

  if (isValid) {
    dispatch('toggleRequest');

    await delay(2000);

    dispatch('toggleRequest');

    commit({
      type: SUBMIT_TIME,
      payload: state.time
    })
  }
}

export const toggleRequest = ({ commit }: ActionContext<IState, RootState>): void => {
  commit({ type: SET_REQUEST })
}
