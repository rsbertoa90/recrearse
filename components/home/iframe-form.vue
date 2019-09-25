<template>
    <div id="formContacto" class="mt-4 d-flex flex-column align-items-center justify-content-center">
        
        <div class="iframe-container">
               <iframe seamless="seamless" title="Contactate con MoM Web" src="https://docs.google.com/forms/d/e/1FAIpQLSek8-IIJmWty9oFrvRQbcLRiP3X1QsMd2I-xPplDi6sgJmUCg/viewform?embedded=true" :width="iframewidth" :height="iframeheight" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>                
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
            return this.$mq == 'lg' ? 923 : 1023;
        }
    }
}
</script>

<style lang="scss" scoped>
h3{
    color:#D94A4A;
    font-size: 30px;
    font-weight: bold;
    margin-top:50px;
}
.phone{
    color:#D94A4A;
    font-size: 20px;
}
.iframe-container{
    overflow: hidden;
    max-height: 1023px;

  //  border:1px solid #000;
 //   box-shadow: 3px 3px 3px #6663;
   // width:100%;
   
}
@media(max-width:660px){
    .iframe-container{
        max-height: 923px;
    }
}
</style>

