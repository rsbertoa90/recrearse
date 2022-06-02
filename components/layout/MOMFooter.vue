<template>
<div class="mb-4">
    <v-divider></v-divider>
   <v-btn link depressed plain  href="https://momwebdigital.com" target="_blank" class="vw100 text-center white--text bold d-flex align-center justify-center mt-8">
        <span>
            PAGINA CREADA POR M<v-icon>mdi-heart</v-icon>M Web <br v-if="$mq!='lg'"> - Servicios Digitales -
        </span> 
   </v-btn>
</div>
</template>

<style lang="scss" scoped>
ul li{
    font-size: 0.7rem;
}
.yellowBG{
    background: #FFF159 0% 0% no-repeat padding-box;
    height: 50px;
}
@media(min-width: 900px){
    .footer-row{
        margin: 0px -7.5%;
    }
}
@media(max-width: 600px){
    .yellowBG{
        height: 50px;
    }
}
a:hover{
    color:white;
}
</style>

