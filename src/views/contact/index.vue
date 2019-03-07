<!-- @format -->

<template>
  <div style="background-color:#f0eff5">
    <Headbar :title="'通讯录'"></Headbar>
    <search
      position="absolute"
      auto-scroll-to-top
      top="146px"
      ref="search"
    >    
    </search>
    <cell title="新的朋友" @click.native="openNewContactHandler" style="background-color:white">
      <img src="../../assets/images/contact_top-friend-notify.png" alt="" slot="icon" class="img-style">
    </cell>
    <cell title="群聊" @click.native="chatGroupHandler" style="background-color:white">
      <img src="../../assets/images/contact_top-addgroup.png" alt="" slot="icon" class="img-style">
    </cell>
    <cell title="标签" style="background-color:white">
      <img src="../../assets/images/contact_top-tag.png" alt="" slot="icon" class="img-style">
    </cell>
    <cell title="公众号" style="background-color:white">
      <img src="../../assets/images/contact_top-offical.png" alt="" slot="icon" class="img-style">
    </cell>
    <group title="A">
      <cell v-for="(item,index) in contactList" :key="index" :title="item" @click.native="openPersonDetailHandler(item)">
        <img src="../../assets/images/contact_top-friend-notify.png" alt="" slot="icon" class="img-style">
      </cell>
    </group>
    <Bottombar></Bottombar>
  </div>
</template>

<script>
import Headbar from '@/components/header-bar';
import Bottombar from '@/components/bottom-bar';
import { Search, Cell, Group } from 'vux';
export default {
  name: 'Home',
  components: {
    Headbar,
    Search,
    Bottombar,
    Cell,
    Group
  },
  data() {
    return {
      contactList: ['啊', '啊啊']
    };
  },
  methods: {
    openNewContactHandler() {
      this.$router.push({
        name: 'newContact'
      });
    },
    chatGroupHandler() {
      this.$router.push({
        name: 'chatGroup'
      });
    },
    openPersonDetailHandler(name) {
      this.$router.push({
        name: 'personDetail',
        query: {
          name: name
        }
      });
    }
  }
};
</script>

<style scoped>
.img-style {
  height: 0.7rem;
  width: 0.7rem;
  margin-right: 0.2rem;
}
</style>
