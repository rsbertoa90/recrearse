<template>
<div class="spacing-for-jumbo">
    <h2 class="big-text">
        Como ves tu negocio dentro de 5 años?
    </h2>
    <h3 class="small-text">
        Estas sacando ganancia del Mundo Digital?
    </h3>
     <div class="jumbo-container">
        <img src="@/static/images/home-top-small.png" alt="Fondo">
        
        <h1 class="logo" id="logo">
            <img src="@/static/images/logo.png" alt="MoM Web Servicios Digitales">
        </h1>
        <a href="https://api.whatsapp.com/send?phone=5492920485028&text=Hola!%20te%20escribo%20desde%20la%20pagina%20de%20MoM%20Web" target="_blank" rel="noopener" class="btn-contacto">
            Contacto
        </a>
    
    </div> 
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
  .big-text{
            margin:auto;
            color:#3A2BB3;
            font-size: 30px;
            width:300px;
            margin-top:25px;
            text-align: left;
            text-shadow: 0px 3px 6px #666; 
            font-weight: bold;
        }
        .small-text{
            margin:auto;
            margin-top:25px;
            color:#3A2BB3;
            width:300px;
            font-size: 26px;
            font-weight: bold;
            text-shadow: 0px 1px 3px #666; 
            text-align: left;
            font-weight: normal;
        }

    .jumbo-container{
        min-width:100vw;
       // margin-top:-20px;
        position:relative;
        color:#fff;
        .btn-contacto{
            position:absolute;
            bottom:45px;
            right:37px;
            width:100px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            color:#FF7011;
            border: 5px solid #FF7011;
            background-color: #fff;
            height: 45px;
            transition:all .3s;
            &:hover{
                transition:all .3s;
                transform:scale(1.2);
                color:#fff;
                border:5px solid #fff;
                background-color: #FF7011;
            }
        }
      

        .logo{
          
            width: 170px;
       //     height: 60;
            position: absolute;
            top: 71px;
            right: 5px;
        }

    }
</style>

