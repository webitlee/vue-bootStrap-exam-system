<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-9">
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
                    <a :href="item.editUrl" class="btn btn-primary">编辑</a>
                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a :href="item.removeUrl">删除</a></li>
                      <li class="divider"></li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="btn-group">
          <a class="btn btn-default" :href="prevPage()">&lt;上一页</a>
          <a class="btn" href="/list" v-for="(item, index) in pages" :key="index">{{index + 1}}</a>
          <a class="btn btn-default" :href="nextPage()">下一页&gt;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
         editUrl : '/modify/2',
         removeUrl : '/remove/2'
       },
       {
         id : 1,
         title : '你猜我猜你猜不猜',
         content : 'alert(1111);',
         type : 1, //0为单选，1为多选
         scope : 2, //1为前端，2为后端，3为Node
         editUrl : '/modify/1', 
         removeUrl : '/remove/1'
       }
     ],
     types : ['单选', '多选'],
     scopes : ['前端', '后端', 'Node.js'],
     pages : [true, false, false]
    }
  },
  computed : {
    
  },
  methods : {
    a : function(){
      console.log(this.checkboxValue);
    },
    prevPage : function(){
      console.log(0);
    },
    nextPage : function(){
      console.log(1);
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
