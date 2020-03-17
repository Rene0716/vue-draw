<template>
  <div>
    <div name="inputt">
      <input type="text" placeholder="請輸入姓名" v-model="inputt" @keyup.enter="increasePerson" />
      <button @click="increasePerson" class="plus">+</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "inputt",
  data() {
    return {
      inputt: ""
    };
  },
  methods: {
    increasePerson(e) {
      // eslint-disable-next-line no-console
      // console.log("value", this);
      // eslint-disable-next-line no-console
      // console.log("btnValue", event.target.parentElement.firstChild.value);
      this.$store.commit("updateName", e.target.value);
      this.$store.commit("updateName", e.target.parentElement.firstChild.value);
      e.target.value = "";
      e.target.parentElement.firstChild.value = "";
    }
  }
};
</script>
<style lang="scss" scoped>
input {
  margin-right: 10px;
  width: 150px;
  height: 30px;
  font-size: 16px;
  border: solid 2px #41b883;
  border-radius: 5px;
  outline: none;
  padding-left: 5px;
}
input::placeholder {
  color: #ccc;
}
.plus {
  display: inline-block;
  width: 50px;
  height: 40px;
  font-weight: 700;
  margin: 10px;
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
  justify-content: center;
  box-shadow: 2px 3px 5px 0 #555;
}
.plus:hover {
  box-shadow: 1px 2px 3px 0 #555 inset;
  transition: all 0.5s;
}
button {
  outline: none;
}
</style>
