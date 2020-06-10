<template>
  <div id="home">
    <!-- 头部栏 -->
    <nav-bar class="home-nav">
      <template v-slot:center>购物</template>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners.list"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>
<script>
  import NavBar from "components/common/navbar/NavBar"
  import HomeSwiper from "./childComps/HomeSwiper"
  import RecommendView from "./childComps/RecommendView"

  import { getHomeMultidata } from "network/home"

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
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
