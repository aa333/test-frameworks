<template>
  <div :class="$style.todo">
    <TodoItem
      v-for="(item, index) in list"
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
import TodoItem from './TodoItem.vue';
import { mapState, mapActions } from 'vuex';

export default Vue.extend({
  components: {
    TodoItem
  },
  computed: mapState({
    list: ({ todo }): string => todo.todos,
  }),
  methods: {
    handleToggle (index: number, value: boolean): void {
      this.toggleTodo({ value, index });
    },
    ...mapActions(['toggleTodo'])
  }
});
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
