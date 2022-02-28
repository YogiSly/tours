import Vue from 'vue'
import VueRouter from 'vue-router'

import MainTours from "../views/MainTours"

import CardTour from "../views/CardTour"

Vue.use(VueRouter)

const routes = [
  { path: '/', component: MainTours },

  { path: '/tour/:id', component: CardTour },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router