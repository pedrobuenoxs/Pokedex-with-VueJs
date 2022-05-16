<template>
  <div id="App">  
    
       
    <!--
    
    <PokedexView />  
    -->
      
        <router-view />
        
        
        
        
             
  </div>      


    
    
    

  
  
</template>

<script>
  
  import FindPokemon from "./components/findPokemon.vue"
  import card from "./views/card.vue"
  
  import PokedexView from './components/pokedexView.vue'

  
  

  

  

  export default {
    name: 'App',
    components: {
    card,
    FindPokemon,
    PokedexView
}
  }
</script>


<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


</style>