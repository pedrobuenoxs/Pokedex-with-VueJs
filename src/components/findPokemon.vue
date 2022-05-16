<template>
  
  <div class='event-card '>
    
    <div class="container">
        <img src="https://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png">   
    <div class="contents1">
        <h2 text-align="center"> Escolha um pokemon! </h2>
            <div class="textalign">
                <input class="status" type="text" placeholder="Qual seu favorito?" v-model="query" />                    
            </div >

        <div >
            <div class="container1" >
                <router-link to="/card">
                <img src="https://www.nicepng.com/png/full/29-295239_free-png-pokeball-png-images-transparent-pokemon-ball.png" >  <!--Imagem pokebola-->
                </router-link>
            </div>
            <div class="contents">
                <button @click="reset">Limpar</button>
            </div>
        </div>

    </div>
    
    </div>

    
</div>

</template>

<script>
    import { ref } from "vue";

    export default {
    name:'findPokemon',
    setup() {

        const query = ref("");
        

        const reset = (evt) => {
            query.value = "";
        };


        return {
            query,
            reset
        };
        },
    };
</script>

<style>
img {
    margin-left: auto;
    margin-right: auto;
    
}
.status {
    text-align:"center"
}

.container img {
    
    
    
    width: 80%;
    padding: 10% 10%;
}
.container1 img {
    
    
    
    width: 45%;
    padding: 10% 10%;
}


html,body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    
}
body > .section {
   min-height: 100%;
}

.contents1 {
    
    margin: 3% 10%
    
}

.contents, .section {
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
}



.textalign {
    text-align: center;
}


.event-card {
  height: 100%;
  text-align: center;
  
  
	background: rgb(85, 0, 0);
	border-radius: 1%;
  color: rgb(255, 255, 255);
  
}
</style>
