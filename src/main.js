import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Element from 'element-ui'
import firebase from 'firebase'
Vue.use(Element)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCOxEBk2sQ86nrELY8eBTqy2469xYsEYWs",
  authDomain: "torrestechnology-56ac8.firebaseapp.com",
  projectId: "torrestechnology-56ac8",
  storageBucket: "torrestechnology-56ac8.appspot.com",
  messagingSenderId: "427653253997",
  appId: "1:427653253997:web:0001897d0c95d77fc2e864"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
