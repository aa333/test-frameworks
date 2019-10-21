<template>
  <div :class="$style.form">
    <input
      :class="[$style.input, { [$style.inputError]: !isValid }]"
      :value="time"
      @input="handleChange"
    />

    <span
      v-if="!isValid"
      :class="$style.errorMessage"
    >
      Invalid time format
    </span>

    <button
      :class="$style.button"
      :disabled="isRequestLoad"
      @click="submitTime"
    >
      {{buttonText}}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';

export default Vue.extend({
  computed: mapState({
    time: ({ form }): string => form.time,
    isValid: ({ form }): boolean => form.isValid,
    isRequestLoad: ({ form }): boolean => form.isRequestLoad,

    buttonText (): string {
      return this.isRequestLoad ? 'Processing' : 'Submit'
    },
  }),
  methods: {
    handleChange (event) {
      console.log('this', this.$store);
      this.setTime(event.target.value)
    },
    ...mapActions(['setTime', 'submitTime'])
  }
});
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
