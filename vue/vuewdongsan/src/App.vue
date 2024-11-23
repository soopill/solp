<template>
  <div>
    <div class="menu">
      <a v-for="(원하는것, i) in 메뉴들" :key="i">{{ 원하는것 }}</a>
    </div>
    <div>
      <h4>~~원룸</h4>
      <p>~~만원</p>
      <button @click="increase">허위매물 신고</button>
      <span>신고수 : {{ 신고수 }}</span>
    </div>
    <div>
      <h4>11원룸</h4>
      <p>11만원</p>
    </div>
    <div>
      <h4>22원룸</h4>
      <p>22만원</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      신고수: 0,
      메뉴들: ["Home", "Product", "About"],
      product: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  methods: {
    increase() {
      this.신고수 += 1;
    },
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
