<template >
  <column-list :list="testData"></column-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList,{ColumnPros} from '../views/ColumnList.vue'

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
  name:'home',
  components:{
    ColumnList
  },
  setup(props) {
    return {
      testData
    }
  }
})
</script>
<style>
  
</style>