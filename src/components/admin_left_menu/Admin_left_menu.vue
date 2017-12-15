<template>
  <div class="col-xs-12 col-sm-3">
    <ul class="list-group">
      <li class="list-group-item text-center">
        <a href="/list">
          <i class="glyphicon glyphicon-th-list"></i>
          考题列表
        </a>
      </li>
      <li class="list-group-item text-center">
        <a href="/upload">
          <i class="glyphicon glyphicon-plus"></i>
          添加考题
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props : ['isList', 'isUpload'],
  name: 'admin_left_menu',
  data () {
    return {
      
    }
  },
  methods : {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tc-333{
    color:#333;
  }
</style>
