<template>
  <div class="container">
    <global-header :user="currentuser"></global-header>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent,computed} from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { UserProps } from './views/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './views/ValidateInput.vue'
import ValidateForm from './views/ValidateForm.vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from './store'
const user: UserProps = {
  name: 'testName',
  isLogin: false,
  id: '111'
}
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    ValidateInput,
    ValidateForm
  },
  setup () {

    const store = useStore()
    const currentUser = computed(() => {
     return store.state.user
    })
    return {
      currentuser: currentUser,

    }
  }
})
</script>
