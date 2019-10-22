<script>
  import {
    time,
    isValid,
    setTime,
    submitTime,
    isRequest
  } from './store';

  const handleChange = (event) => {
    setTime(event.target.value);
  }

  const handleSubmit = () => {
    submitTime($time);
  }

  let isLoad;

  const unsubscribe = isRequest.subscribe(value => {
		isLoad = value;
	});

  $: buttonText = isLoad ? 'Proccesing' : 'Submit';

</script>

<div class="form">
  <input
    class:error={!$isValid}
    value={$time}
    on:input={handleChange}
  />

  {#if !$isValid}
    <span class="error-message">Invalid time format</span>
  {/if}

  <button
    disabled={isLoad}
    on:click={handleSubmit}
  >
    {buttonText}
  </button>
</div>

<style>
  .form {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 5px;
    outline: none;
  }

  button {
    margin-top: 20px;
    padding: 10px 0;
  }

  .error {
    border: 2px solid red;
  }

  .error-message {
    color: red;
  }
</style>
