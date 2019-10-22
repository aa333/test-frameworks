import { Module } from 'vuex';
import * as actions from './actions';
import mutations, { initialState as state, IState } from './mutations';
import { RootState } from '../../../store';

const namespaced: boolean = true;

export const form: Module<IState, RootState> = {
  namespaced,
  state,
  actions,
  mutations
}

