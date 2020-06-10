<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物</template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>
<script>
  import NavBar from "components/common/navbar/NavBar"
  import HomeSwiper from "./childComps/HomeSwiper"

  import { getHomeMultidata } from "network/home"

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
    },
    data() {
      return {
        banners: [],
        recommends: [],
      }
    },
    created() {
      getHomeMultidata().then((res) => {
        console.log(res)

        this.banners = res.data.banner
        this.recommends = res.data.recommend
      })
    },
  }
</script>
<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
