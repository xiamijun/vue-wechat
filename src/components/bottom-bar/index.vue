<!-- @format -->

<template>
  <div>
    <tabbar>
      <tabbar-item badge="2" :selected="this.$route.name==='home'" link="/">
        <i slot="icon" class="iconfont icon-icon_sms"></i>
        <span slot="label">微信</span>
      </tabbar-item>
      <tabbar-item link="/contact" :selected="this.$route.name==='contact'">
        <i slot="icon" class="iconfont icon-icon_addresslist"></i>
        <span slot="label">通讯录</span>
      </tabbar-item>
      <tabbar-item show-dot link="/find" :selected="this.$route.name==='find'">
        <i slot="icon" class="iconfont icon-icon_little_taget"></i>
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item link="/me" :selected="this.$route.name==='me'">
        <i slot="icon" class="iconfont icon-icon_signal"></i>
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux';
export default {
  name: 'BottomBar',
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
