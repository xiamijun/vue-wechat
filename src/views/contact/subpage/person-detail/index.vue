<!-- @format -->

<template>
  <div>
    <x-header title="详细资料" :left-options="{showBack:true}" :right-options="{showMore:true}" style="background-color:#000;">
    </x-header>
    <group>
      <cell :title="personName" style="background-color:white">
        <img src="../../../../assets/images/contact_top-addgroup.png" alt="" slot="icon" class="img-style">
        <div slot="inline-desc">
          <p>微信号：sss</p>
          <p>昵称：{{personName}}</p>
        </div>
        <i class="iconfont icon-icon_boss" style="font-size:0.3rem;color:#46b6ef" slot="after-title"></i>
      </cell>
    </group>
    <group>
      <cell title="设置备注和标签" style="background-color:white" :is-link="true"></cell>
      <cell title="电话号码" style="background-color:white">
        <span slot="after-title" style="color:blue">
          13333333333
        </span>
      </cell>
    </group>
    <group>
      <cell title="地区" style="background-color:white"></cell>
      <cell title="个人相册" style="background-color:white" :is-link="true"></cell>
      <cell title="更多" style="background-color:white" :is-link="true"></cell>
      </cell>
    </group>
  </div>
</template>

<script>
import { XHeader, Cell, Group, XButton } from 'vux';
export default {
  name: 'personDetail',
  components: {
    XHeader,
    Cell,
    Group,
    XButton
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
</style>
