
const Buttons = resolve => { require.ensure(['./components/btn/demo.vue'], () => {
    resolve(require('./components/btn/demo.vue'))})}
const List = resolve => { require.ensure(['./components/list/demo2.vue'], () => {
    resolve(require('./components/list/demo.vue'))})}
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
const inputs = resolve => { require.ensure(['./components/bo-input/demo.vue'], () => {
    resolve(require('./components/bo-input/demo.vue'))})}

const select = resolve => { require.ensure(['./components/bo-select/demo.vue'], () => {
    resolve(require('./components/bo-select/demo.vue'))})}

const toast = resolve => { require.ensure(['./components/toast/demo.vue'], () => {
    resolve(require('./components/toast/demo.vue'))})}
const menuVertical = resolve => { require.ensure(['./components/menu-vertical/demo.vue'], () => {
    resolve(require('./components/menu-vertical/demo.vue'))})}
const menusHorizon = resolve => { require.ensure(['./components/menus-horizon/demo.vue'], () => {
    resolve(require('./components/menus-horizon/demo.vue'))})}
const input = resolve => { require.ensure(['./components/bo-input/demo.vue'], () => {
    resolve(require('./components/bo-input/demo.vue'))})}


const drawer = resolve => { require.ensure(['./components/drawer/demo.vue'], () => {
    resolve(require('./components/drawer/demo.vue'))})}

const slider = resolve => { require.ensure(['./components/slider/demo.vue'], () => {
    resolve(require('./components/slider/demo.vue'))})}

const Switch = resolve => { require.ensure(['./components/bo-switch/demo.vue'], () => {
    resolve(require('./components/bo-switch/demo.vue'))})}


const Slide = resolve => { require.ensure(['./components/slide/demo.vue'], () => {
    resolve(require('./components/slide/demo.vue'))})}

const login = resolve => { require.ensure(['./other/login/demo.vue'], () => {
    resolve(require('./other/login/demo.vue'))})}


const seller = resolve => { require.ensure(['./other/seller/demo.vue'], () => {
    resolve(require('./other/seller/demo.vue'))})}

const touch = resolve => { require.ensure(['./other/touch/demo.vue'], () => {
    resolve(require('./other/touch/demo.vue'))})}


export default [{
  path: 'form-input',
  component: input
},{
  path: 'bo-select',
  component: select
},{
  path: 'list',
  component: List
},{
  path: 'listdown',
  component: Listdown
},{
  path: 'listup',
  component: Listup
},{
  path: 'modal',
  component: modal
},{
  path: 'btn',
  component: Buttons
},{
  path: 'form-group',
  component: form
},{
  path: 'tabs',
  component: tabs
},{
  path: 'toast',
  component: toast
},{
  path: 'menu-vertical',
  component: menuVertical
},{
  path: 'menus-horizon',
  component: menusHorizon
},{
  path: 'drawer',
  component: drawer
},{
  path: 'slider',
  component: slider
},{
  path: 'bo-switch',
  component: Switch
},{
  path: 'slide',
  component: Slide
},{
  path: 'login',
  component: login
},{
  path: 'seller',
  component: seller
},{
  path: 'touch',
  component: touch
}]
