<template>
  <div class="container">
    <global-header :user="currentuser"></global-header>
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
import { defineComponent,reactive,ref} from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// import ColumnList from './views/ColumnList.vue'
import ColumnList, { ColumnPros } from './views/ColumnList.vue'
import GlobalHeader, { UserProps } from './views/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './views/ValidateInput.vue'
import ValidateForm from './views/ValidateForm.vue'
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
    ValidateInput,
    ValidateForm
  },
  setup () {
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
      list: testData,
      currentuser: user,
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
