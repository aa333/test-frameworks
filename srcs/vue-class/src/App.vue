<template>
  <div id="app">
    <Form />
    <TodoList />
  </div>
</template>

<script lang="ts">
let timeStart = performance.now();
import { Component, Vue } from 'vue-property-decorator';
import Form from './components/Form';
import TodoList from './components/TodoList';

@Component({
  components: {
    Form,
    TodoList
  },
})
export default class App extends Vue {
  mounted () {
    console.log("First render complete, time:", performance.now() - timeStart);
  }
}
</script>
