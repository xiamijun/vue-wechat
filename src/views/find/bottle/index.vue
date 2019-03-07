<!-- @format -->

<template>
  <div class="bottle">
    <x-header title="漂流瓶" :right-options="{showMore:false}" style="background-color:#000;">
    </x-header>
    <img src="../../../assets/images/bottle-board.png" alt="" class="bottle-board">
    <ul class="bottle-footer">
      <li v-for="item in menu" :key="item.type" :class="[item.type]">
        <img src="../../../assets/images/bottle-button-throw.png" alt="" v-if="item.type==='throw'">
        <img src="../../../assets/images/bottle-button-fish.png" alt="" v-else-if="item.type==='pick'">
        <img src="../../../assets/images/bottle-button-mine.png" alt="" v-else-if="item.type==='mybottle'">
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { XHeader } from 'vux';
export default {
  name: 'bottle',
  components: {
    XHeader
  },
  data() {
    return {
      menu: [
        {
          type: 'throw',
          name: '扔一个'
        },
        {
          type: 'pick',
          name: '捡一个'
        },
        {
          type: 'mybottle',
          name: '我的瓶子'
        }
      ]
    };
  }
};
</script>

<style scoped>
.bottle {
  background-image: url(../../../assets/images/bottle-bkg.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 13.3rem;
  width: 100%;
  overflow: hidden;
  color: #ffffff;
  font-size: 0.32rem;
}
.bottle-board {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 7.5rem;
}
.bottle-footer {
  display: flex;
  justify-content: space-around;
  text-align: center;
  position: relative;
  top: 10.2rem;
}
.bottle-footer li img {
  width: 1.7rem;
  height: 1.7rem;
}
</style>
