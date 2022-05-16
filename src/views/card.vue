<template>     
    <div class="testComponent">
        <h1>Olá treinador</h1>      
        
        
        
        
            <div>
                Nome: {{ listaDePokemons.name }} <br>
                Peso: {{ listaDePokemons.id }} Kg
                Tipo: {{ listaDePokemons.type}} <br>
                {{ listaDePokemons.sprite }}
            </div>
         
            
                
        
    </div>
   
</template>

<script>
    
    import api from '../services/config'
    

    

    export default ({
        name: "listarPokemons",
        data(){
            return {
                listaDePokemons: {}
            }
        },
        created() {
            this.getPokemons();
        },
        methods: {
            getPokemons(){
                api
                    .get("http://localhost:8081/admin/poke/?nome=charmander")
                    .then((res) => {
                        this.listaDePokemons = res.data;
                        console.log(res)
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },

        },
    
})


</script>
