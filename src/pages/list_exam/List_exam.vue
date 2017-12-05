<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="panel panel-default">
          <div class="panel-heading">考题列表</div>
          <div class="panel-body">
            <div class="table-responsive">
              <table class="table table-bordered table-striped table-hover">
                <thead>
                  <tr>
                    <th class="text-right">编号</th>
                    <th class="text-center" width="200">标题</th>
                    <th class="text-center">内容</th>
                    <th class="text-center">类型</th>
                    <th class="text-center">考题范围</th>
                    <th class="text-center">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-right">1</td>
                    <td class="text-center">以下内容会输出神马？</td>
                    <td class="text-center">function(){}</td>
                    <td class="text-center">单选</td>
                    <td class="text-center">Node.js</td>
                    <td class="text-center">
                      <div class="btn-group">
                        <a href="javascript:;" class="btn btn-primary">编辑</a>
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                          <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                          <li><a href="#">删除</a></li>
                          <li class="divider"></li>
                          <li><a href="#">xx00</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
      title : '执行如下代码会输入神马？',
      content : 'function(a,b){alert(111)}',
      type : 1,
      scope : ['--请选择--', '前端', '后端', 'Node.js'],
      chooseScope : 0,
      optionsStr : '111',
      optionsArr : []
    }
  },
  computed : {

  },
  methods : {
    a : function(){
      console.log(this.checkboxValue);
    },
    formatOptions : function(){
      this.optionsArr = this.optionsStr.split(/\s*\n\s*/g);
      console.log(this.optionsArr);
      return this.optionsArr;
    },
    upload : function(){
      console.log(this.axios);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .h100{
    height:100px;
  }
</style>
