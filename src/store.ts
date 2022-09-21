import { createStore } from 'vuex';
import { testData,testPosts,ColumnPros,PostProps } from './testData';

interface UserProps {
  isLogin: boolean;
  name?:string,
  id?: string
}

export interface GlobalDataProps {
  columns: ColumnPros[];
  posts: PostProps[];
  user: UserProps
}
const store = createStore<GlobalDataProps>({
  state:{
    columns: testData,
    posts: testPosts,
    user: {isLogin: false}
  },
  mutations: {
    login(state){
      state.user = {...state.user,isLogin:true,name:'myname'}
    }
  },
  getters: {
   biggerColumnsLen(state) {
    return state.columns.filter(c=>c.id>1).length
   },
   getColumnById: (state) =>(id:number) => {
    return state.columns.find(c => c.id === id)
   },
   getPostsById: (state) =>(pid:number) => {
    return state.posts.filter(p => p.id === pid)
   },
  }
})

export default store