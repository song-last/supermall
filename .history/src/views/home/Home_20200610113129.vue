<template>
  <div id="home">
      <nav-bar class="home-nav">
          <template v-slot:center>购物</template>
      </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"

export default {
  name: "Home",
  components: {
      NavBar
  }
};
</script>
<style scoped>
    .home-nav {
        background-color: ;
    }
</style>
