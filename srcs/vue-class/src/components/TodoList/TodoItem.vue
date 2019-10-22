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
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator'

@Component
export default class TodoItem extends Vue {
  @Prop()
  name!: string;
  @Prop()
  checked!: boolean;
  @Prop()
  index!: number;

  @Emit('toggle')
  handleInput () {
    return { index: this.index, value: !this.checked }
  }
}
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
