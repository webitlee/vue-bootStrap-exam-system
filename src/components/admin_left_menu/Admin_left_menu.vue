<template>
  <div>
    <div class="col-xs-12 col-sm-3">
      <ul class="list-group">
        <li class="list-group-item text-center">
          <a href="javascript:;" :class="{'tc-333' : isList}" @click="toList">
            <i class="glyphicon glyphicon-th-list"></i>
            考题列表
          </a>
        </li>
        <li class="list-group-item text-center">
          <a href="javascript:;":class="{'tc-333' : !isList}" @click="toUpload">
            <i class="glyphicon glyphicon-plus"></i>
            添加考题
          </a>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'admin_left_menu',
  data () {
    return {
       isList : true
    }
  },
  methods : {
    toList(){
      this.isList = true;
      this.router.push('list');
    },
    toUpload(){
      this.isList = false;
      this.router.push('upload');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tc-333{
    color:#333;
  }
</style>
