<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="currentColumn">
      <div class="col-3 text-center">
        <img :src="currentColumn?.avatar" :alt="currentColumn?.title" class="rounded-circle border border-light w-100 my-3 ">
      </div>
      <div class="col-9 textAlign-left">
        <h4>{{currentColumn?.title}}</h4>
        <p class="text-muted">{{currentColumn?.description}}</p>
      </div>
    </div>
  </div>
  <post-list-view :list="postList"></post-list-view>
</template>
<script lang="ts">
import { defineComponent,computed} from 'vue';
import { useRoute } from 'vue-router';
import { testPosts, ColumnPros,testData} from '@/testData';
import  postListView from './PostList.vue'
import { useStore } from 'vuex';
import { GlobalDataProps } from '../store';
export default defineComponent({
  components: {
    postListView
  },
  setup(props) {
    const route = useRoute()
    const store = useStore<GlobalDataProps>()
    const currentId = +route.params.id
    const currentColumn =  computed(() => store.getters.getColumnById())
    const postList = computed(() => store.getters.getPostsById(currentId))
    const bigger = computed(() => store.getters.biggerColumnsLen)

    return {
      currentColumn,
      postList,
      bigger
    }
  }
})
</script>
<style lang="">
  
</style>