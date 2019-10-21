import { writable } from 'svelte/store';

export interface ITodoData {
  name: string
}

export let todos = writable<ITodoData[]>(Array(100).fill(null).map((_, i) => ({ name: `Item ${i}` })));

export let selectedTodos = writable<string[]>(
  Array(100)
    .fill(null)
    .map((_, i) => {
      if (Math.random() > 0.5) {
        return `Item ${i}`
      } else {
        return ''
      }
    }
  )
);
