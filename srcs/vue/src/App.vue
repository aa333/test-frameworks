<template>
  <div id="app">
    <Form />
    <TodoList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Form from './components/Form';
import TodoList from './components/TodoList';

export default Vue.extend({
  name: 'app',
  components: {
    Form,
    TodoList
  }
});
</script>
