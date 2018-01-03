<template>
  <div>
    <div class="col-xs-12 col-sm-3">
      <ul class="list-group">
        <li class="list-group-item">
          <a href="javascript:;" :class="{'tc-666' : !isList}" @click="toList">
            <i class="glyphicon glyphicon-th-list"></i>
            考题列表
          </a>
        </li>
        <li class="list-group-item">
          <a href="javascript:;" :class="{'tc-666' : !isAdd}" @click="toUpload">
            <i class="glyphicon glyphicon-plus"></i>
            添加考题
          </a>
        </li>
        <li class="list-group-item">
          <a href="javascript:;" :class="{'tc-666' : !isScope}" @click="toScope">
            <i class="glyphicon glyphicon-plus"></i>
            考题范围管理
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
       isList : true,
       isAdd : false,
       isScope : false
    }
  },
  methods : {
    toList(){
      this.isList = true;
      this.isAdd = false;
      this.isScope = false;
      this.router.push('list');
    },
    toUpload(){
      this.isAdd = true;
      this.isList = false;
      this.isScope = false;
      this.router.push('upload');
    },
    toScope(){
      this.isScope = true;
      this.isList = false;
      this.isAdd = false;
      this.router.push('scope');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tc-666{
    color:#666;
  }
</style>
