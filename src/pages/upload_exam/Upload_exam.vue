<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="panel panel-default">
          <div class="panel-heading">上传考题</div>
          <div class="panel-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label for="label" class="col-sm-3 control-label">标题：</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" id="label" placeholder="输入考题标题" v-model="title">
                </div>
              </div>
              <div class="form-group">
                <label for="content" class="col-sm-3 control-label">内容：</label>
                <div class="col-sm-6">
                  <textarea name="content" class="form-control h100" placeholder="输入考题内容" v-model="content"></textarea>
                </div>
              </div>
              <div class="form-group">
                <label for="options" class="col-sm-3 control-label">选项：</label>
                <div class="col-sm-6">
                  <textarea name="options" class="form-control h100" placeholder="输入考题选项：一行一个选项" @blur="formatOptions" v-model="optionsStr"></textarea>
                </div>
              </div>
              <div class="form-group">
                <label for="type" class="col-sm-3 control-label">类型：</label>
                <div class="col-sm-6">
                  <div class="radio-inline">
                    <label>
                      <input type="radio" name="type" value="1" v-model="type">
                      单选
                    </label>
                  </div>
                   <div class="radio-inline">
                    <label>
                      <input type="radio" name="type" value="2" v-model="type">
                      多选
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="scope" class="col-sm-3 control-label">考题范围：</label>
                <div class="col-sm-6">
                  <select name="scope" class="form-control" v-model="chooseScope">
                    <option v-for="(item, index) in scope" :key="index" :value="index">{{item}}</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-3 col-sm-9">
                  <a class="btn btn-primary" @click="upload">提交</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'upload_exam',
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
