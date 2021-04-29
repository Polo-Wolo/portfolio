import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Hobbies from '../views/Hobbies.vue'
import Education from '../views/Education.vue'
import Contact from '../views/Contact.vue'
import WorkExperiences from '../views/WorkExperiences.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/workexperiences',
    name: 'WorkExperiences',
    component: WorkExperiences
  },
  {
    path: '/hobbies',
    name: 'Hobbies',
    component: Hobbies
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
