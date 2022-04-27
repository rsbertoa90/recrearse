<template>
<div>
    <v-row class="vh-100" justify="center" align="center" no-gutters>
        <v-col cols="12" lg="7">
                <h1 class="title">
                    <span class="white grey-text">
                        Descubrí y trascendé los nudos de tu historia
                    </span>
                </h1>
                <div class="mt-4">
                    <span class="fs-28 grey-bg bold">
                        Bioneurodesprogramacion.
                    </span>
                    <br>
                    <span class="fs-24 grey-bg">
                        Terapia Complementaria
                    </span>
                </div>
        </v-col>
        <v-col cols="12" lg="5" class="fcc">
            <neurons />
        </v-col>
    </v-row>
    <texts />
    <sendConsult />
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
.title{
    font-size: 56px !important;
    line-height: 60px !important;
    font-weight: 900;
}
</style>