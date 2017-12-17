<template>
  <div class="col-xs-12 col-sm-push-3 col-sm-6 mt-100">
    <div class="panel panel-default">
      <div class="panel-heading text-center bg-41 tc-white">登陆到管路员中心</div>
      <div class="panel-body">
        <form class="form-horizontal">
          <div class="form-group">
            <label for="account" class="col-sm-3 control-label">帐号：</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="text" placeholder="输入帐号">
            </div>
          </div>
          <div class="form-group">
            <label for="pwd" class="col-sm-3 control-label">密码：</label>
            <div class="col-sm-9">
              <input type="password" class="form-control" id="pwd" placeholder="输入密码">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-3 col-sm-9">
              <div class="checkbox">
                <label>
                  <input type="checkbox"> 记住密码
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-3 col-sm-9">
              <a href="javascript:;" class="btn btn-primary" @click="login">登陆</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      
    }
  },
  methods : {
    login(){
      //处理逻辑
      this.router.push('/leftMenu/list');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .w100p{
    width:100%;
  }
  .h100p{
    height:100%;
  }
  .mt-100{
    margin-top:100px;
  }
  .bg-f5{
    background-color:#f5f5f5;
  }
  .bg-41{
    background-color:#414141;
  }
  .tc-white{
    color:#fff;
  }
</style>
<style>
  body{
      background-color:#f5f5f5;
    }
</style>


