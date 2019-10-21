import { Module } from 'vuex';
import * as actions from './actions';
import mutations, { initialState as state, IState } from './mutations';
import { RootState } from '../../../store';

export const form: Module<IState, RootState> = {
  state,
  actions,
  mutations
}

