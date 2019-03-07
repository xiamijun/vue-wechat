<!-- @format -->

<template>
  <div>
    <x-header title="聊天详情" :right-options="{showMore:false}" style="background-color:#000;">
    </x-header>
    <group>
      <cell style="background-color:white">
        <div slot="icon" class="person-card">
          <img src="../../../../assets/images/contact_top-addgroup.png" alt="" class="img-style">
          <p>{{personName}}</p>
        </div>    
        <div class="add-card" slot="after-title">
          <i class="iconfont icon-icon_add" style="font-size:0.6rem;position: relative;left:0.15rem;top:0.04rem"></i>
        </div>    
      </cell>
    </group>
    <group>
      <x-switch title="置顶聊天"></x-switch>
      <x-switch title="消息免打扰"></x-switch>
    </group>
    <group>
      <cell title="聊天文件" style="background-color:white" :is-link="true"></cell>
    </group>
    <group>
      <cell title="设置当前聊天背景" style="background-color:white" :is-link="true"></cell>
      <cell title="查找聊天内容" style="background-color:white" :is-link="true"></cell>
      
    </group>
    <group>
      <cell title="清空聊天记录" style="background-color:white"></cell>
    </group>
    <group>
      <cell title="投诉" style="background-color:white" :is-link="true"></cell>
    </group>
  </div>
</template>

<script>
import { XHeader, Cell, Group, XSwitch } from 'vux';
export default {
  name: 'chatDetail',
  components: {
    XHeader,
    Cell,
    Group,
    XSwitch
  },
  data() {
    return {
      personName: ''
    };
  },
  created() {
    this.personName = this.$route.query.name;
  }
};
</script>

<style scoped>
.img-style {
  height: 0.9rem;
  width: 0.9rem;
  margin-right: 0.2rem;
}
.person-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.add-card {
  border: 1px solid #000000;
  border-radius: 12%;
  height: 0.9rem;
  width: 0.9rem;
  position: relative;
  bottom: 0.2rem;
  left: 0.5rem;
}
</style>
