import { writable } from 'svelte/store';

export let time = writable<string>('1111');

export let submitedTime = writable<string>('');

export let isValid = writable<boolean>(true);

export let isRequest = writable<boolean>(false);
