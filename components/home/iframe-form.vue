<template>
    <div id="formContacto" class="mt-4 d-flex flex-column align-items-center justify-content-center">
        <h3>
            Quiero un presupuesto: completa el siguiente formulario
        </h3>
        <span class="phone" v-if="$mq=='lg'">
            O escribinos al <span class="fab fa-whatsapp"></span> 11 2408 5256
        </span>

        <a v-if="$mq!='lg'" href="https://api.whatsapp.com/send?phone=5492920485028&text=Hola!%20te%20escribo%20desde%20la%20pagina%20de%20MoM%20Web" target="_blank" rel="noopener" class="phone">
            O escribinos al <span class="fab fa-whatsapp"></span> 11 2408 5256
        </a>

        
        <div class="iframe-container">
               <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfPOTyGDPT3gA1mHC5y__MbHfk5rVq9mN1VVRcapxIggSi7yw/viewform?embedded=true" :width="iframewidth" :height="iframeheight" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>                
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        iframewidth(){
            return this.$mq == 'lg' ? 640 : 340;
        },
        iframeheight(){
            return this.$mq == 'lg' ? 1023 : 1123;
        }
    }
}
</script>

<style lang="scss" scoped>
h3{
    color:#3A2BB3;
    font-size: 30px;
    font-weight: bold;
    margin-top:50px;
}
.phone{
    color:#3A2BB3;
    font-size: 20px;
}
.iframe-container{
  //  border:1px solid #000;
 //   box-shadow: 3px 3px 3px #6663;
   // width:100%;
   
}
</style>

