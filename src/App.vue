<template>
  <div class="container">
    <global-header :user="currentuser"></global-header>
    <!-- <ColumnList :list="list"></ColumnList> -->
    <form>
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input :rules="emailRules"></validate-input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">邮箱地址</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="emailRef.val" @blur="validateEmail">
        <div class="form-text" v-if="emailRef.error">{{emailRef.message}}</div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent,reactive } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// import ColumnList from './views/ColumnList.vue'
import ColumnList, { ColumnPros } from './views/ColumnList.vue'
import GlobalHeader, { UserProps } from './views/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './views/ValidateInput.vue'
const user: UserProps = {
  name: 'testName',
  isLogin: true,
  id: '111'
}

const testData: ColumnPros[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1的专栏',
    avatar:
      'https://img2.baidu.com/it/u=3744598050,4191464688&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2的专栏',
    avatar:
      'https://img2.baidu.com/it/u=3744598050,4191464688&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
  },
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1的专栏',
    avatar:
    'https://img2.baidu.com/it/u=3744598050,4191464688&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2的专栏',
    avatar:
      'https://img2.baidu.com/it/u=3744598050,4191464688&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup () {

    const emailRules: RulesProp = [
      {type:'required',message: '电子邮箱不能为空'},
      {type:'email',message: '请输入正确的电子邮箱格式'},
      {type:'range',message: '请输入不少于20个字符'},

    ];

    const emailRef = reactive ({
      val: '',
      error: false,
      message: ''
    })
    const validateEmail = () => {
      if (emailRef.val.trim()=== '') {
        emailRef.error = true;
        emailRef.message = 'can not be empty!!'
      } else {
        
      }
    }
    return {
      list: testData,
      currentuser: user,
      emailRef,
      validateEmail,
      emailRules
    }
  }
})
</script>
