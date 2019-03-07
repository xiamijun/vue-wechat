/**
 * 将秒数转为时间格式
 *
 * @format
 * @param {number} second
 */

//日期对象扩展
Date.prototype.format = function(format) {
  let o = {
    'M+': this.getMonth() + 1, //month
    'd+': this.getDate(), //day
    'h+': this.getHours(), //hour
    'm+': this.getMinutes(), //minute
    's+': this.getSeconds(), //second
    'q+': Math.floor((this.getMonth() + 3) / 3), //quarter
    S: this.getMilliseconds() //millisecond
  };
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      );
    }
  }
  return format;
};

/**
 * 异常处理
 * @param {boolean} condition
 * @param {string} msg
 */
export function assert(condition, msg) {
  if (!condition) throw new Error(`[Apior] ${msg}`);
}

export function pxTorem(value) {
  return window.lib.flexible.px2rem(value);
}
