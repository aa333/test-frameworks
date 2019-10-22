<script>
  import { todos, selectedTodos } from './store';
</script>

<div class="todos">
  {#each $todos as item}
    <label
      class="label"
      class:active={$selectedTodos.indexOf(item.name) !== -1}
    >
      <input
        type='checkbox'
        bind:group={$selectedTodos}
        value={item.name}
      />
      {item.name}
    </label>
  {/each}
</div>

<style>
  .todos {
    display: flex;
    flex-direction: column;
    height: 400px;
    overflow: auto;
  }
  .label {
    padding: 5px;
    margin-bottom: 5px;
  }
  .active {
    background-color: orange;
  }
</style>
