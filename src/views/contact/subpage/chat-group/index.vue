<!-- @format -->

<template>
  <div>
    <x-header title="群聊" :left-options="{showBack:true}" :right-options="{showMore:false}" style="background-color:#000;">
    </x-header>
    <search
      position="absolute"
      auto-scroll-to-top
      top="146px"
      ref="search"
    >        
    </search>
    <cell :title="item.name" v-for="(item,index) in groupList" :key="index" style="background-color:white">
      <img src="../../../../assets/images/contact_top-addgroup.png" alt="" slot="icon" class="img-style">
    </cell>
  </div>
</template>

<script>
import { XHeader, Search, Cell, Group } from 'vux';
export default {
  name: 'ChatGroup',
  components: {
    XHeader,
    Search,
    Cell,
    Group
  },
  data() {
    return {
      groupList: [
        {
          name: '前端交流群'
        },
        {
          name: '前端交流群'
        },
        {
          name: '前端交流群'
        }
      ]
    };
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
