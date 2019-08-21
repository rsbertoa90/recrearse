<template>
<div class="d-flex flex-column align-items-center text-center margintop">
    <h3>Algunos de nuestros clientes</h3>
    <div class="row mt-4">
        <a  href="https://mayoristamaju.com" target="_blank" title="Mayorista Maju" class="col-12 col-lg-3 logo-container">
            <img src="@/assets/images/maju.png" alt="Mayorista Maju">
        </a>
        <a href="https://mayoristadelmate.com" target="_blank" title="Mayorista Del Mate"  class="col-12 col-lg-3 logo-container">
            <img src="@/assets/images/delmate.png" alt="Mayorista del Mate">
        </a>
        <a href="https://matesfabi.com" target="_blank" title="Mates Fabi"  class="col-12 col-lg-3 logo-container">
            <img src="@/assets/images/matesfabi.png" alt="Mates Fabi ">
        </a>
        <a  href="https://redlimp.com" target="_blank" title="Mayorista Redlimp" class="col-12 col-lg-3 logo-container">
            <img src="@/assets/images/redlimp.png" alt="Mayorista Redlimp">
        </a>
    </div>
</div>
</template>



<style lang="scss" scoped>
.margintop{
    margin-top:30px;
}
h3{
    font-size: 30px;
    color:#3A2BB3;
    font-weight: bold;
}
.row{
    padding: 10px 50px;
}
.logo-container{
    padding:25px;
    display: flex;
    justify-content: center;
    align-items:center;
}

@media(max-width:660px){
    .logo-container{
        padding:20px;
        margin:0;
    }
}
</style>
