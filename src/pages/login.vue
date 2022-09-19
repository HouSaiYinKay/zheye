<template>
  <div class="container">
    <validate-form @onsubmit="submitForm">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input :rules="emailRules"  v-model="emailRefVal" placeholder="请输入邮箱地址" type="text" ref="inputRef"></validate-input>
        {{emailRefVal}}
      </div>
      <div class="mb-3">
        <label  class="form-label">密码</label>
        <validate-input :rules="passwordRules" placeholder="请输入密码" type="text"></validate-input>
      </div>
      <template #submit>
        <button class="btn btn-danger">submit</button>
      </template>
    </validate-form>
  </div>
</template>
<script lang="ts">

import { defineComponent,ref,reactive } from 'vue';
import ValidateInput, { RulesProp } from '../views/ValidateInput.vue'
import ValidateForm from '../views/ValidateForm.vue'

export default defineComponent ({
  name:'Login',
  component :{
    ValidateForm
    },
  setup(){
    const inputRef = ref()
    const emailRefVal = ref('')
    const emailRules: RulesProp = [
      {type:'required',message: '电子邮箱不能为空'},
      {type:'email',message: '请输入正确的电子邮箱格式'},
      {type:'range',message: '请输入不少于20个字符'},

    ]
    const passwordRules: RulesProp = [
      {type:'required',message: '密码不能为空'},
    ]
    const submitForm = (result:Boolean) => {
      //父组件访问子组件方法 -> 添加 ref
      console.log(inputRef.value.validateinput())
      console.log('12313',result)
    }
    const emailRef = reactive ({
      val: '',
      error: false,
      message: ''
    })
    return {
      emailRef,
      emailRules,
      emailRefVal,
      submitForm,
      inputRef,
      passwordRules
    }
  }
})
</script>