<template lang="">
  <div>
  <nav class="navbar navbar-dark bg-primary">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">者也</a>
  <ul v-if="!user.isLogin" class="list-inline mb-0">
    <li class="list-inline-item">
    <a href="#" class="btn btn-outline-light my-2">登录</a>
   </li>
    <li class="list-inline-item">
    <a href="#" class="btn btn-outline-light my-2">注册</a>
    </li>
  </ul>
 <ul v-else class="list-inline mb-0">
 <li class="list-inline-item">
    <drop-down :title="`你好 ${user.name}}`"></drop-down>
  </li>
 </ul>
  </div>
  </nav>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import DropDown from './DropDown.vue';
export interface UserProps {
  isLogin:boolean,
  name?:string,
  id?:string
}
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    DropDown
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})

</script>
