<template>
  <div class="recommend">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommend-item"
    >
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        },
      },
    },
  }
</script>
<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    border: ;
  }
  .recommend-item {
    flex: 1;
  }
  img {
    width: 65px;
    height: 65px;
  }
</style>
