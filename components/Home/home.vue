<template>
<div>
    <!-- <background/> -->
    <v-row class="vh-100" justify="center" align="center" no-gutters>
        <v-col cols="12" lg="7">
                <h1 class="title">
                    Descubrí y trascendé los nudos de tu historia
                </h1>
                <span>
                    Bioneurodesprogramacion. <br>
                    Terapia Complementaria
                </span>
        </v-col>
        <v-col cols="12" lg="5" class="fcc">
            <neurons />
        </v-col>
    </v-row>
    <texts />
</div>
</template>

<script>
import background from './background.vue'
import texts from './home-texts.vue'
import neurons from './neurons.vue'
export default {
    components: {
        background,
        texts,
        neurons
    },
    data(){return{
        
    }},
    computed: {
        
    },
    methods: {
        
    },
    mounted(){
    }
}
</script>

<style lang="scss" scoped>
.title{
    font-size: 56px !important;
    line-height: 60px !important;
    font-weight: 900;
}
</style>