<template>
  <div class="col-xs-12 col-sm-9" v-if="complete">
    <loading></loading>
  </div>
  <div class="col-xs-12 col-sm-9" v-else>
    <div class="table-responsive of-visible">
      <table class="table table-bordered table-striped table-hover table-condensed">
        <thead>
          <tr>
            <th class="text-right v-middle">编号</th>
            <th class="text-center v-middle" width="200">标题</th>
            <th class="text-center v-middle">内容</th>
            <th class="text-center v-middle">类型</th>
            <th class="text-center v-middle">考题范围</th>
            <th class="text-center v-middle" width="200">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td class="text-right v-middle">{{item.id}}</td>
            <td class="text-center v-middle">{{item.title}}</td>
            <td class="text-center v-middle">{{item.title}}</td>
            <td class="text-center v-middle" v-if="item.type === 0">单选</td>
            <td class="text-center v-middle" v-else-if="item.type === 1">多选</td>
            <td class="text-center v-middle" v-if="item.scope === 1">前端</td>
            <td class="text-center v-middle" v-else-if="item.scope === 2">后端</td>
            <td class="text-center v-middle" v-else-if="item.scope === 3">Node.js</td>
            <td class="text-center v-middle">
              <div class="btn-group">
                <a href="javascript:;" class="btn btn-primary" @click="edit(item.id)">编辑</a>
                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li><a href="javascript:;" @click="remove(item.id)">删除</a></li>
                  <li class="divider"></li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="btn-group">
      <a class="btn btn-default" href="javascript:;" @click="prevPage">&lt;上一页</a>
      <a class="btn" href=" javascript:;" :class="currentPage(item)" v-for="item in pageCount" :key="item" @click="toPage(item)">{{item}}</a>
      <a class="btn btn-default" href="javascript::" @click="nextPage">下一页&gt;</a>
    </div>
  </div>
</template>

<script>
import loading from '@/components/loading/Loading';
export default {
  name: 'list_exam',
  data () {
    return {
     items : [
       {
         id : 2,
         title : '以下内容会输出神马',
         content : 'function(){}',
         type : 0, //0为单选，1为多选
         scope : 1, //1为前端，2为后端，3为Node
         editUrl : '/modify',
         removeUrl : '/remove'
       },
       {
         id : 1,
         title : '你猜我猜你猜不猜',
         content : 'alert(1111);',
         type : 1, //0为单选，1为多选
         scope : 2, //1为前端，2为后端，3为Node
         editUrl : '/modify', 
         removeUrl : '/remove'
       }
     ],
     types : ['单选', '多选'],
     scopes : ['前端', '后端', 'Node.js'],
     pageCount : 10,
     active : 5,
     complete : false
    }
  },
  components : {
    loading
  },
  methods : {
    prevPage : function(){
      if(this.active <= 1){
        return;
      }
      this.active -= 1;
      this.currentPage(this.active);
    },
    nextPage : function(){
      if(this.active >= this.pageCount){
        return;
      }
      this.active += 1;
      this.currentPage(this.active);
    },
    currentPage(index){
      if(index === this.active){
        return 'btn-primary';
      }
      return 'btn-default';
    },
    toPage(index){
      this.active = index;
      this.currentPage(index);
    },
    edit(id){
      this.router.push('/modify?id=' + id);
    },
    remove(id){
      console.log(id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .h100{
    height:100px;
  }
  .of-visible{
    overflow: visible;
  }
  .v-middle{
    vertical-align:middle;
  }
</style>
