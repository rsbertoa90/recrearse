<template>
  <pageComponent />
</template>

<script>
import metadataMixin from '@/mixins/pageMetaMixin'
import pageComponent from "@/components/Home/home.vue";
export default {
    components:{pageComponent},
    mixins:[metadataMixin],
    name: 'home'
}
</script>
