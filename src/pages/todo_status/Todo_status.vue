<template>
  <div class="col-xs-12 col-sm-9" v-if="isLoading">
    <loading></loading>
  </div>
  <div class="col-xs-12 col-sm-9" v-else>
    <div class="row">
      <div class="col-xs-12">
        <a class="btn btn-success pull-right" href="javascript:;" data-toggle="modal" data-target="#modal_add">添加状态</a>
      </div>
    </div>
    <div class="table-responsive of-visible mt-15">
      <table class="table table-bordered table-striped table-hover table-condensed">
        <thead>
          <tr>
            <th class="text-right v-middle">编号</th>
            <th class="text-center v-middle">状态名称</th>
            <th class="text-center v-middle" width="200">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in status" :key="item.id">
            <td class="text-right v-middle">{{item.id}}</td>
            <td class="text-center v-middle">{{item.name}}</td>
            <td class="text-center v-middle">
              <div class="btn-group">
                <a href="javascript:;" class="btn btn-primary" data-toggle="modal" data-target="#modal_edit" @click="edit(item.id, item.name)">修改</a>
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
    <!-- 添加事项状态 -->
    <div class="modal fade" id="modal_add">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">添加状态</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal" action="javascript:;">
              <div class="form-group">
                <label for="name" class="col-xs-12 col-sm-3 control-label">状态名称：</label>
                <div class="col-xs-12 col-sm-9">
                  <input type="text" class="form-control" id="name" placeholder="填写状态名称" v-model="addName"/>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <a class="btn btn-primary" href="javascript:;" @click="addStatus">保存</a>
            <a class="btn btn-default" data-dismiss="modal">关闭</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 修改事项状态名称 -->
    <div class="modal fade" id="modal_edit">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">修改状态名称</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal" action="javascript:;">
              <div class="form-group">
                <label for="name" class="col-xs-12 col-sm-3 control-label">状态名称：</label>
                <div class="col-xs-12 col-sm-9">
                  <input type="text" class="form-control" id="name" placeholder="填写状态名称" v-model="editName"/>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <a class="btn btn-primary" href="javascript:;" @click="editStatus">保存</a>
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
     status : null,
     pageCount : 0,
     active : 1,
     limit : 10,
     newTodo : '',
     newStatus : 0,
     addName : '',
     editName : '',
     id : 0,
     isLoading : false
    }
  },
  components : {
    loading
  },
  created(){
    this.getTodoStatus();
  },
  methods : {
    getTodoStatus(){
      this.axios.post('http://localhost:8888/getAllStatus', {
        offset : this.active - 1,
        limit : this.limit
      }).then((result)=>{
        console.log(result);
        this.isLoading = false;
        this.pageCount = Math.ceil(result.data.count / this.limit);
        this.status = result.data.rows;
      }).catch((result)=>{
        this.isLoading = false;
        alert('获取状态列表失败，原因：' + result);
      })
    },
    prevPage : function(){
      if(this.active <= 1){
        return;
      }
      this.active -= 1;
      this.currentPage(this.active);
      this.getTodoStatus();
    },
    nextPage : function(){
      if(this.active >= this.pageCount){
        return;
      }
      this.active += 1;
      this.currentPage(this.active);
      this.getTodoStatus();
    },
    currentPage(index){
      if(index === this.active){
        return 'btn-primary';
      }
      return 'btn-default';
    },
    //添加事项状态
    addStatus(){
      this.axios.post('http://localhost:8888/addStatus', {
        name : this.addName
      }).then((result)=>{
        alert('添加状态成功');
        location.reload();
      }).catch((result)=>{
        alert('添加状态失败，原因：' + result);
      })
    },
    toPage(index){
      this.active = index;
      this.currentPage(index);
      this.getTodos();
    },
    //为this.id,this.editName赋值
    edit(id, name){
      this.id = id;
      this.editName = name;
    },
    //修改状态名称
    editStatus(){
      if(this.id <= 0 || isNaN(this.id)){
        alert('id不合法');
        return;
      }
      if(!this.name){
        alert('请填写状态名称');
        return;
      }
      this.axios.post('http://localhost:8888/updateStatus', {
        id : this.id,
        name : this.editName
      }).then((result)=>{
        alert('状态名称修改成功');
        location.reload();
      }).catch((result)=>{
        alert('修改状态名称失败，原因：' + result);
      })
    },
    //根据id删除考题
    remove(id){
      this.axios.post('http://localhost:8888/removeStatus', {
        id
      }).then((result)=>{
        alert('状态删除成功');
        location.reload();
      }).catch((result)=>{
        alert('删除状态失败，原因：' + result);
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
  .mt-15{
    margin-top:15px;
  }
  .mr-20{
    margin-right:20px;
  }
  .of-visible{
    overflow: visible;
  }
  .v-middle{
    vertical-align:middle;
  }
</style>
