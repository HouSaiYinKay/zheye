<template lang="">
  <div>
  <nav class="navbar navbar-dark bg-primary">
  <div class="container-fluid">
  <router-link class="navbar-brand" to='/'>者也</router-link>
  <ul v-if="!user.isLogin" class="list-inline mb-0">
    <li class="list-inline-item">
    <router-link to="/login" class="btn btn-outline-light my-2">登录</router-link>
   </li>
    <li class="list-inline-item">
    <a href="#" class="btn btn-outline-light my-2">注册</a>
    </li>
  </ul>
 <ul v-else class="list-inline mb-0">
 <li class="list-inline-item">
    <drop-down :title="`你好 ${user.name}`">
      <drop-down-item><router-link to="/create" class="dropdown-item">新建文章</router-link></drop-down-item>
      <drop-down-item><a href="#" class="dropdown-item">编辑资料</a></drop-down-item>
      <drop-down-item><a href="#" class="dropdown-item">退出登录</a></drop-down-item>
    </drop-down>
    
  </li>
 </ul>
  </div>
  </nav>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import DropDown from './DropDown.vue';
import DropDownItem from './DropDownItem.vue';
export interface UserProps {
  isLogin:boolean,
  name?:string,
  id?:string
}
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    DropDown,
    DropDownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})

</script>
