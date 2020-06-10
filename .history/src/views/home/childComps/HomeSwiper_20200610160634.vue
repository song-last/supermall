<template>
          <swiper>
          <template v-slot:default>
            <swiper-item v-for="(item,index) in banners.list" :key="index">
              <a :href="item.link">
                  <img :src="item.image" alt=""/>
              </a>
            </swiper-item>
          </template>
      </swiper>
</template>

<script>
export default {
    name: "HomeSwiper"
}
</script>

<style scoped>

</style>