<template>
<div>
    <no-ssr>
        <vue-p5 v-on="{setup}" />
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
            sk.noStroke();
            //sk.background(255,0,0)
            let box = sk.width / 18
            for (let i = 0; i < 180; i++) {
                sk.fill(255,sk.random(255))
                sk.circle(sk.random(sk.width),sk.random(sk.height),sk.random(5))
            }
            /* for (let i = 0; i < 18; i++) {
                for (let j = 0; j < 18; j++) {
                    sk.circle(i*box+box/2,j*box+box*0.65,5)
                }
            } */
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