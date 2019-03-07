/**
 * @format
 * @description 对字符串进行rsa加密
 * @param {string} newStr
 */

import { JSEncrypt } from 'jsencrypt';
export function getRSAword(newStr) {
  let publicKey = `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7/DW0QadIf1YtyKImyA41D9s8FQ5E6Hx
ACF7uRfbMct4Cfbr2cUt9IaNuBBnagyy0Sr8taILajCPjnGpXreYLZsOoN0g6U+6N9C0n/jjq44e
YEwHZiLI3Emis1j0+4fRUYz3x8zgu7F21iNC/OjwlCOtJwwqfPFSF9iqsp2vD8omyHKOfb3nZ7AD
tVdZohQGcsY4GeXaoroHG75ANkNifeJ+1K0tsQ61nSQ3xoL17wm2PFvsUe3/g3grDN6YC0PYWdKT
YyW5zbxEQ9KX54Nif2b+j7b321zQLaieSi1R0kxeLZEEJNXF4KE9W78kUJNgchY4f6spn6+j5hId
xrDCXQIDAQAB`; // 从后台获取公钥，这里省略，直接赋值
  let encryptor = new JSEncrypt(); // 新建JSEncrypt对象
  encryptor.setPublicKey(publicKey); // 设置公钥
  let rsaPassWord = encryptor.encrypt(newStr); // 对密码进行加密
  return rsaPassWord;
}
