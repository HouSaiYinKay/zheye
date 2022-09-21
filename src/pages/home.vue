<template >
  <column-list :list="listt"></column-list>
</template>
<script lang="ts">
import { defineComponent,computed } from 'vue'
import ColumnList,{ColumnPros} from '../views/ColumnList.vue'
import { testData } from '@/testData'
import {useStore} from 'vuex'
import { GlobalDataProps } from '@/store'
export default defineComponent({
  name:'home',
  components:{
    ColumnList
  },
  setup(props) {

    const store = useStore<GlobalDataProps>()
    const listt = computed(() =>  store.state.columns)
    return {
      listt
    }
  }
})
</script>
<style>
  
</style>