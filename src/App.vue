<template>
  <div id="app"  >
    <app-top-bar/>
    <div class="layout-content">
      <router-view/>
    </div>
  </div>

</template>

<script>





import AppTopBar from "@/AppTopBar";

export default {
  name: 'App',
  components: {
    AppTopBar
  }
}
</script>

<style>
#app {
  text-align: center;
  justify-content: center;


}

</style>
