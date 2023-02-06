<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    console.log(import.meta.env.VITE_TEXT);
    //設定環境變數Env Variables and Mode
    //doc: https://vitejs.dev/guide/env-and-mode.html#env-variables-and-modes
    const url = import.meta.env.VITE_PATH;
    //axios的vue3起手式：this.$http.get('').then().catch();
    //以下為ES Lint整理格式
    this.$http
      .get(url)
      .then((res) => {
        console.log(res.data);
        this.data = res.data.results[0];
        console.log(this.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
