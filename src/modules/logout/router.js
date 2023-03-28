import {
  lazy
} from 'react'
export default {
  path:'/logout',
  name:'Logout',
  hidden: true,
  element: lazy(()=>import('./index')),
  meta:{
    title:'退出'
  }
}