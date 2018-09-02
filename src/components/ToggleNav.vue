<template>
    <nav :style="{width: w}">
            <img class="ham" v-on:click="menu" src="../assets/ham.png" alt="">
            <div class="navItem">
            <img class="menu_other active" src="../assets/menu_home_active.png" alt="">
            <p v-if="navItemDisplay">Home</p>
            </div>
            <div class="navItem">
            <img class="menu_other" src="../assets/menu_trucks.png" alt="">
            <p v-if="navItemDisplay">Trucks</p>
            </div>
            <div class="navItem">
            <img class="menu_other" src="../assets/menu_drivers.png" alt="">
            <p v-if="navItemDisplay">Drivers</p>
            </div>
            <div class="navItem">
            <img class="menu_other" src="../assets/menu_alerts.png" alt="">
            <p v-if="navItemDisplay">Alerts</p>
            </div>
            <div class="navItem">
            <img class="menu_other" src="../assets/menu_card.png" alt="">
            <p v-if="navItemDisplay">Drivers</p>
            </div>
            <div class="navItem">
            <img class="menu_other" src="../assets/menu_chart.png" alt="">
            <p v-if="navItemDisplay">Statistics</p>
            </div>
            <div class="navItem">
            <img class="menu_other" src="../assets/menu_settings.png" alt="">
            <p v-if="navItemDisplay">Settings</p>
            </div>
        </nav>
</template>

<script>
export default {
    data(){
        return{
            navItemDisplay: false,
            w: '80px',
            navStatus: {
                width: '80px'
            },
            
        }
    },
    methods: {
        menu: function(){
            var vm = this;
            if(this.navStatus == 'close'){
                vm.navStatus = 'open';
                vm.w = '250px'
                vm.navItemDisplay = true;
            }else{
                this.navStatus = 'close';
                vm.w = '80px';
                vm.navItemDisplay = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    nav{
        height: 100vh;
        background: #282828;
        transition: 350ms;
        img{
            display: block;
            cursor: pointer;
            width: 35px;
            height: 35px;
            padding: 1.25em;
        }
        .ham{
            background: #252525;
        }

        .navItem{
            display: grid;
            grid-template-columns: 30% auto;

            p{
                color: white;
                text-align: center;
                margin: 1.5em;
            }
        }
    }
</style>

