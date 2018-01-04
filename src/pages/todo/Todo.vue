<template>
  <div class="col-xs-12 col-sm-9" v-if="isLoading">
    <loading></loading>
  </div>
  <div class="col-xs-12 col-sm-9" v-else>
    <div class="row">
      <div class="col-xs-12">
        <a class="btn btn-success pull-right" href="javascript:;" data-toggle="modal" data-target="#modal_add">添加待办事项</a>
      </div>
    </div>
    <div class="table-responsive of-visible mt-15">
      <table class="table table-bordered table-striped table-hover table-condensed">
        <thead>
          <tr>
            <th class="text-right v-middle">编号</th>
            <th class="text-center v-middle">事项</th>
            <th class="text-center v-middle">进度</th>
            <th class="text-center v-middle" width="200">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in todos" :key="item.id">
            <td class="text-right v-middle">{{item.id}}</td>
            <td class="text-center v-middle">{{item.option}}</td>
            <td class="text-center v-middle">{{item.status}}</td>
            <td class="text-center v-middle">
              <div class="btn-group">
                <a href="javascript:;" class="btn btn-primary" @click="edit(item.id)">完成</a>
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
    <!-- 添加考题范围 -->
    <div class="modal fade" id="modal_add">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">添加待办事项</h4>
          </div>
          <div class="modal-body">
            <form action="javascript:;">
              <div class="form-group">
                <label for="name">事项名称：</label>
                <input type="text" class="form-control" id="name" placeholder="填写事项名称" v-model="newTodo"/>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <a class="btn btn-primary" href="javascript:;" @click="addTodo">保存</a>
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
     todos : [{
       id : 2,
       option : '密码功能开发',
       status : '待办'
     },{
       id : 1,
       option : '其他功能开发',
       status : '已完成'
     }],
     pageCount : 0,
     active : 1,
     limit : 10,
     newTodo : '',
     isLoading : false
    }
  },
  components : {
    loading
  },
  created(){
    //this.getTodos();
  },
  methods : {
    getTodos(){
      this.axios.post('http://localhost:8888/getExams', {
        offset : this.active - 1,
        limit : this.limit
      }).then((result)=>{
        this.isLoading = false;
        this.pageCount = Math.ceil(result.data.count / this.limit);
        this.exams = result.data.rows;
      }).catch((result)=>{
        this.isLoading = false;
        alert('获取考题列表失败，原因：' + result);
      })
    },
    prevPage : function(){
      if(this.active <= 1){
        return;
      }
      this.active -= 1;
      this.currentPage(this.active);
      this.getTodos();
    },
    nextPage : function(){
      if(this.active >= this.pageCount){
        return;
      }
      this.active += 1;
      this.currentPage(this.active);
      this.getTodos();
    },
    currentPage(index){
      if(index === this.active){
        return 'btn-primary';
      }
      return 'btn-default';
    },
    addTodo(){

    },
    toPage(index){
      this.active = index;
      this.currentPage(index);
      this.getTodos();
    },
    edit(id){
      this.router.push('/leftMenu/modify?id=' + id);
    },
    //根据id删除考题
    remove(id){
      this.axios.post('http://localhost:8888/removeExam', {
        id
      }).then((result)=>{
        alert('考题删除成功');
        location.reload();
      }).catch((result)=>{
        alert('删除考题失败，原因：' + result);
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
  .of-visible{
    overflow: visible;
  }
  .v-middle{
    vertical-align:middle;
  }
</style>
