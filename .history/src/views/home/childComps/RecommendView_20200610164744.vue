<template>
  <div id="recommend-view"></div>
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
