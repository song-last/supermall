<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <template v-slot:item-icon><i class="iconfont icon-home"></i> </template>
      <template v-slot:item-text>首页</template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
      <template v-slot:item-icon>
        <i class="iconfont icon-fenlei"></i>
      </template>
      <template v-slot:item-text>
        分类
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
      <template v-slot:item-icon>
        <i class="iconfont icon-gouwuche"></i>
      </template>
      <template v-slot:item-text>
        购物车
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="blue">
      <template v-slot:item-icon>
        <i class="iconfont icon-wode"></i>
      </template>
      <template v-slot:item-text>
        我的
      </template>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style></style>
