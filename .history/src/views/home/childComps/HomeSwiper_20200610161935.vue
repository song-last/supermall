<template>
  <swiper>
    <template v-slot:default>
      <swiper-item v-for="(item, index) in banners.list" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </template>
  </swiper>
</template>

<script>
  import { Swiper, SwiperItem } from "components/common/swiper"

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default: [],
      },
    },
  }
</script>

<style scoped></style>
