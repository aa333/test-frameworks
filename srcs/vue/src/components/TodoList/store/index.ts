import { Module } from 'vuex';
import * as actions from './actions';
import mutations, { initialState as state, IState } from './mutations';
import { RootState } from '../../../store';

export const todo: Module<IState, RootState> = {
  state,
  actions,
  mutations
}

