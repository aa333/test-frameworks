<script>
  let timeStart = performance.now();
  import '@babel/polyfill';
  import { onMount } from 'svelte';
  import Form from './components/Form';
  import TodoList from './components/TodoList';

  onMount(() => {
    console.log("First render complete, time:", performance.now() - timeStart)
  });
</script>

<div class="container">
  <Form />
  <TodoList />
</div>

<style>
  .container {
    width: 600px;
  }
</style>

