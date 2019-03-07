<!-- @format -->

<template>
  <div class="new-contact">
    <x-header title="新的朋友" :left-options="{showBack:true,backText:'通讯录'}" :right-options="{showMore:false}" style="background-color:#000;">
      <span slot="right">
        添加朋友
      </span>
    </x-header>
    <search
      position="absolute"
      auto-scroll-to-top
      top="146px"
      ref="search"
    >    
    </search>
    <div class="add-phone">
      <i class="iconfont icon-icon_mobilephone" style="font-size:0.8rem;color:#04be02"></i>
      添加手机联系人
    </div>
    <group>
      <cell :title="item.name" :inline-desc="item.message" v-for="item in newContactList" :key="item.name" style="background-color:white">
        <img src="../../../../assets/images/contact_top-addgroup.png" alt="" slot="icon" class="img-style">
        <template v-if="item.status==='未响应'">
          <x-button mini type="primary">接受</x-button>
        </template>
        <span v-else>{{item.status}}</span>
      </cell>
    </group>
  </div>
</template>

<script>
import { XHeader, Search, Cell, Group, XButton } from 'vux';
export default {
  name: 'newContact',
  components: {
    XHeader,
    Search,
    Cell,
    Group,
    XButton
  },
  data() {
    return {
      newContactList: []
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.$api['contact/getNewContact']().then(data => {
        this.newContactList = data.data.newContactList;
      });
    }
  }
};
</script>

<style scoped>
.add-phone {
  height: 2rem;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #929292;
}
.new-contact {
  background-color: #efeff4;
}
.img-style {
  height: 0.7rem;
  width: 0.7rem;
  margin-right: 0.2rem;
}
</style>
