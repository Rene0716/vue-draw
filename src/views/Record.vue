<template>
  <div name="record">
    <div class="row last">
      <router-link to="/" class="again">再抽一次</router-link>
    </div>
    <div class="container">
      <div class="col" v-for="(draw,index) in drawList" :key="index">
        <div class="card">
          <div class="row">
            <h3>
              第
              <span class="circle">{{index+1}}</span>
              輪
            </h3>
          </div>
          <div class="row second">
            <div class="time">{{draw.drawTime}}</div>
            <p>
              抽出的籤數：
              <span>{{draw.drawQty}}</span>
            </p>
          </div>
          <div class="row third">
            <p>抽出的人有：</p>
            <ul>
              <li v-for="name in draw.drawNames" :key="name" class="members">
                <p>{{name}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
// import { mapGetters } from "vuex";
export default {
  name: "member",
  data() {
    return {};
  },
  mounted() {
    //掛載抽籤列表到歷史紀錄頁面上
    this.$store.dispatch("getDrawList");
  },
  computed: {
    drawList() {
      // eslint-disable-next-line no-console
      // console.log(store.getters.finalList);

      //獲取最後的抽籤列表紀錄
      return store.getters.finalList.slice().reverse();
    }
  }
  // Vue.filter('reverse', function(array){
  //   return array.slice().reverse();
  // })

  // filters: {
  //   reverse: function(value) {
  //     var valArr = [];
  //     valArr.push(value).reverse();
  //     // value = value.reverse();
  //     // eslint-disable-next-line no-console
  //     console.log("valArr", valArr);
  //     // return value;
  //   }
  // }
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px 0;

    margin: 0 auto;
    box-sizing: border-box;
    justify-content: center;
  }
  li {
    width: 30%;
    border: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    min-height: 50px;
  }
  h3 {
    font-size: 0;
    font-size: 16px;
    text-align: left;
  }
  .circle {
    display: inline-block;
    min-width: 30px;
    min-height: 30px;
    line-height: 30px;
    margin-top: 5px;
    border: solid 2px #41b883;
    background-color: #41b883;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
  .col {
    width: 30%;
    border: solid 1px #41b883;
    border-radius: 10px;
    box-shadow: 5px 2px 7px 0 #999;
    margin: 20px;
    padding: 10px;
    box-sizing: border-box;
  }
  .container {
    display: flex;
    margin: 20px;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .second {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    // padding: 10px 0;
  }
  .time {
    align-self: center;
    font-weight: 700;
  }
  .third > p {
    text-align: left;
    padding-left: 35px;
  }
  .second span {
    font-weight: 700;
    font-size: 22px;
    color: #41b883;
  }
  .members {
    font-weight: 700;
  }
  .members p {
    border: solid 2px #41b883;
    border-radius: 5px;
    width: 100px;
    min-height: 30px;
    margin: 10px;
    box-sizing: border-box;
  }
  .again {
    text-decoration: none;
    width: 200px;
    background-color: #41b883;
    padding: 10px;
    color: #fff;
    border-radius: 5px;
    font-weight: 700;
    box-shadow: 2px 3px 5px 0 #555;
  }
  .again:hover {
    box-shadow: 1px 2px 3px 0 #555 inset;
    transition: all 0.3s;
  }
  .last {
    padding-bottom: 20px;
  }
}

@media screen and (max-width: 767px) {
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px 0;
    box-sizing: border-box;
  }
  li {
    width: 30%;
    border: none;
    display: flex;
    flex-wrap: wrap;
    min-height: 50px;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
  }
  h3 {
    font-size: 0;
    font-size: 16px;
    text-align: left;
  }
  .circle {
    display: inline-block;
    min-width: 30px;
    min-height: 30px;
    line-height: 30px;
    margin-top: 5px;
    border: solid 2px #41b883;
    background-color: #41b883;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
  .col {
    width: 100%;
    border: solid 1px #41b883;
    border-radius: 10px;
    box-shadow: 5px 2px 7px 0 #999;
    margin: 20px 0;
    padding: 10px;
    box-sizing: border-box;
  }
  .container {
    width: 98%;
    display: flex;
    margin: 20px 0;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin: 0 auto;
  }
  .second {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    // padding: 10px 0;
  }
  .time {
    align-self: center;
    font-weight: 700;
  }
  .third > p {
    text-align: left;
    // padding-left: 35px;
    padding: 0 10%;
  }
  .second span {
    font-weight: 700;
    font-size: 22px;
    color: #41b883;
  }
  .members {
    font-weight: 700;
  }
  .members p {
    border: solid 2px #41b883;
    border-radius: 5px;
    width: 100px;
    min-height: 30px;
    margin: 10px;
    box-sizing: border-box;
  }
  .again {
    text-decoration: none;
    width: 200px;
    background-color: #41b883;
    padding: 10px;
    color: #fff;
    border-radius: 5px;
    font-weight: 700;
  }
  .last {
    padding: 20px 0;
  }
}
</style>
