<template>
  <div :class="$style.form">
    <input
      :class="[$style.input, { [$style.inputError]: !form.isValid }]"
      :value="form.time"
      @input="handleChange"
    />

    <span
      v-if="!form.isValid"
      :class="$style.errorMessage"
    >
      Invalid time format
    </span>

    <button
      :class="$style.button"
      :disabled="form.isRequestLoad"
      @click="sumbitTime"
    >
      {{buttonText}}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import { IState } from './store/mutations';

const namespace: string = 'form';

@Component
export default class Form extends Vue {
  @State('form')
  form!: IState;

  @Action('setTime', { namespace })
  setTime!: (time: string) => void;

  @Action('sumbitTime', { namespace })
  sumbitTime!: (time: string) => void;

  get buttonText (): string {
    return this.form.isRequestLoad ? 'Processing' : 'Submit';
  }

  handleChange(event): void {
    this.setTime(event.target.value)
  }
}
</script>

<style lang="scss" module>
  .form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
  }
  .button {
    margin-top: 10px;
    padding: 5px;
  }
  .input {
    padding: 5px;
    outline: none;
    border: 2px solid #666666;
  }
  .errorMessage {
    color: red;
    align-self: flex-start;
    margin-top: 5px;
  }
  .inputError {
    border-color: red;
  }
</style>
