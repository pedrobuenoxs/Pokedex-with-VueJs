import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import card from '../views/card.vue'
import findPokemon from '../components/findPokemon.vue'
import pokedexView from '../components/pokedexView.vue'
import forms from '../components/forms.vue';

const routes = [
  {
    path: '/card',
    name: 'card',
    component:card    
  },
  {
    path:'/',
    name:'home',
    component:pokedexView
  },
  {
    path:'/teste',
    name:'teste',
    component:forms
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
  
})

export default router
