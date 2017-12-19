<template>
  <div class="text-center">
    <img class="mt-100" src="./../../assets/imgs/loading.gif"/>
  </div>
</template>
<script>
export default {
  name: 'loading',
  data () {
    return {
     
    }
  }
}
</script>
<style scoped>
  .w100p{
    width:100%;
  }
  .h100p{
    height:100%;
  }
  .mt-100{
    margin-top:100px;
  }
  .pos-ab{
    position:absolute;
  }
  .text-center{
    text-align:center;
  }
  .verticalcenter{
    position: relative; 
    top: 50%;
    left: 50%; /*上下移动屏幕的50%*/
    margin-left: auto;
    margin-right:auto;
    -webkit-transform: translate(-50%,-50%); /*减去自身的50%（多移动的）*/
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
}
</style>
<style>
  body{
    position:relative;
  }
</style>
