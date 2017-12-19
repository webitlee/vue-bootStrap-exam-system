<template>
  <div class="jumbotron">
    <h1>404</h1>
    <p>您的页面已经脱离地球引力，飞往火星！！</p>
    <p><a class="btn btn-primary btn-lg" href="javascript:;" @click="toBack">&lt;后退</a></p>
  </div>
</template>

<script>
export default {
  name: 'error_404',
  data () {
    return {
     
    }
  },
  methods : {
    toBack(){
      this.router.back();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
