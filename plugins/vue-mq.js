import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
    breakpoints: { // default breakpoints - customize this
        sm: 450,
        md: 1250,
        lg: Infinity,
    },
    defaultBreakpoint: 'sm' // customize this for SSR
})