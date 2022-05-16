<template>
    
        <header>
            <Nav1 /> 
            
        </header>

        <main>
            
            <Forms />
            
            
            
        </main>

        <footer>
            

        </footer>
       
        
        

    

    

</template>

<script>
    import { ref } from "vue";
    
    import Forms from "./forms.vue";
    import Nav1 from "./nav.vue";

    export default {
    name: "findPokemon",
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
    components: { Forms, Nav1 }
};

    
</script>

<style scoped>




header{
    
    background-color: rgb(185, 17, 17);
    height: 12vh;
}
main{
    
    background-color: rgb(185, 17, 17);
    height: 75vh;
}
footer{
    
    background-color: rgb(185, 17, 17);
    height: 13vh;
}





</style>
