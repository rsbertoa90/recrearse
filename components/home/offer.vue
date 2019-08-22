<template>
    <div class="d-flex flex-column align-items-center margintop">
        <h3 class="text-center">
            Aumenta tus ingresos teniendo presencia y desarrollo Online
        </h3>
        <div class="text-left datext">
            Si sos dueño de una fabrica, distribuidora, mayorista o local y te encontras en alguna de las siguientes situaciones, en MoM web te podemos ayudar
        </div>

        <div class="row offer-row mt-4">
            <div class="col-12 col-lg-4 d-flex mobile-margin-top">
                <span class="circle"></span>
                <div class="offer-col">
                    <div class="descri">
                        Quiero una pagina web personalizada que me ahorre tiempo y resuelva la comunicación con mis clientes. (Ej: Generación automática de lista de precios y catalogo digital) 
                    </div>
                    
                    <div class="descri mt-4">
                        <h4>Web Personalizada</h4>
                        Programacion a tu servicio: Lo que vos imagines, nosotros lo construimos.
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 d-flex mobile-margin-top">
                <span class="circle"></span>
                <div class="offer-col">
                    <div class="descri">
                        Tengo mi pagina web y redes sociales. Estoy haciendo campañas publicitarias pero no noto beneficios. Quiero recomendaciones personalizadas de que cambios hacer para mejorar  
                    </div>
                    
                    <div class="descri mt-4">
                        <h4>Consultoria</h4>
                        Una mirada especializada va aportar ganancia en tus resultados
                    </div>
                </div>
            </div>
            <div class="col-12- col-lg-4 d-flex mobile-margin-top">
                <span class="circle"></span>
                <div class="offer-col">
                    <div class="descri">
                       Mi negocio aun no tiene presencia activa en Internet y quiero tenerla. Me gustaría un servicio que se ocupe de todos los aspectos que implica que mi negocio funcione online.  
                    </div>
                    
                    <div class="descri mt-4">
                        <h4>Servicio digital integral</h4>
                       Incluye desde la creación de la pagina web hasta la difusión y crecimiento.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.margintop{
    margin-top:40px;
}
h4{
    font-size: 18px;
    color:#3A2BB3;
    text-align: left;
}
.circle{
    background-color: #3A2BB3;
    width:20px;
    height: 20px;
    display:flex;
    border-radius:50%;
    margin-right:5px;

}

.descri{
    text-align: left;
    margin-left:5px;
}

    h3{
        color:#3A2BB3;
        font-size: 30px;
        font-weight: bold;
    }

    .datext{
        width:60vw;
        margin:auto;
        font-size: 25px;
        font-weight: bold;
        margin-top:20px;
    }

    .offer-col{
        border-left: 1px solid #3A2BB3;

    }

    @media(max-width:660px)
    {
        h3{
            font-size: 20px;
        }

        .datext{
            font-size: 18px;
            width:90vw;
            margin:auto;
            margin-left:25px;
        }

        .descri,h4{
            font-size: 16px;
        }

        .mobile-margin-top{
            margin-top:40px;
        }
    }
</style>
