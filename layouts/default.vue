<template>
<v-app class="bg-blue">
    <div class="sticky-0">
        <background class="absolute-0"/>
    </div>
    <v-main>
        <v-container>
            <Nuxt />
        </v-container>
    </v-main>
    <momfooter />
</v-app>
</template>

<script>
import momfooter from '@/components/layout/MOMFooter.vue'
import background from '@/components/Home/background.vue'
export default {
    components:{background,momfooter},
    name: 'DefaultLayout'
}
</script>
