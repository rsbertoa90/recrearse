<template>
<div class="spacing-for-jumbo">
    <div class="jumbo-container">
        <img src="@/static/images/home-top-compresed.jpg" class="home-top-shadow" alt="Fondo">
        <h2 class="big-text">
            Como ves tu negocio dentro de 5 años?
        </h2>
        <h3 class="small-text">
            Estas sacando ganancia del Mundo Digital?
        </h3>
        <h1 class="logo" id="logo">
            <img src="@/static/images/logo.png" alt="MoM Web Servicios Digitales">
        </h1>
        <a class="btn-contacto" href="#formContacto">
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
.home-top-shadow{
    box-shadow: 0px 10px 50px #0009;
}
.spacing-for-jumbo{
  
    width:100vw;
    height: 800px;
}
    .jumbo-container{
        position: absolute;
        left:0;
        top:0;
        min-width:100vw;
        margin-top:-20px;
        color:#fff;
        .btn-contacto{
             display: flex;
            justify-content: center;
            align-items: center;
            position:absolute;
            bottom:15%;
            right:10%;
            width:200px;
            font-size: 30px;
            color:#FF7011;
            border: 5px solid #FF7011;
            background-color: #fff;
            height: 60px;
            transition:all .3s;
            &:hover{
                transition:all .3s;
                transform:scale(1.2);
                color:#fff;
                border:5px solid #fff;
                background-color: #FF7011;
            }
        }
        .big-text{
            position:absolute;
            top:10%;
            right:5%;
            font-size: 65px;
            width:500px;
            text-align: left;
            text-shadow: 0px 3px 6px #666; 
            font-weight: bold;
        }
        .small-text{
            width:500px;
            font-size: 45px;
            font-weight: bold;
            text-shadow: 0px 1px 3px #666; 
            position: absolute;
            right:5%;
            bottom:30%;
            text-align: left;
        }

        .logo{
            position:absolute;
            bottom:10%;
            left:10%;
        }

    }
</style>

