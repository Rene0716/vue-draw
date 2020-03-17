<template>
  <div>
    <div name="person">
      <div class="container">
        <div class="card">
          <ul class="member">
            <li v-for="(person,index) in getAllPerson" :key="person">
              <span :value="person">{{person}}</span>
              <a href="#" @click="decreasePerson(index)" class="del">x</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "person",
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["getAllPerson"])
  },
  methods: {
    decreasePerson(value) {
      // eslint-disable-next-line no-console
      // console.log("value", value);
      // eslint-disable-next-line no-console
      // console.log("this", this);

      this.$store.commit("removeName", value);
    }
  }
};
</script>

<style lang="scss" scoped>
.again {
  width: 100px;
  display: block;
  margin: 10px auto;
  height: 25px;
  line-height: 25px;
}
@media screen and (max-width: 1200px) {
  .card {
    width: 100%;
  }
  ul {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    font-size: 0;
    padding: 10px 0;
    box-sizing: border-box;
    flex-wrap: wrap;
    text-align: center;
  }

  li {
    min-width: 45%;
    min-height: 50px;
    margin: 10px auto;
    padding: 5px;
    align-items: center;
    border-radius: 5px;
    font-size: 20px;
    box-sizing: border-box;
    color: #41b883;
    border: solid 1px #41b883;
    background-color: transparent;
    overflow: hidden;
    font-weight: 600;
    display: flex;
    text-align: center;
    cursor: unset;
    justify-content: center;
    flex-wrap: wrap;
  }
  span {
    text-align: center;
    flex-basis: 70%;
  }
  .del {
    text-decoration: none;
    flex-basis: 30%;
    min-height: 50px;
    line-height: 50px;
    font-size: 30px;
    color: #fac;
    cursor: pointer;
  }
}
@media screen and (min-width: 1201px) {
  ul {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    font-size: 0;
    padding: 30px;
    box-sizing: border-box;
    flex-wrap: wrap;
    text-align: center;
  }

  li {
    min-width: 15%;
    width: 150px;
    margin: 10px;
    padding: 5px;
    align-items: center;
    border-radius: 5px;
    font-size: 20px;
    box-sizing: border-box;
    color: #41b883;
    border: solid 1px #41b883;
    background-color: transparent;
    overflow: hidden;
    font-weight: 600;
    display: flex;
    text-align: center;
    cursor: unset;
    justify-content: center;
    flex-wrap: wrap;
  }

  span {
    text-align: center;
    flex-basis: 70%;
  }
  .card-footer,
  .card-header {
    background-color: transparent;
    border: none;
    font-weight: 600;
  }
  .container {
    width: 100%;
  }
  .card {
    width: 50%;
    margin: 0 auto;
    margin-top: 20px;
  }
  .card-body {
    border: none;
    width: 100%;
  }
  .circle {
    width: 10%;
    border: solid 1px #ddd;
    text-align: center;
    border-radius: 50%;
    background-color: #fca;
    color: #fff;
    display: inline-block;
    line-height: 40px;
    min-height: 40px;
  }
  .txt {
    height: 50px;
  }
  .time {
    text-align: right;
    padding: 10px;
  }
  .del {
    text-decoration: none;
    flex-basis: 30%;
    color: #fac;
  }
}
.del {
  text-decoration: none;
  flex-basis: 30%;
  font-size: 24px;
  min-height: 20px;
  color: #fac;
  cursor: pointer;
  text-shadow: 0px 1px 0 #999;
}
.del:hover {
  text-shadow: 1px 0px 0 #999, 1px 0px 0 #777, 1px 0px 0 #555;
}
</style>

