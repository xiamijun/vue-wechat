<!-- @format -->

<template>
  <div>
    <Headbar :title="'微信'"></Headbar>
    <search
      position="absolute"
      auto-scroll-to-top
      top="146px"
      ref="search"
    >    
    </search>
    <cell :title="item.name" :inline-desc="item.message" v-for="item in messageList" :key="item.name" @click.native="openDialogue(item.name)" style="background-color:white">
      <img src="../../assets/images/contact_top-addgroup.png" alt="" slot="icon" class="img-style">
      <span>{{item.time}}</span>
    </cell>
    <Bottombar></Bottombar>
  </div>
</template>

<script>
import Headbar from '@/components/header-bar';
import Bottombar from '@/components/bottom-bar';
import { Search, Cell } from 'vux';
export default {
  name: 'Home',
  components: {
    Headbar,
    Search,
    Bottombar,
    Cell
  },
  data() {
    return {
      messageList: []
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.$api['home/messageList']().then(data => {
        this.messageList = data.data.messageList;
      });
    },
    openDialogue(name) {
      this.$router.push({
        name: 'chatDialogue',
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
