<template >
  <div class="validate-input-container pb-3">
    <input  class="form-control" 
      :class="{'is-invalid': inputRef.error}" 
      v-model="inputRef.val"
      @blur="validateinput"
      v-bind:="$attrs"
      >
    <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType,reactive,onMounted} from "vue";
import { emitter } from "./ValidateForm.vue";
const emailreg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
interface RuleProp {
  type:'required' | 'email'|'range';
  message: string;
}

export type RulesProp = RuleProp[];

export default defineComponent({
  name:'ValidateInput',
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue:String
  },
  inheritAttrs: false,
  setup(props,context) {
    const inputRef = reactive ({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    const validateinput = () => {
      if (props.rules) {
        const allPassed = props.rules.every (rule =>{
          let passed = true;
          inputRef.message = rule.message;
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim()!= '');
              break;
            case 'email':
              passed = emailreg.test(inputRef.val);
              break;
            default:      
              break;
          }
          return passed;
        })
        inputRef.error = !allPassed
        return allPassed;
      }else {
        return true
      }
    } 
    onMounted(() => {
      emitter.emit('form-item-create',validateinput)
    } )
    return {
      inputRef,
      validateinput,
    }
  }
})
</script>