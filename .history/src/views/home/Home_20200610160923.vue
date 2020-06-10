<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物</template>
    </nav-bar>
  </div>
</template>
<script>
  import NavBar from "components/common/navbar/NavBar"
  import { Swiper, SwiperItem } from "components/common/swiper"

  import { getHomeMultidata } from "network/home"

  export default {
    name: "Home",
    components: {
      NavBar,
      Swiper,
      SwiperItem,
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
