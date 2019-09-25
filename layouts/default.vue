<template>
  <div class="app-container"> 
    <nuxt />
    <div class="bot-space"></div>
  <!--   <momwebfooter></momwebfooter> -->
  </div>
</template>



<script>
import momwebfooter from '@/components/layout/momwebfooter.vue';
export default {
  components:{momwebfooter}
}
</script>



<style>
.app-container{
  width:99vw;
  max-width: 1900px;
 
  position:relative;
  margin:auto;
}

.bot-space{
  width:100vw;
  height: 150px;
}
html {
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
