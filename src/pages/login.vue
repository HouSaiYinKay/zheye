<template>
  <div class="container">
    <h5 class="my-4 text-center">登录到者也</h5>
    <validate-form @onsubmit="clickLogin">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
          :rules="emailRules"
          v-model="emailRefVal"
          placeholder="请输入邮箱地址"
          type="text"
          ref="inputRef"
        />
      </div>
      <div>
        <label class="form-label">密码</label>
        <Validate-input
          type="password"
          placeholder="请输入密码"
          :rules="passwordRules"
        />
      </div>
      <template #submit>
        <button type="submit" class="btn btn-primary btn-block btn-large">登录</button>
      </template>
    </validate-form>
  </div>
</template>
<script lang="ts">

import { defineComponent,ref,reactive } from 'vue';
import ValidateInput, { RulesProp } from '../views/ValidateInput.vue'
import ValidateForm from '../views/ValidateForm.vue'
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'App',
  components :{
    ValidateInput,
    ValidateForm
  },
  setup(){
    const router = useRouter()
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
    const clickLogin = (result:Boolean) => {
      //父组件访问子组件方法 -> 添加 ref
      console.log(inputRef.value.validateinput())
      if (result) {
        router.push({name:'columnDetail',params:{id:'1111'}})
      }
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
      clickLogin,
      inputRef,
      passwordRules
    }
  }
})
</script>