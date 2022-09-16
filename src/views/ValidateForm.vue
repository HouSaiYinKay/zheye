<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btnprimary" >提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent,onUnmounted} from 'vue'
import mitt from 'mitt'
type ValidateFunc = () => boolean
export const emitter = mitt()
export default defineComponent({
  emits : ['onsubmit'],
  name: 'ValidateForm',
  setup(props,context) {

    let funcArr: ValidateFunc[] = []

    const submitForm = () => {
      const result = funcArr.map(func => func()).every(result => result)
      context.emit('onsubmit',result)
    }
  
    const callBack = (func:any) => {
      funcArr.push(func)
    }

    emitter.on('form-item-create',callBack)

    onUnmounted (()=> {
      emitter.off('form-item-create',callBack)
    })
    return {
      submitForm
    }
  },
})
</script>