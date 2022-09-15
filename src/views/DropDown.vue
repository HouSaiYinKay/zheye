<template>
  <div class="dropdown">
    <a href="#" class="btn btn-secondary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" @click="toggleOpen">{{title}}</a>
      <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
      <slot></slot>
      </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref} from 'vue'
export default defineComponent({
  name: 'DropDown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
      const isOpen = ref(false);
      const toggleOpen = () => {
        isOpen.value = !isOpen.value;
      }
      return {
        isOpen,
        toggleOpen
      }
  },
})
</script>