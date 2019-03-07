<!-- @format -->

<template>
  <div style="background-color:#f0eff5">
    <Headbar :title="'发现'"></Headbar>
    <group>
      <cell title="朋友圈" :is-link="true">
        <img src="../../assets/images/find-album-reflash-icon.png" alt="" slot="icon" class="img-style">
      </cell>
    </group>
    <group>
      <cell title="扫一扫" :is-link="true">
        <img src="../../assets/images/find_icon-qrcode.png" alt="" slot="icon" class="img-style">
      </cell>
      <cell title="摇一摇" :is-link="true">
        <img src="../../assets/images/find_icon-shake.png" alt="" slot="icon" class="img-style">
      </cell>
    </group>
    <group>
      <cell title="漂流瓶" :is-link="true" link="bottle">
        <img src="../../assets/images/find_icon-bottle.png" alt="" slot="icon" class="img-style">
      </cell>
    </group>
    <group>
      <cell title="购物" :is-link="true" link="https://www.jd.com/">
        <img src="../../assets/images/find_icon-shopping.png" alt="" slot="icon" class="img-style">
      </cell>
      <cell title="游戏" :is-link="true">
        <img src="../../assets/images/find_icon-moregame.png" alt="" slot="icon" class="img-style">
      </cell>
    </group>
    <Bottombar></Bottombar>
  </div>
</template>

<script>
import Headbar from '@/components/header-bar';
import Bottombar from '@/components/bottom-bar';
import { Cell, Group } from 'vux';
export default {
  name: 'Home',
  components: {
    Headbar,
    Bottombar,
    Cell,
    Group
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.img-style {
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.2rem;
}
</style>
