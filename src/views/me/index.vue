<!-- @format -->

<template>
  <div style="background-color:#f0eff5">
    <Headbar :title="'我'"></Headbar>
    <group>
      <cell title="谢俊" inline-desc="微信号：xiejun" :is-link="true">
        <img src="https://avatars3.githubusercontent.com/u/15966814?s=64&v=4" alt="" slot="icon" class="img-style">
        <img src="../../assets/images/chat-info-qr.png" alt="" class="img-style">
      </cell>
    </group>
    <group>
      <cell title="相册">
        <img src="../../assets/images/me_more-my-album.png" alt="" slot="icon" class="img-style">
      </cell>
      <cell title="收藏">
        <img src="../../assets/images/me_more-my-favorites.png" alt="" slot="icon" class="img-style">
      </cell>
      <cell title="钱包">
        <img src="../../assets/images/me_more-my-bank-card.png" alt="" slot="icon" class="img-style">
      </cell>
      <cell title="卡包">
        <img src="../../assets/images/me_my-card-package-icon.png" alt="" slot="icon" class="img-style">
      </cell>
    </group>
    <group>
      <cell title="表情">
        <img src="../../assets/images/me_more-expression.png" alt="" slot="icon" class="img-style">
      </cell>
    </group>
    <group>
      <cell title="设置">
        <img src="../../assets/images/me_more-setting.png" alt="" slot="icon" class="img-style">
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
  name: 'Me',
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
