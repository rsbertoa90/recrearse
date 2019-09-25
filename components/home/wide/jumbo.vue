<template>
<div class="spacing-for-jumbo">
    <div class="jumbo-container">
        <img src="@/static/images/home-top.jpg" class="home-top-shadow" alt="Fondo">
        <h2 class="big-text">
            Descubrí y trascende los nudos de tu historia
        </h2>
        <h3 class="small-text">
            Bioneurodesprogramacion <br/> Terapia Complementaria
        </h3>
        <h1 class="logo" id="logo">
            <img src="@/static/images/logo.png" alt="Recrearse talleres bioneuro">
        </h1>
      <!--   <a class="btn-contacto" href="#formContacto">
            Contacto
        </a> -->
    
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
  
    width:100%;
    height: 800px;
}
@media(min-width:1450px){
    .spacing-for-jumbo{
           max-height: 1100px;
            height: 56vw;
    }
}

    .jumbo-container{
        position: absolute;
        left:0;
        top:0;
        min-width:100%;
        margin-top:-20px;
        color:#D94A4A;
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
            top:15%;
            right:5%;
            font-size: 45px;
            width:500px;
            text-align: center;
            text-shadow: 0px 3px 6px #666; 
            font-weight: bold;

        }
        .small-text{
            width:500px;
            font-size: 30px;
            font-weight: bold;
            text-shadow: 0px 1px 3px #666; 
            position: absolute;
            right:5%;
            top:40%;
            text-align: center;

        }

        .logo{
            position:absolute;
            top:60%;
            right:14%;
        }

    }
</style>

