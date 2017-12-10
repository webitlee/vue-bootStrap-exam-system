<template>
  <div id="app">
    <new-nav></new-nav>
    <router-view></router-view>
    <new-footer></new-footer>
    
  </div>
</template>

<script>
import newNav from '@/pages/nav/Nav';
import newFooter from '@/pages/footer/Footer';
export default {
  name: 'app',
  components : {
    newNav,
    newFooter
  }
}
</script>

<style>

</style>
