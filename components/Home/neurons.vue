<template>
<div>
    <no-ssr>

        <vue-p5 v-on="{setup,draw}" />

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
            sk.createCanvas(400,400);
            sk.frameRate(30);
            for (let i = 0; i < 5; i++) {
                this.neurons[i] = {
                    x:sk.random(75,325),
                    y:sk.random(75,325),
                    vx:sk.random(-2,2),
                    vy:sk.random(-2,2),
                }
            }
        },
        draw(sk) {
            sk.background('#121212')
            sk.fill('#121212')
            sk.stroke(255)
            sk.strokeWeight(15)
            for (let n = 0; n < this.neurons.length; n++) {
                const NEURON = this.neurons[n];
                if (n < this.neurons.length-1) {
                    const NEURON2 = this.neurons[(n+1)%this.neurons.length];
                    sk.line(NEURON.x,NEURON.y,NEURON2.x,NEURON2.y)
                }
                sk.circle(NEURON.x,NEURON.y,75)
                NEURON.x += NEURON.vx
                NEURON.y += NEURON.vy
                if (NEURON.x <= 75 || NEURON.x >= 325) NEURON.vx *= -1
                if (NEURON.y <= 75 || NEURON.y >= 325) NEURON.vy *= -1
                
            }
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