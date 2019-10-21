<template>
  <div id="app">
    <Form />
    <TodoList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Form from './components/Form';
import TodoList from './components/TodoList';

@Component({
  components: {
    Form,
    TodoList
  },
})
export default class App extends Vue {}
</script>
