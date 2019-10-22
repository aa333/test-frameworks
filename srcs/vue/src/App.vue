<template>
  <div id="app">
    <Form />
    <TodoList />
  </div>
</template>

<script lang="ts">
let timeStart = performance.now();
import Vue from 'vue';
import Form from './components/Form';
import TodoList from './components/TodoList';

export default Vue.extend({
  name: 'app',
  components: {
    Form,
    TodoList
  },
  mounted: function () {
    console.log("First render complete, time:", performance.now() - timeStart);
  }
});
</script>
