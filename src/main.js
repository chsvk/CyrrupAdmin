import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
import VueProgress from 'vue-progress'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VueSpinners from 'vue-spinners'

Vue.use(VueSpinners)
Vue.use(VueProgress)
Vue.use(Toast, {
    type: 'center',
    duration: 3000,
    wordWrap: true,
    width: '150px'
});

Vue.config.productionTip = false
Vue.use(VueChartkick, {adapter: Chart})
Vue.use(VueFire)

firebase.initializeApp({
  apiKey: "AIzaSyAJYfNfeuDpFqNacL6Ah1yPPOGUmkf77u8",
  authDomain: "vbb-dev.firebaseapp.com",
  databaseURL: "https://vbb-dev.firebaseio.com",
  projectId: "vbb-dev",
})
export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
