<template>
<div>
    <v-row class="vh-100" justify="center" align="center"  no-gutters>
        <v-col cols="12" lg="7" class="fc mt-14 mt-lg-0">
                <h1 class="title">
                    <span class="first-text">
                        Descubrí y trascendé los nudos de tu historia
                    </span>
                </h1>
                <div class="mt-4">
                    <span class="fs-lg-28 fs-sm-18 blue-bg bold">
                        Bioneurodesprogramacion.
                    </span>
                    <br>
                    <span class="fs-lg-24 fs-sm- blue-bg">
                        Terapia Complementaria
                    </span>
                </div>
        </v-col>
        <v-col cols="12" lg="5" class="fcc mt-6 mt-lg-0">
            <neurons />
        </v-col>
        <v-col cols="12" lg="5" class="fccc mt-6 mt-lg-0" v-if="$mq!='lg'">
            <span class="first-bold">SABER MÁS</span>
            <v-icon x-large color="first">mdi-chevron-down</v-icon>
        </v-col>
    </v-row>
    <texts />
    <sendConsult class="mt-8" />
</div>
</template>

<script>
import sendConsult from './send-consult.vue'
import texts from './home-texts.vue'
import neurons from './neurons.vue'
export default {
    components: {
        texts,
        neurons,
        sendConsult,
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
@media (min-width:660px) {
    .title{
        font-size: 56px !important;
        line-height: 60px !important;
        font-weight: 900;
    }
    
}
@media (max-width:660px) {
    .title{
        font-size: 32px !important;
        font-weight: 900;
    }
    
}
</style>