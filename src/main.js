import Vue from 'vue';
import 'babel-polyfill'
import Test from './Test.vue'
import Movies from './Movies.vue'

new Vue({
  el: '#app',
  ...Movies,
})