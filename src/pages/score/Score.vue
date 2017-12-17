<template>
  <div class="col-xs-12">
    <h2 class="text-center">
      <span class="glyphicon glyphicon-thumbs-up text-primary"></span>
    </h2>
    <hr/>
    <h3 class="text-center">
      恭喜您，您的得分为:
      <span class="text-danger">88</span>分
    </h3>
    <h4 class="text-center">
      共答对：
      <span class="text-success">20</span>
      题
      <span class="glyphicon glyphicon-ok text-success"></span>
    </h4>
    <h4 class="text-center">
      答错：
      <span class="text-warning">80</span>
      题
      <span class="glyphicon glyphicon glyphicon-remove text-warning"></span>
    </h4>
    <p class="text-center">
      <a class="btn btn-danger" href="javascript:;" @click="mistakes">查看错题</a>
      <a class="btn btn-primary" href="javascript:;" @click="again">再考一次</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'score',
  data () {
    return {
      
    }
  },
  computed : {
     
  },
  methods : {
    a : function(){
      console.log(this.checkboxValue);
    },
    //查看错题
    mistakes : function(){
      this.router.push('/mistakes');
    },
    again(){
      this.router.push('/');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
