<template>
    <div class="dashnav">
        <img src="../assets/dashboard_logo.png" alt="" srcset="">
        <div class="search">
            <input type="text">
            <img src="../assets/dashboard_search.png" alt="">
        </div>
        <div class="alerts">
            <img src="../assets/menu_alerts_active.png" alt="">
        </div>
        <div class="user">
            <p>Hello <span>User</span></p>
            <div class="dropdown">  
            <img @click="logout" src="../assets/dashboard_user_image.png" alt="">
            <p class="logThis">Logout</p>
            </div>

        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import router from '../router.js'
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
export default {
    name: 'DashNav',
    router,
    methods: {
        logout: function(){
            var vm = this;
            firebase.auth().signOut().then(function() { 
                vm.$toast('Succesfully Logged Out');
                router.push('/');
                }, function(error) { 
                    
                });
        }
    }
}
</script>

<style lang="scss" scoped>

    *{
        margin: 0;
        padding: 0;
    }

    .dashnav{
        width: 100%;
        overflow-x: hidden;
        height: 62px;
        margin: 0.3em;
        display: grid;
        grid-template-columns: 1.5fr 5fr 1fr 2fr; 
        img{
            height: inherit;
        }
        .search{
            border-radius: 15px;
            display: grid;
            grid-template-columns: 90% auto;
            height: inherit;
            background: #fafafc;
            input{
                border: none;
                background: #fafafc;
            }
            img{
                height: 40px;
                width: 40px;
                margin-top: 0.7em;
            }
        }
        .alerts{
            margin-top: 0.5em;
            margin-left: 1em;
            margin-right: 1em;
            img{
                height: 50px;
                width: 50px;
            }
        }
        .user{
            display: grid;
            grid-template-columns: 40% auto;
            p{
                margin-top: 1em;
            }
            img{
                height: 60px;
                width: 60px;
            }
        }
    }

</style>
