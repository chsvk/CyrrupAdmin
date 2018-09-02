<template>
    <div class="login">
        <div class="card">
      <img class="logo" src="../assets/loginLogo.png" alt="">
      <h4 style="text-align:center; margin: 0.7em">Admin Panel Login</h4>
      <input v-model="username" class="appLogin" type="text" placeholder="UserName"><br>
      <input v-model="password" class="appLogin" type="password" placeholder="Password"><br>
      <p style="text-align:center; color: gray;">Remember Me</p>
      <button @click="login">Login</button>
      <p style="text-align:center" class="underline">Forgot Password?</p>
    </div>
    <footer>
      <p>CopyRight <span>CYRRUP</span> &copy;2018</p>
      <p class="vbb">Vehicle Black Box</p>
    </footer>
    </div>
</template>

<script>
import firebase from 'firebase'
import router from '../router.js'
import axios from 'axios'
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
export default {
 router,
  data(){
    return{
      username: '',
      password: ''
    }
  },
  methods: {
      login: function(){
        var vm = this;
      axios.post('https://vapi.cyrrup.com/api/vbb-auth/login/', {
                    "username": this.username,
                    "password": this.password
                }
            ).then(function(e){
                firebase.auth().signInWithCustomToken(e.data.token).then(function(e){
                  vm.$toast("Logged In Succesfully");
                  router.push('/DashBoard');
                }).catch(function(e){
                    console.log(e.message);
                })
                console.log(e);
            }).catch(function(e){
                console.log(e.message);
            })
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100vh;
  background: url('../assets/loginBack.png');
  background-size: 100% 90%;

  footer{
    position: relative;
    top: 94%;
    display: grid;
    grid-template-columns: 50% auto;
    p{
      margin-left: 2em;
      color: gray;
      span{
        color: #F37E38;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
    .vbb{
      text-align: right;
      margin-right: 2em;
      color: gray;
    }
  }

}

.card{
  align-items: center;
  width: 28%;
  padding: 1em;
  background: white;
  position: absolute;
  left: 36%;
  top: 40%;
  transform: translateX(-50%);
  transform: translateY(-50%);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  .logo{
    height: 50px;
    width: 120px;
    position: relative;
    left: 48%;
    transform: translateX(-50%);
    margin: 1em;
  }

  button{
    margin: 0.7em;
    padding: 1em;
    width: 20%;
    position: relative;
    left: 48%;
    transform: translateX(-50%);
    border: none;
    background: #F37E38;
    color: white;
    border-radius: 10%;
  }
  
  p{
    font-size: 0.8em;
    margin: 0.7em;
  }
  
  input{
    color: black;
    border-radius: 10px;
  }

}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.underline{
  text-decoration: underline;
}

.appLogin{
  position: relative;
  width: 60%;
  padding: 1em;
  margin: 0.7em;
  background: #fafafc;
  border: none;
  left: 50%;
  transform: translateX(-50%);
}
</style>

