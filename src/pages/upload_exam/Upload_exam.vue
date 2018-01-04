<template>
  <loading v-if="isLoading"></loading>
  <div class="col-xs-12 col-sm-9" v-else>
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
                <option value="0">--请选择--</option>
                <option v-for="item in scopes" :key="item.id" :value="item.id">{{item.name}}</option>
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
</template>

<script>
import loading from '@/components/loading/Loading';
export default {
  name: 'upload_exam',
  data () {
    return {
      isLoading : true,
      title : '',
      content : '',
      type : 1,
      scopes : null,
      chooseScope : 0,
      optionsStr : '',
      optionsArr : []
    }
  },
  components : {
    loading
  },
  created(){
    this.axios.get('http://localhost:8888/getScopes').then((result)=>{
      this.scopes = result.data;
      this.isLoading = false;
    }).catch((result)=>{
      alert('获取考题范围失败，原因：' + result);
    })
  },
  methods : {
    formatOptions : function(){
      this.optionsArr = this.optionsStr.split(/\s*\n\s*/g);
      console.log(this.optionsArr);
      return this.optionsArr;
    },
    upload : function(){
      if(!this.title){
        alert('请填写考题标题');
        return;
      }
      if(!this.content){
        alert('请填写考题内容');
        return;
      }
      if(!this.optionsStr){
        alert('请填写考题选项');
        return;
      }
      if(this.optionsArr.length <=1){
        alert('考题选项应为2个以上');
        return;
      }
      if(this.type <= 0){
        alert('请选择考题类型');
        return;
      }
      if(this.chooseScope <= 0){
        alert('请选择所属考题范围');
        return;
      }
      this.axios.post('http://localhost:8888/addExam', {
        title : this.title,
        content : this.content,
        options : this.optionsArr,
        type : this.type,
        scope : this.chooseScope
      }).then((result)=>{
        alert(result.data.message);
        location.reload();
      }).catch((result)=>{
        alert('添加考题失败，原因：' + result);
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
