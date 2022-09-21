
//专栏prop
export interface ColumnPros {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

//专栏假数据
export const testData: ColumnPros[] = [
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

//post prop

export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createAt: string;
  columnId: number
}

//post props 假数据

export const testPosts :PostProps[] = [
  {
    id:1,
    title: '这是第零篇文章',
    content: 'this is the first post from England',
    image: 'https://img2.baidu.com/it/u=3744598050,4191464688&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
    createAt: '2022年09月20日',
    columnId: 1
  },
  {
    id:1,
    title: '这是第一篇文章',
    content: 'this is the first post from England',
    image: 'https://img2.baidu.com/it/u=3744598050,4191464688&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
    createAt: '2022年09月20日',
    columnId: 1
  },
  {
    id:1,
    title: '这是第二篇文章',
    content: 'this is the first post from England',
    image: 'https://img2.baidu.com/it/u=3744598050,4191464688&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
    createAt: '2022年09月20日',
    columnId: 1
  },
  {
    id:1,
    title: '这是第三篇文章',
    content: 'this is the first post from England',
    image: 'https://img2.baidu.com/it/u=3744598050,4191464688&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
    createAt: '2022年09月20日',
    columnId: 1
  },
  {
    id:1,
    title: '这是第四篇文章',
    content: 'this is the first post from England',
    image: 'https://img2.baidu.com/it/u=3744598050,4191464688&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
    createAt: '2022年09月20日',
    columnId: 1
  },
]
