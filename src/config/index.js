/** @format */

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
  timeout: 20000,
  maxContentLength: 2000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'http://172.16.16.53:8081/sparkle-admin'
      : '/music_assessment_portal'
};

// 开启请求参数打印
export const CONSOLE_REQUEST_ENABLE = true;
// 开启响应参数打印
export const CONSOLE_RESPONSE_ENABLE = true;

// Router 默认配置
export const ROUTER_DEFAULT_CONFIG = {
  mode: 'hash',
  base: '/'
};

// API 默认配置
export const API_DEFAULT_CONFIG = {
  // mockBaseURL: ' https://easy-mock.com/mock/5c7c7fb4713ac708e3dd122c/wechat', // mock地址
  mockBaseURL: 'http://yapi.demo.qunar.com/mock/53139/vue-wechat', // mock地址
  mock: true, // 是否开启mock
  debug: false, // 是否开启debug模式
  sep: '/' // 接口调用分隔符
};

// vuex 默认配置
export const VUEX_DEFAULT_CONFIG = {
  strict: process.env.NODE_ENV !== 'production'
};
