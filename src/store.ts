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
  }
})

export default store