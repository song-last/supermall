<template>
  <div id="home">
      <nav-bar class="home-nav">
          <template v-slot:center>购物</template>
      </nav-bar>
      <swiper>
          <swiper-item v-for="(item,index) in banners">
              
          </swiper-item>
      </swiper>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"
import {getHomeMultidata} from "network/home"
import {Swiper,SwiperItem} from "components/common/swiper"

export default {
  name: "Home",
  components: {
      NavBar,
      Swiper,
      SwiperItem
  },
  data() {
      return {
          banners: [],
          recommends: []
      }
  },
  created() {
      getHomeMultidata().then(res => {
          this.banners = res.data.banner;
          this.recommends = res.data.recommend;
      })
  }
};
</script>
<style scoped>
    .home-nav {
        background-color: var(--color-tint);
        color: #fff;
    }   
</style>
