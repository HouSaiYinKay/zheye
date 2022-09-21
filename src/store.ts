import { createStore } from 'vuex';
import { testData,testPosts,ColumnPros,PostProps } from './testData';

interface UserProps {
  isLogin: boolean;
  name?:string,
  id?: string;
  columnId: number
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
    user: {isLogin: true,name:'testname',columnId:1}
  },
  mutations: {
    login(state){
      state.user = {...state.user,isLogin:true,name:'myname'}
    },
    createPost (state,newPost) {
      state.posts.push(newPost)
      console.log(newPost)
    }
  },
  getters: {
   biggerColumnsLen(state) {
    return state.columns.filter(c=>c.id>1).length
   },
   getColumnById: (state) =>(id:number) => {
    return state.columns.find(c => c.id === id)
   },
   getPostsBycId: (state) =>(pid:number) => {
    return state.posts.filter(p => p.columnId === pid)
   },
  }
})

export default store