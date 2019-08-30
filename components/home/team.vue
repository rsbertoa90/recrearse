<template>
    <div class="margintop">
        <h3 class="subtitle">
            Nuestro equipo
        </h3>

        <div class=" row fotos-row">
            <div class="col-12 col-lg-4 team-member">
                <div class="foto-container">
                    <v-lazy-image v-bind:src="require('@/assets/images/gi.jpg')" alt="Gisella Coronel"/>
                </div>
                <h3>Gisella Coronel</h3>
                <span>Marketing Digital</span>
            </div>
            <div class="col-12 col-lg-4 team-member mt-4 mt-lg-0">
                <div class="foto-container">
                    <v-lazy-image v-bind:src="require('@/assets/images/ro.jpg')" alt="Rodrigo Bertoa"/>
                </div>
                <h3>Rodrigo Bertoa</h3>
                <span>Desarrollo Web</span>
            </div>
            <div class="col-12 col-lg-4 team-member mt-4 mt-lg-0">
                <div class="foto-container">
                    <v-lazy-image v-bind:src="require('@/assets/images/romi.jpg')" alt="Romina Horat"/>
                </div>
                <h3>Romina Horat</h3>
                <span>Diseño Web</span>
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
    width:249px;
    margin:auto;
    box-shadow: 2px 2px 2px #666;
    border:1px solid #000;
}
.subtitle{
    color:#3A2BB3;
    font-weight: bold;
    font-size: 30px;

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
