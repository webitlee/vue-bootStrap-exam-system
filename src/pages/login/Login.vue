<template>
  <div class="col-xs-12">
    <div id="login" class="modal fade in">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title text-center">输入考生信息</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label for="ename" class="col-xs-12 col-sm-3 control-label">姓名：</label>
                <div class="col-xs-12 col-sm-9">
                  <input type="text" class="form-control" id="ename" placeholder="输入姓名" v-model="name">
                </div>
              </div>
              <div class="form-group">
                <label class="col-xs-12 col-sm-3 control-label">性别：</label>
                  <div class="col-xs-12 col-sm-9">
                    <label class="radio-inline">
                      <input v-model="sex" type="radio" name="sex" :value="true"/> 男
                    </label>
                    <label class="radio-inline">
                      <input  v-model="sex" type="radio" name="sex" :value="false"/> 女
                    </label>
                  </div>
              </div>
              <div class="form-group">
                <label class="col-xs-12 col-sm-3 control-label">考题类型：</label>
                <div class="col-xs-12 col-sm-9">
                  <select class="form-control" name="type" v-model="type">
                    <option v-for="(item, index) in types" :value="index" :key="index">{{item}}</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="formSubmit">确定</button>
            <button type="button" class="btn btn-default" @click="formCancel">取消</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      name : '',
      sex : true,
      types : ['--请选择--', '前端', 'java', 'Node.js'],
      type : 0
    }
  },
  created(){
    this.getTypes();
  },
  methods : {
    getTypes(){
      this.axios.get('http://localhost:8888/getTypes').then((data)=>{
        console.log(data.data.message);
      }).catch((data)=>{
        console.log(data);
      })
    },
    formSubmit(){
      if(!this.name){
        alert('请填写考生姓名');
        return;
      } 
      if(!this.type){
        alert('请选择考题类型');
        return;
      }
      this.axios.post('http://localhost:8888/login', {
        name : this.name,
        type : this.type,
        gender : this.sex
      }).then((data)=>{
        alert(data.data.message);
      }).catch((data)=>{
        alert('考生信息提交失败， 原因：' + data);
      })
      //this.router.push('/exam');
    },
    formCancel : function(){
      location.reload();
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #login{
    background-color:rgba(51,51,51,0.7);
    display:block;
  }
</style>
