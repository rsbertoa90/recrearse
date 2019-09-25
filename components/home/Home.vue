<template>
    <div class="d-flex flex-column m-0 p-0">
        <widejumbo v-if="$mq=='lg'"></widejumbo>
        <smalljumbo v-if="$mq!='lg'"></smalljumbo>
        <div class="p-2 d-flex flex-column m-auto">
            <hometexts></hometexts>
            <iframeForm ></iframeForm>
        <!--     <clients></clients> -->
            <team></team>
            <social></social>
        </div>
    </div>
</template>

<script>
import clients from './clients.vue';
import iframeForm from './iframe-form.vue';
import widejumbo from './wide/jumbo.vue';
import smalljumbo from './mobile/jumbo.vue';
import hometexts from './texts.vue'
import team from './team.vue';
import social from './social.vue'
export default {
    components:{social,hometexts,team,iframeForm,widejumbo,smalljumbo,clients}
}
</script>

<style lang="scss" scoped>
  
</style>

