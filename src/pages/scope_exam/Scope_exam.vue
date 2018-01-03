<template>
  <div class="col-xs-12 col-sm-9" v-if="isLoading">
    <loading></loading>
  </div>
  <div class="col-xs-12 col-sm-9" v-else>
    <div class="row">
      <div class="col-xs-12">
        <a class="btn btn-success pull-right" href="javascript:;" data-toggle="modal" data-target="#modal_add">添加考题范围</a>
      </div>
    </div>
    <div class="table-responsive of-visible mt-15">
      <table class="table table-bordered table-striped table-hover table-condensed">
        <thead>
          <tr>
            <th class="text-right v-middle">编号</th>
            <th class="text-center v-middle">范围名称</th>
            <th class="text-center v-middle">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in scopes" :key="item.id">
            <td class="text-right v-middle">{{item.id}}</td>
            <td class="text-center v-middle">{{item.name}}</td>
            <td class="text-center v-middle">
              <div class="btn-group">
                <a href="javascript:;" class="btn btn-primary" @click="setScopeMessage(item.id, item.name)" data-toggle="modal" data-target="#modal_edit">修改</a>
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
    <!-- 添加考题范围 -->
    <div class="modal fade" id="modal_add">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">添加考题范围</h4>
          </div>
          <div class="modal-body">
            <form action="javascript:;">
              <div class="form-group">
                <label for="name">考题范围：</label>
                <input type="text" class="form-control" id="name" placeholder="填写考题范围" v-model="newScope"/>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <a class="btn btn-primary" href="javascript:;" @click="addScope">保存</a>
            <a class="btn btn-default" data-dismiss="modal">关闭</a>
          </div>
        </div>
      </div>
    </div>

    <!-- x修改考题范围名称 -->
    <div class="modal fade" id="modal_edit">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">修改考题范围名称</h4>
          </div>
          <div class="modal-body">
            <form action="javascript:;">
              <div class="form-group">
                <label>考题范围：</label>
                <input type="text" class="form-control" placeholder="填写考题范围" v-model="scopeName"/>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <a class="btn btn-primary" href="javascript:;" @click="editScope">保存</a>
            <a class="btn btn-default" data-dismiss="modal">关闭</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loading from '@/components/loading/Loading';
export default {
  name: 'list_exam',
  data () {
    return {
     isLoading : true,
     scopes : null,
     newScope : null,
     scopeName : '',
     scopeId : 0
    }
  },
  components : {
    loading
  },
  created(){
    this.getScopes();
  },
  methods : {
    //获得所有考题范围
    getScopes(){
      this.axios.get('http://localhost:8888/getScopes').then((result)=>{
        this.scopes = result.data;
        this.isLoading = false;
      })
    },
    //添加新考题范围
    addScope(){
      if(!this.newScope){
        alert('请填写考题范围名称');
        return;
      }
      this.axios.post('http://localhost:8888/addScope', {
        name : this.newScope
      }).then((result)=>{
        alert(result.data.message);
        location.reload();
      }).catch((result)=>{
        alert('考题范围添加失败，原因：' + result);
      })
    },
    //设置修改的考题范围信息字段
    setScopeMessage(id, name){
      this.scopeId = id;
      this.scopeName = name;
    },
    //修改考题范围
    editScope(id){
      this.axios.post('http://localhost:8888/uploadScope', {
        id
      }).then((result)=>{
        console.log(result);
      }).catch((result)=>{
        alert('修改范围名称失败，原因：' + result);
      })
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
  .mt-15{
    margin-top:15px;
  }
  .of-visible{
    overflow: visible;
  }
  .v-middle{
    vertical-align:middle;
  }
</style>
