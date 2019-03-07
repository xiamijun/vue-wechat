/** @format */

const find = resolve => require(['@/views/find/'], resolve);
const bottle = resolve => require(['@/views/find/bottle/'], resolve);

export default [
  {
    path: '/find',
    name: 'find',
    component: find
  },
  {
    path: '/bottle',
    name: 'bottle',
    component: bottle
  }
];
