<template>
    <div class="d-flex flex-column m-0 p-0">
        <widejumbo v-if="$mq=='lg'"></widejumbo>
        <smalljumbo v-if="$mq!='lg'"></smalljumbo>
        <wideoffer ></wideoffer>
        <iframeForm ></iframeForm>
        <clients></clients>
        <team></team>
    </div>
</template>

<script>
import clients from './clients.vue';
import iframeForm from './iframe-form.vue';
import widejumbo from './wide/jumbo.vue';
import smalljumbo from './mobile/jumbo.vue';
import wideoffer from './offer.vue';
import team from './team.vue';
export default {
    components:{team,iframeForm,widejumbo,smalljumbo,wideoffer,clients}
}
</script>

<style lang="scss" scoped>
  
</style>

