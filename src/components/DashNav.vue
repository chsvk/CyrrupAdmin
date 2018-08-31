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
            <img @click="logout" src="../assets/dashboard_user_image.png" alt="">
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import router from '../router.js'
export default {
    name: 'DashNav',
    router,
    methods: {
        logout: function(){
            firebase.auth().signOut().then(function() { 
                // Sign-out successful. 
                router.push('/');
                }, function(error) { 
                    // An error happened. 
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
