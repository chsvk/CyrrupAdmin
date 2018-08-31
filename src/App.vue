<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import firebase from 'firebase'
import router from './router.js'
import axios from 'axios'
export default {
  router,
  data(){
    return{
      username: '',
      password: ''
    }
  },
  mounted(){
    this.checkUser();
  },
  methods: {
    checkUser: function(){
      firebase.auth().onAuthStateChanged(function(user){
        if(user){
          router.push('/DashBoard');
        }else{
          router.push('/login');
          console.log('No Login');
        }
      });
    },
  }
}
</script>


<style lang="scss">
@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900);
*{
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
}

</style>
