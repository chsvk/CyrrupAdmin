<template>
    <div class="dash">
        <ToggleNav></ToggleNav>
        <DashNav class="dashnav"></Dashnav><br>
        <router-view class="roter"></router-view>
    </div>
</template>

<script>
import firebase from 'firebase'
import router from '../router.js'
import DashNav from './DashNav.vue'
import ToggleNav from './ToggleNav.vue'
export default {
    router,
    data(){
        return{
            navStyle: 'navClose',
            navClose: {
            },
            navOpen: {

            }
        }
    },
    components:{
        DashNav,
        ToggleNav
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>

    .dash{
        height: 100vh;
        overflow-x: hidden;
        width: 100%;
        display: grid;
        grid-template-areas: 'nav display'
                             'nav router';
        grid-template-columns: 80px auto;
        grid-template-rows: 61.6px auto;
    
        nav{
            overflow: auto;
            height: 100vh;
            grid-area: 'nav';
            background: #282828;
            z-index: 200;
        .ham{
        background: #252525;
        padding: 1.3em;
        cursor: pointer;
        }
        img{
            display: block;
            width: 20px;
            height: 20px;
        }
        .menu_other{
             padding: 1.3em;
        }
    }
    .dashnav{
        overflow: hidden;
        grid-area: 'display'
    }

    .roter{
        overflow: hidden;
        margin-top: 1em;
        grid-area: 'router';
        width: 95vw;
        height: 100%;

    }
    
}

</style>

