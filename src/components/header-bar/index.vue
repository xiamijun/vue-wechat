<!-- @format -->

<template>
  <div>
    <x-header :title='title' :left-options="{showBack:false}" :right-options="{showMore:false}" style="background-color:#000;">
      <div slot="right">
        <i class="iconfont icon-icon_add" @click="addHandler" v-if="this.$route.name==='home'" style="font-size:20px"></i>
        <i class="iconfont icon-icon_addperson" @click="addHandler" v-else-if="this.$route.name==='contact'" style="font-size:20px"></i>
      </div>
    </x-header>
  </div>
</template>

<script>
import { XHeader } from 'vux';
export default {
  name: 'headerBar',
  components: {
    XHeader
  },
  props: {
    title: {
      type: String,
      required: true,
      default: '微信'
    }
  },
  data() {
    return {};
  },
  methods: {
    addHandler() {
      console.log(1);
    }
  }
};
</script>

<style scoped>
</style>
