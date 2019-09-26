<template>
    <div class="margintop">
        <h3 class="subtitle">
            Nuestro equipo
        </h3>
        <p class="text text-left ml-4">
            Bioneurodesprogramadores formados en la Escuela de Bioneurovida dirigida por Ana Paz
        </p>

        <div class=" row fotos-row">
            <div class="col-12 col-lg-4 team-member">
                <div class="foto-container">
                    <v-lazy-image v-bind:src="require('@/assets/images/gi.jpg')" alt="Gisella Coronel"/>
                </div>
                <h3>Gisella Coronel</h3>
             
            </div>
            <div class="col-12 col-lg-4 team-member mt-4 mt-lg-0">
                <div class="foto-container">
                    <v-lazy-image v-bind:src="require('@/assets/images/ro.jpg')" alt="Rodrigo Bertoa"/>
                </div>
                <h3>Rodrigo Bertoa</h3>
             
            </div>
            <div class="col-12 col-lg-4 team-member mt-4 mt-lg-0">
                <div class="foto-container">
                    <v-lazy-image v-bind:src="require('@/assets/images/romi.jpg')" alt="Romina Horat"/>
                </div>
                <h3>Romina Horat</h3>
             
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.margintop{
    margin-top:40px;
}
h3{
    font-size: 25px;
    font-weight: bold;
    margin-top:5px;
}
span{
    font-size: 18px;
}
.foto-container{
    border-radius: 50%;
    overflow: hidden;
    width:249px;
    margin:auto;
    box-shadow: 2px 2px 2px #666;
    border:1px solid #000;
}
.subtitle{
    color:#D94A4A;
    font-weight: bold;
    font-size: 30px;
    text-align: left;

}

.fotos-row{
    display:flex;
    justify-content: space-around;
    padding:10px 60px;
}

@media(max-width:660px)
{
    
    .foto-container{
        width:230px;
    }
}
</style>
