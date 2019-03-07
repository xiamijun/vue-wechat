/** @format */

const me = resolve => require(['@/views/me/'], resolve);

export default [
  {
    path: '/me',
    name: 'me',
    component: me
  }
];
