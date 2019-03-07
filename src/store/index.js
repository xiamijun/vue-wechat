/** @format */

import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';

import { VUEX_DEFAULT_CONFIG } from '@/config';

Vue.use(Vuex);

export default new Vuex.Store({
  ...VUEX_DEFAULT_CONFIG,
  modules: {
    app
  }
});
