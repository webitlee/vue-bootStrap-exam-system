<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div id="login" class="modal fade in" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title text-center">输入考生信息</h4>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                  <div class="form-group">
                    <label for="ename" class="col-xs-12 col-sm-3 control-label">姓名：</label>
                    <div class="col-xs-12 col-sm-9">
                      <input type="text" class="form-control" id="ename" placeholder="输入姓名">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-xs-12 col-sm-3 control-label">性别：</label>
                      <div class="col-xs-12 col-sm-9">
                        <label class="radio-inline">
                          <input v-model="sex" type="radio" name="sex" value="1"/> 男
                        </label>
                        <label class="radio-inline">
                          <input  v-model="sex" type="radio" name="sex" value="2"/> 女
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
   </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      sex : 1,
      types : ['--请选择--', '前端', 'java', 'Node.js'],
      type : 0
    }
  },
  methods : {
    formSubmit : function(){
      console.log(this.axios);
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
