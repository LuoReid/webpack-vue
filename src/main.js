import Vue from 'vue';
import 'babel-polyfill'
import Test from './Test.vue'

new Vue({
  el: '#app',
  ...Test,
})