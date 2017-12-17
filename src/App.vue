<template>
  <div id="app">
    <new-nav></new-nav>
    <div class="container">
      <div class="row">
        <router-view></router-view>
      </div>
    </div>
    <new-footer></new-footer>
    
  </div>
</template>

<script>
import newNav from '@/components/nav/Nav';
import newFooter from '@/components/footer/Footer';
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
