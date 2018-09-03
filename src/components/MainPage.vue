<template>
    <div class="mainPage">
        <nav>
            <ul>
                <li><button @click="NavOverview">Overview</button></li>
                <li><button @click="NavTrips">Trips</button></li>
                <li><button @click="NavAlerts">Alerts</button></li>
                <li><button @click="NavMap">Map View</button></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
import router from '../router'
export default {
    router,
    methods:{
        NavOverview: function(){
            router.push('/dashboard');
        },
        NavTrips: function(){
            router.push({
                name: 'trips'
            });
        },
        NavMap : function(){
            router.push({
                name: 'map'
            })
        },
        NavAlerts: function(){
            router.push({
                name: 'alerts'
            })
        }
    }
}
</script>

<style lang="scss" scoped>

*{
    margin: 0;
    padding: 0;
}

    nav{
        background: #F37E38;    
        padding: 1em;
        position: relative;
        list-style: none;
        li{
            display: inline;
            margin: 1.2em; 
            
            button{
                border: none;
                background: none;
                color: white;
                font-size: 1em;
                cursor: pointer;
            }
        }
    }
</style>

