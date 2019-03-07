/** @format */

export default {
  name: /^[a-zA-Z0-9\u4e00-\u9fa5¡¤]*$/,
  password: /^(((?=.*[0-9])(?=.*[a-zA-Z])|(?=.*[0-9])(?=.*[^\s0-9a-zA-Z])|(?=.*[a-zA-Z])(?=.*[^\s0-9a-zA-Z]))[^\s]+)$/,
  phone: /^1[3456789]\d{9}$/,
  validCode: /[0-9]{4}/,
  msgCode: /[0-9]{6}/
};
