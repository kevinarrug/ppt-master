import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Route definitions
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/HomeView.vue'),
    meta: { title: 'PPT Master - Home' }
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('./views/EditorView.vue'),
    meta: { title: 'PPT Master - Editor' }
  },
  {
    path: '/editor/:id',
    name: 'EditorWithId',
    component: () => import('./views/EditorView.vue'),
    meta: { title: 'PPT Master - Editor' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('./views/NotFoundView.vue'),
    meta: { title: 'PPT Master - Not Found' }
  }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Update document title on route change
router.afterEach((to) => {
  const title = to.meta?.title as string
  if (title) {
    document.title = title
  }
})

// Create Pinia store
const pinia = createPinia()

// Create and mount Vue application
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
