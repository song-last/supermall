<template>
  <div id="recommend-view">
    <div v-for="(item, index) in recommends" :key="index">
      <a :href="item.link"></a>
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
<style scoped></style>
