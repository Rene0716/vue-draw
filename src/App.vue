<template>
  <div id="app">
    <div id="nav">
      <!--<router-link to="/">首頁</router-link>|-->
      <router-link to="/record">
        歷史紀錄
        <!--<router-view name="record"></router-view>-->
      </router-link>
    </div>
    <router-view />
    <router-view name="person" />
    <router-view name="opt" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import person from "@/components/person.vue";
// export default {
//   name: "home",
//   components: {
//     person
//   }
// };
</script>
