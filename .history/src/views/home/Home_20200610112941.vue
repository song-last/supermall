<template>
  <div id="home">
      <nav-bar>
          <template v-slot:center></template>
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
