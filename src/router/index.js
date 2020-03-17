import Vue from "vue";
import VueRouter from "vue-router";
import opt from "../components/opt.vue";
import person from "../components/person.vue";
import inputt from "../components/inputt.vue";
import Record from "../views/Record.vue";
// import person from "../components/person.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: inputt,
      person: person,
      opt: opt
    },
    // children: [
    //   {
    //     path: "person",
    //     name: "person",
    //     component: () => import("../views/Home.vue")
    //   }
    // ],
    props: true
  },
  {
    path: "/record",
    name: "record",
    component: Record
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
