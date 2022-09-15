<template>
  <div class="container">
    <global-header :user="currentuser"></global-header>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// import ColumnList from './views/ColumnList.vue'
import ColumnList, { ColumnPros } from './views/ColumnList.vue'
import GlobalHeader, { UserProps } from './views/GlobalHeader.vue'

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
    ColumnList,
    GlobalHeader
  },
  setup () {
    return {
      list: testData,
      currentuser: user
    }
  }
})
</script>
