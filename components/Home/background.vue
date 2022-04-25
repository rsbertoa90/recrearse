<template>
<div>
    <no-ssr>
        <vue-p5 v-on="{setup}" class="sticky-0" />
    </no-ssr>
</div>
</template>

<script >
//import Vue from 'vue'
//export default Vue.extend({
export default {
    data(){return{
        neurons:[]
    }},
    methods: {
        setup(sk) {
            sk.createCanvas(window.innerWidth,window.innerHeight);
            sk.noLoop();
            sk.background(255,0,0)
        },
    },
    /* render(h) {
        return h(VueP5, {on: this});
    }, */
    mounted(){
        
    }
};
</script>

<style lang='scss' scoped>

</style>