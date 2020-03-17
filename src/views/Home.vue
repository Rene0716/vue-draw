<template>
  <div class="enterbar">
    <component :is="inputt"></component>
    <component :is="person"></component>
    <component :is="opt"></component>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue"

import inputt from "../components/inputt.vue";
import person from "../components/person.vue";
import opt from "../components/opt.vue";
export default {
  name: "home",
  components: {
    inputt,
    person,
    opt
  }
};
</script>