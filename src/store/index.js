import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import $ from "jquery";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    persons: [
      "小孟",
      "Wendy",
      "Ivy",
      "欣儀",
      "子恩",
      "振賢",
      "婕予",
      "Apo",
      "Kiwi",
      "Darren",
      "Moti",
      "Rene",
      "Enoki"
    ],
    drawList: []
  },

  mutations: {
    updateName(state, person) {
      if ($.inArray(person, state.persons) == -1 && person !== "") {
        state.persons.push(person);
        // eslint-disable-next-line no-console
        // console.log("updateNames:", state.persons);

        // eslint-disable-next-line no-console
        // console.log("index", state.persons.indexOf(state.persons[index]));
        // if (person == state.persons.indexOf(state.persons[index])) {
        //   alert("已經輸入過囉～");
        // }
      }
    },
    removeName(state, index) {
      // eslint-disable-next-line no-console
      // console.log(
      //   "state.persons.indexOf(person)",
      //   state.persons.indexOf(state.persons[index])
      // );
      // 點哪個刪哪個
      state.persons.splice(state.persons.indexOf(state.persons[index]), 1);
    },
    //做加入歷史紀錄的設定
    setDraw(state, drawList) {
      state.drawList.push(drawList);
      localStorage["drawList"] = JSON.stringify(state.drawList);
      // eslint-disable-next-line no-console
      // console.log('localStorage["drawList"]', localStorage["drawList"]);
    },

    setDrawList(state, drawList) {
      state.drawList = drawList;
    }
  },
  actions: {
    //person.html獲取所有參加抽籤的人名
    getPersons(context) {
      axios.get("./index.js").then(res => {
        context.dispatch("getdata", res);
      });
    },
    //增加抽籤的人
    increasePerson(context, person) {
      context.commit("updateName", person);
    },
    //移除參加抽籤的人
    decreasePerson(context, person) {
      context.commit("removeName", person);
    },

    //加入歷史紀錄
    addDraw({ commit }, draw) {
      return commit("setDraw", draw);
    },

    //拿到抽籤的列表
    getDrawList({ commit }) {
      if (localStorage.getItem("drawList")) {
        let drawList = JSON.parse(localStorage.getItem("drawList"));
        return commit("setDrawList", drawList);
      }
    }
  },
  getters: {
    getAllPerson(state) {
      return state.persons;
    },
    //最後更新完的抽籤列表狀態
    finalList(state) {
      JSON.stringify(state.drawList.drawNames);
      return state.drawList;
    }
  },
  modules: {}
});
