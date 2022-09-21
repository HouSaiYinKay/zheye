<template>
  <div class="container w-50">
    <h5 class="my-4 text-center">新建文章</h5>
    <validate-form @onsubmit="clickCreateArtivle">
      <div class="mb-3">
        <label class="form-label">文章标题</label>
        <validate-input placeholder="请输入文章标题" type="text" ref="inputRef" v-model="titleRef" />
      </div>
      <div>
        <label class="form-label">文章内容</label>
        <Validate-input tag="textArea" type="text" placeholder="请输入内容..." rows="10" v-model="contentRef" />
      </div>
      <template #submit>
        <button type="submit" class="btn btn-primary btn-block btn-large">新建</button>
      </template>
    </validate-form>
  </div>
</template>
<script lang="ts">
  import {
    defineComponent,
    ref
  } from 'vue';
  import ValidateInput, {
    RulesProp
  } from '../views/ValidateInput.vue'
  import ValidateForm from '../views/ValidateForm.vue'
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import { GlobalDataProps} from '../store'
import { PostProps } from '@/testData';
  export default defineComponent({

    components: {
      ValidateForm,
      ValidateInput
    },
    setup() {
      const titleRef = ref('')
      const contentRef = ref('')
      const store = useStore<GlobalDataProps>()
      const router = useRouter()

      const clickCreateArtivle = () => {
        console.log('title',titleRef.value,'content==',contentRef.value)

        const { columnId } = store.state.user
        console.log('idddd',columnId)

        if (columnId) {
          const newPost: PostProps = {
            id: new Date().getTime(),
            title: titleRef.value,
            content: contentRef.value,
            columnId: columnId,
            createAt: new Date().toLocaleDateString()
          }
          store.commit('createPost',newPost)
          router.push({name:'columnDetail',params:{id:columnId}})
        }
      }
      return {
        clickCreateArtivle,
        titleRef,
        contentRef
      }
    }
  })

</script>
<style lang="">

</style>
