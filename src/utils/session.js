/** @format */

export function setSession(key, value) {
  return sessionStorage.setItem(key, value);
}

export function getSession(key) {
  return sessionStorage.getItem(key);
}
