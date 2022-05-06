<template>
<div class="relative fcc">
    <no-ssr>
        <div class="img-container">
            <v-img src="/head-shape-white.png"/>
        </div>
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
            sk.createCanvas(this.data,this.data);
            sk.frameRate(30);
            for (let i = 0; i < 10; i++) {
                this.neurons[i] = {
                    x:sk.random(this.data*0.25,this.data*0.75),
                    y:sk.random(this.data*0.25,this.data*0.75),
                    vx:sk.random(-2,2),
                    vy:sk.random(-2,2),
                }
            }
        },
        draw(sk) {
            sk.background('#121212')
            sk.noFill()
            sk.strokeWeight(2)
            //sk.circle(this.data*0.5,this.data*0.5,this.data)
            sk.fill(255)
            sk.stroke('#ff7f00')
            sk.strokeWeight(this.data*0.015)
            for (let n = 0; n < this.neurons.length; n++) {
                const NEURON = this.neurons[n];
                if (n < this.neurons.length-1) {
                    const NEURON2 = this.neurons[(n+1)%this.neurons.length];
                    sk.line(NEURON.x,NEURON.y,NEURON2.x,NEURON2.y)
                }
                sk.circle(NEURON.x,NEURON.y,this.data*0.05)
                NEURON.x += NEURON.vx
                NEURON.y += NEURON.vy
                if (sk.dist(this.data*0.5,this.data*0.5,NEURON.x,NEURON.y)>this.data*0.5-this.data*0.025){
                    NEURON.vx *= -1
                    NEURON.vy *= -1
                }
                //if (NEURON.x <= 43 || NEURON.x >= 400-43) NEURON.vx *= -1
                //if (NEURON.y <= 43 || NEURON.y >= 400-43) NEURON.vy *= -1
                
            }
        },
    },
    computed:{
        data(){
            return this.$mq == 'lg' ? 400 : 250;
        }
    },
    /* render(h) {
        return h(VueP5, {on: this});
    }, */
    mounted(){
        
    }
};
</script>

<style lang='scss' scoped>
@media (min-width:660px) {
    .img-container{
        width: 125%;
        position: absolute;
        top: -5%;
        left: -20%;
    }
}
@media (max-width:660px) {
    
    .img-container{
        width: 125%;
        position: absolute;
        top: -5%;
        left: -20%;
    }
}
</style>