import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactIndex from '../views/ContactIndex.vue'
import ContactDetails from '../views/ContactDetails.vue'
import ContactEdit from '../views/ContactEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactIndex
    },
    {
      path: '/contact/:id',
      name: 'ContactDetails',
      component: ContactDetails
    },
    {
      path: '/contact/edit/:id?',
      name: 'contactEdit',
      component: ContactEdit
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
