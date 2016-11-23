const Buttons = resolve => { require.ensure(['./components/btn/demo.vue'], () => {
    resolve(require('./components/btn/demo.vue'))})}
const Listdown = resolve => { require.ensure(['./components/list/demo2.vue'], () => {
    resolve(require('./components/list/demo2.vue'))})}
const Listup = resolve => { require.ensure(['./components/list/demo3.vue'], () => {
    resolve(require('./components/list/demo3.vue'))})}
const modal = resolve => { require.ensure(['./components/modal/demo.vue'], () => {
    resolve(require('./components/modal/demo.vue'))})}
const form = resolve => { require.ensure(['./components/form-group/demo.vue'], () => {
    resolve(require('./components/form-group/demo.vue'))})}
const tabs = resolve => { require.ensure(['./components/tabs/demo.vue'], () => {
    resolve(require('./components/tabs/demo.vue'))})}
const inputs = resolve => { require.ensure(['./components/form-input/demo.vue'], () => {
    resolve(require('./components/form-input/demo.vue'))})}

const toast = resolve => { require.ensure(['./components/toast/demo.vue'], () => {
    resolve(require('./components/toast/demo.vue'))})}

export default [{
  path: 'listdown',
  component: Listdown
},{
  path: 'listup',
  component: Listup
},{
  path: 'modal',
  component: modal
},{
  path: 'buttons',
  component: Buttons
},{
  path: 'form',
  component: form
},{
  path: 'tabs',
  component: tabs
},{
  path: 'toast',
  component: toast
}]
