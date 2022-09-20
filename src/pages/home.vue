<template >
  <column-list :list="testData"></column-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList,{ColumnPros} from '../views/ColumnList.vue'
import { testData } from '@/testData'
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