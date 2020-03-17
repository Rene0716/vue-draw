<template>
  <div class="container">
    <div class="selectArea">
      我要抽
      <select v-model="selectedNum" class="num" v-on:blur="passIndex">
        <option value>請選擇</option>
        <option v-for="(person,index) in getAllPerson" :key="index" :value="index">{{index+1}}</option>
      </select>
      支籤
    </div>
    <router-link to="/record" @click="passIndex" class="lottery">抽獎</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "opt",
  data() {
    return {
      selectedNum: "",
      select: [],
      count: 0
    };
  },
  computed: {
    ...mapGetters(["getAllPerson"])
  },
  methods: {
    add(count) {
      count += 1;
      return count;
    },
    passIndex: function(e) {
      this.count++;
      // eslint-disable-next-line no-console
      // console.log("this.count", this.count);

      var drawQty;
      var realArr = [];
      // copy the array
      const persons = this.$store.state.persons;
      const clonePersons = [...persons];
      drawQty = e.target.value;
      drawQty++;

      //亂數抽籤
      for (var j = 0; j < drawQty; j++) {
        //打亂順序
        var a = Math.floor(Math.random() * clonePersons.length);
        var b = Math.floor(Math.random() * clonePersons.length);
        var c = Math.floor(Math.random() * clonePersons.length);
        var temp = clonePersons[a];
        clonePersons[a] = clonePersons[b];
        clonePersons[b] = temp;
        clonePersons[b] = clonePersons[c];
        clonePersons[c] = temp;

        //抽到的推到新陣列
        realArr.push(temp);
        //如果有相同的不要放到原陣列-->抽到的index從舊陣列中扣除
        clonePersons.splice(clonePersons.indexOf(temp), 1);
      }
      let selected = [];
      selected = realArr;

      //抽籤時間
      let time = new Date().toLocaleString();
      //設定vuex初始狀態-->用action觸發-->store.mutations去做加入紀錄的操作

      this.$store.dispatch("addDraw", {
        drawTime: time,
        drawQty: drawQty,
        drawNames: selected,
        id: parseInt(
          `${new Date().getHours()}${new Date().getMinutes()}${new Date().getSeconds()}`
        )
        // index: this.count++
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}
.selectArea {
  width: 200px;
  font-size: 20px;
}
option {
  border: solid 2px #999;
}
.lottery {
  text-decoration: none;
  width: 80px;
  font-weight: 700;
  padding: 5px;
  align-items: center;
  border-radius: 5px;
  font-size: 20px;
  box-sizing: border-box;
  background-color: #41b883;
  color: #fff;
  border: solid 1px #41b883;
  cursor: pointer;
  text-align: center;
  box-shadow: 2px 3px 5px 0 #555;
}
.lottery:hover {
  box-shadow: 1px 2px 3px 0 #555 inset;
  transition: all 0.3s;
}
@media screen and(max-width:1200px) {
  .container {
    width: 100%;
  }
  .selectArea {
    width: 100%;
    display: block;
  }
}
.num {
  width: 65px;
  outline: none;
}
button {
  outline: none;
}
</style>