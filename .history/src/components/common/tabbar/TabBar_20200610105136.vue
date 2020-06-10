<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TabBar"
};
</script>
<style scoped>
#tabbar {
  display: flex;
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background-color: #f8f8f8;

  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>
