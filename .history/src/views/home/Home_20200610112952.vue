<template>
  <div id="home">
      <nav-bar>
          <template v-slot:center>购物节</template>
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

</style>
