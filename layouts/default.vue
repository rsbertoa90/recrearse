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
</v-app>
</template>

<script>
import background from '@/components/Home/background.vue'
export default {
    components:{background},
    name: 'DefaultLayout'
}
</script>
