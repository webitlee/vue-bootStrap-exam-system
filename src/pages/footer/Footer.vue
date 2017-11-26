<template>
  <footer class="navbar navbar-inverse navbar-fixed-bottom">
    <div class="container">
      <ul class="mt-20 mb-20 ts-14">
        <li class="inline-block mr-20"><a class="tc-999" href="javascript:;">我的CSDN博客</a></li>
        <li class="inline-block mr-20"><a class="tc-999" href="javascript:;">GitHub 仓库</a></li>
        <li class="inline-block mr-20"><a class="tc-999" href="javascript:;">个人博客</a></li>
        <li class="inline-block"><a class="tc-999" href="javascript:;">邮箱：webitlee@163.com</a></li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'footer',
  data () {
    return {
      
    }
  }
}
</script>
<style scoped>
  #logo{
      width:20px;
      height:20px;
  }
  .inline-block{
      display:inline-block;
  }
  .mr-20{
    margin-right:20px;
  }
  .mt-20{
    margin-top:20px;
  }
  .mb-20{
      margin-bottom:20px;
  }
  .ts-14{
      font-size:14px;
  }
  .tc-999{
      color:#999 !important;
  }
</style>
