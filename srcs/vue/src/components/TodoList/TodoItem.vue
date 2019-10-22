<template>
  <div :class="[$style.todoItem, { [$style.checked]: checked }]">
      <input
        :id="name"
        type="checkbox"
        :checked="checked"
        @input="handleInput"
      />
      <label :for="name">{{name}}</label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['name', 'checked', 'index'],
  methods: {
    handleInput () {
      this.$emit('toggle', this.index, !this.checked);
    }
  }
});
</script>

<style lang="scss" module>
  .todoItem {
    display: flex;
    padding: 5px;
    margin: 5px 0;
  }
  .checked {
    background-color: orange;
  }
</style>
