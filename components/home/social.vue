<template>
    <div  class="social-container">
        <p class="text">Para mas contenido seguinos en redes sociales:</p>
        <div class="logos">
            <div class="fb">
                <a href="https://www.facebook.com/ReCrearseTalleresBioneuro" target="_blank" rel="noopener">
                      <v-lazy-image v-bind:src="require('@/assets/images/fb.png')" alt="Rodrigo Bertoa"/>
                </a>
            </div>
            <div class="instagram">
                 <a href="https://www.instagram.com/bioneurodesprogramacion/" target="_blank" rel="noopener">
                        <v-lazy-image v-bind:src="require('@/assets/images/insta.png')" alt="Rodrigo Bertoa"/>
                </a>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.social-container{
    width:100%;
    display: flex;
    margin-top:40px;
    justify-content: flex-start;
}
.logos{
    display: flex;
    justify-content: space-around;
    width:150px;
    margin-left:30px;
}
    .text{
        
        color:#D94A4A;
        font-size: 30px;
        text-align: left;
    }

    .fb,.instagram{
        width:50px;
    
    }

    @media(max-width:660px)
    {
        .social-container{
            flex-direction: column;
        }
        .text{
            font-size: 20px;
        }
        .logos{
           margin-left:none;
           margin:auto;
           width:200px;
        }
    }
</style>

