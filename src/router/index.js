import { projectAuth } from '@/firebase/config'
import ChatroomVue from '@/views/Chatroom.vue'
import WelcomeVue from '@/views/Welcome.vue'
import { createRouter, createWebHistory } from 'vue-router'


const requireAuth = (to,from,next) =>{
  let user = projectAuth.currentUser
  if(!user){
    next({name:'Welcome'})
  }else{
    next()
  }
}

const requireNoAuth = (to,from,next) =>{
  let user = projectAuth.currentUser
  if(user){
    next({name:'Chatroom'})
  }else{
    next()
  }
}
const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomeVue,
    beforeEnter:requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: ChatroomVue,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
