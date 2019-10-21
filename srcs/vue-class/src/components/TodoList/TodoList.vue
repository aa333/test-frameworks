<template>
  <div :class="$style.todo">
    <TodoItem
      v-for="(item, index) in todo.todos"
      :key="index"
      :index ="index"
      :name="item.name"
      :checked="item.enabled"
      @toggle="handleToggle"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State, Action } from 'vuex-class';

import TodoItem from './TodoItem.vue';
import { IState } from './store/mutations';
import { TodoPayload } from './store/actions';

const namespace: string = 'todo';

@Component({
  components: {
    TodoItem,
  }
})
export default class TodoList extends Vue {
  @State('todo')
  todo!: IState;

  @Action('toggleTodo', { namespace })
  toggleTodo!: (data: TodoPayload) => void;

  handleToggle (data: TodoPayload): void {
    this.toggleTodo(data);
  }
}
</script>

<style lang="scss" module>
  .todo {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    height: 500px;
    overflow: auto;
  }
</style>
