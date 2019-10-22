import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { form } from '../components/Form/store';
import { todo } from '../components/TodoList/store';

Vue.use(Vuex);

export interface RootState {};

export interface Action {
  type: string;
}

export interface ActionWithPayload<T> extends Action {
  payload: T
}

export const state: RootState = {};

const store: StoreOptions<RootState> = {
  modules: {
    form,
    todo
  },
  state
};

export default new Vuex.Store<RootState>(store);
