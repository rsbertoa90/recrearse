export default{
    head() {
        let canonical = 'https://recrearse.com';
        return {
            link: [
                { rel: 'canonical', href: canonical }
            ],
            titleTemplate: this.metatitle,
            meta: [
                { name: 'description', content: this.metadescription, hid: 'description' }
            ]
        }
    },
    computed:{
        pageMeta(){
            let path = this.$route.path ;
            return this.$accessor.pageMetas.getMeta(path);
        },
        metatitle(){
            return 'Recrearse - Descubrí y trascendé los nudos de tu historia'
            if(!this.pageMeta)return this.$accessor.config.siteName
            return this.pageMeta.metatitle || this.$accessor.config.siteName 
        },
        metadescription(){
            return "Hay una lógica biológica detrás de cada síntoma, de cada malestar, de cada miedo o complejo. Un por qué una parte de tu cerebro decidió que eso era bueno para vos, que eso aportaba a tu supervivencia o adaptación al medio. Para tu beneficio podés navegar tu propia historia y reprogramar de una forma simple y efectiva aquellos programas biológicos que ya no considerás beneficiosos. Te invitamos a que experimentes una sesión de Bioneurodesprogramacion. "
            if(!this.pageMeta)return this.$accessor.config.siteName
            return this.pageMeta.metadescription || this.metatitle 
        }
    }
}