<!-- @format -->

<template>
  <div style="background-color:#f0eff5">
    <x-header :title="title" :left-options="{backText: ''}" :right-options="{showMore:true}" style="background-color:#000;" @on-click-more="moreHandler">
    </x-header>
    <div class="msg-content">
    </div>
    <cell-box>
      <div class="input-area">
        <i class="iconfont icon-icon_im_voice" style="font-size:0.5rem;margin-left:0.15rem"></i>
        <input type="text" style="margin-left:0.15rem;width:5rem">
        <i class="iconfont icon-icon_im_face" style="font-size:0.5rem;margin-left:0.15rem"></i>
        <i class="iconfont icon-icon_roundadd" style="font-size:0.5rem;margin-left:0.15rem"></i>
      </div>        
    </cell-box>
  </div>
</template>

<script>
import { XHeader, Cell, Group } from 'vux';
export default {
  name: 'chatDialogue',
  components: {
    XHeader,
    Cell,
    Group
  },
  data() {
    return {
      title: this.$route.query.name
    };
  },
  methods: {
    moreHandler() {
      this.$router.push({
        name: 'chatDetail',
        query: {
          name: this.title
        }
      });
    }
  }
};
</script>

<style scoped>
.img-style {
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.2rem;
}
.input-area {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  height: 0.8rem;
  background-color: white;
}
.msg-content {
  height: 11.6rem;
  width: 100%;
  background-color: #efeff4;
}
.content-input {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
