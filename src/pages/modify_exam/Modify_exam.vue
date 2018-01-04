<template>
  <div class="col-xs-12 col-sm-9" v-if="isLoading">
    <loading></loading>
  </div>
  <div class="col-xs-12 col-sm-9" v-else>
    <div class="panel panel-default">
      <div class="panel-heading">修改考题</div>
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
              <textarea name="options" class="form-control h100" placeholder="输入考题选项：一行一个选项" v-model="optionsStr"></textarea>
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
                <option value="0">--请选择--</option>
                <option v-for="item in scopes" :key="item.id" :value="item.id">{{item.name}}</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-3 col-sm-9">
              <a class="btn btn-primary" @click="update">提交</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import loading from '@/components/loading/Loading';
export default {
  name: 'modify_exam',
  data () {
    return {
      title : null,
      content : null,
      type : 1,
      scopes : null,
      chooseScope : 0,
      optionsStr : null,
      optionsArr : null,
      isLoading : true,
      id : null
    }
  },
  components : {
    loading
  },
  created(){
    //获取地址栏参数“id”的值
    this.getQuery('id');
    this.getScopes();
    this.getExam(this.id);
  },
  methods : {
    //将选项字符串格式化为数组
    formatOptions : function(){
      this.optionsArr = this.optionsStr.split(/\s*\n\s*/g);
    },
    //将选项数组反格式化为字符串
    unformatOptions(){
      this.optionsStr = this.optionsArr.join('\n');
    },
    //获取所有考题范围
    getScopes(){
      this.axios.get('http://localhost:8888/getScopes').then((result)=>{
        this.scopes = result.data;
      })
    },
    getQuery(key){
      this.id = parseInt(this.$route.query[key]);
    },
    getExam(id){
      this.axios.post('http://localhost:8888/getExam', {
        id
      }).then((result)=>{
        console.log(result.data);
        this.isLoading = false;
        this.title = result.data.title;
        this.content = result.data.content;
        var optionsArr = [];
        for(let key in result.data.answers){
          optionsArr.push(result.data.answers[key].option);
        }
        this.optionsArr = optionsArr;
        this.unformatOptions();
        this.type = result.data.type;
        this.chooseScope = result.data.scope_id;
      }).catch((result)=>{
        this.isLoading = false;
        alert('获取考题失败，原因：' + result);
      })
    },
    update(){
      this.formatOptions();
      this.axios.post('http://localhost:8888/updateExam', {
        id : this.id,
        title : this.title,
        content : this.content,
        options : this.optionsArr,
        type : this.type,
        scope : this.chooseScope
      }).then((result)=>{
        alert('修改考题成功');
        this.router.push('/leftMenu/list');
      }).catch((result)=>{
        alert('修改考题失败，原因：' + result);
      })
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
