import { SET_TIME, SET_VALIDATION, SET_REQUEST, SUBMIT_TIME } from './types';
import { ActionWithPayload } from '../../../store';

export interface ITodoData {
  enabled: boolean;
  name: string;
  id: number;
}

export interface IState {
  time: string;
  sumbmitedTime: string;
  isRequestLoad: boolean;
  isValid: boolean;
}

export const initialState = {
  time: '',
  sumbmitedTime: '',
  isRequestLoad: false,
  isValid: true,
};

export default {
  [SET_TIME] (state: IState, { payload }: ActionWithPayload<string>) {
    state.time = payload
  },
  [SET_VALIDATION] (state: IState, { payload }: ActionWithPayload<boolean>) {
    state.isValid = payload
  },
  [SUBMIT_TIME] (state: IState, { payload }: ActionWithPayload<string>) {
    state.time = '',
    state.sumbmitedTime = payload
  },
  [SET_REQUEST] (state: IState) {
    state.isRequestLoad = !state.isRequestLoad;
  }
};
