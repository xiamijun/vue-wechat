/** @format */

const contact = resolve => require(['@/views/contact'], resolve);
const newContact = resolve =>
  require(['@/views/contact/subpage/new-contact'], resolve);
const chatGroup = resolve =>
  require(['@/views/contact/subpage/chat-group'], resolve);
const personDetail = resolve =>
  require(['@/views/contact/subpage/person-detail'], resolve);

export default [
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/newContact',
    name: 'newContact',
    component: newContact
  },
  {
    path: '/chatGroup',
    name: 'chatGroup',
    component: chatGroup
  },
  {
    path: '/personDetail',
    name: 'personDetail',
    component: personDetail
  }
];
