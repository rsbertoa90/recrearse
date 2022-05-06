<template>
<v-row justify="center" no-gutters>
    <v-col cols="12" lg="6" class="orange-border rounded-xl overflow-hidden">
        <div class="spacer bg-orange"></div>
        <div class="pa-4">
            <div>
                <span class="bold fs-24">
                    Re Crearse - Bioneurodesprogramacion
                </span><br>
                Envíanos tu consulta, te responderemos a la brevedad
            </div>
            <v-divider class="divider bg-orange my-3"></v-divider>
            <div>
                Correo
                <v-text-field solo hide-details
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                />
            </div>
            <v-divider class="divider bg-orange my-3"></v-divider>
            <div>
                En que te podemos ayudar
                <v-textarea solo hide-details
                    v-model="consult"
                    :rules="[rules.required, rules.counter]"
                />
            </div>
            <v-divider class="divider bg-orange my-3"></v-divider>
            <div>
                Si preferís podes dejar tu numero de WhatsApp para recibir la respuesta
                <v-text-field solo hide-details
                    v-model="wpp"
                    :rules="[rules.required]"
                />
            </div>
            <v-divider class="divider bg-orange my-3"></v-divider>
            <div>
                toggler - Envíame una copia de mis respuestas.
                <div class="d-flex justify-space-around">
                    <v-btn color="first" text>
                        borrar formulario
                    </v-btn>
                    <v-btn color="first" depressed>
                        enviar
                    </v-btn>
                </div>
            </div>
        </div>
    </v-col>
</v-row>
</template>

<script>
export default {
    components: {
        
    },
    data(){return{
        email:'',
        consult:'',
        wpp:'11-',
        rules: {
            required: value => !!value || 'Requerido.',
            counter: value => value.length <= 20 || 'Maximo 20 caracteres.',
            email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Correo invalido.'
            },
        },
    }},
    computed: {
        
    },
    methods: {
        
    },
    mounted(){
        
    }
}
</script>

<style lang='scss' scoped>

.spacer{
    min-height: 20px;
}
</style>