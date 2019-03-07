/** @format */

const home = resolve => require(['@/views/home/'], resolve);
const chatDialogue = resolve =>
  require(['@/views/home/subpage/chatDialogue'], resolve);
const chatDetail = resolve =>
  require(['@/views/home/subpage/chat-detail'], resolve);

export default [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/chatDialogue',
    name: 'chatDialogue',
    component: chatDialogue
  },
  {
    path: '/chatDetail',
    name: 'chatDetail',
    component: chatDetail
  }
];
