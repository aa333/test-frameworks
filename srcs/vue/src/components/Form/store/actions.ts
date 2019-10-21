import { ActionContext } from 'vuex';
import { IState } from './mutations';
import { SET_TIME, SET_VALIDATION, SUBMIT_TIME, SET_REQUEST } from './types';
import { getHoursMinutesSecondsFromString, delay } from '../../../../../shared/initialState';

import { RootState } from '../../../store';

export const setTime = (
  { commit, dispatch }: ActionContext<IState, RootState>,
  time: string
): void => {
  console.log('time', time)
  const isValid = getHoursMinutesSecondsFromString(time);

  commit({
    type: SET_TIME,
    payload: time
  })

  dispatch('setValidation', !!isValid);
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

export const submitTime = async(
  { commit, dispatch, state }: ActionContext<IState, RootState>
): Promise<void> => {
  console.log('state', state)
  if (state.isValid) {
    dispatch('setRequest');

    await delay(2000);

    dispatch('setRequest');

    commit({
      type: SUBMIT_TIME,
      payload: state.time
    })
  }
}

export const setRequest = ({ commit }: ActionContext<IState, RootState>): void => {
  commit({ type: SET_REQUEST })
}
