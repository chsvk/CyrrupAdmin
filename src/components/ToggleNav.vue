<template>
    <nav :style="{width: w}">
            <img class="ham" v-on:click="menu" src="../assets/ham.png" alt="">
            <img class="menu_other active" src="../assets/menu_home_active.png" alt="">
            <img class="menu_other" src="../assets/menu_trucks.png" alt="">
            <img class="menu_other" src="../assets/menu_drivers.png" alt="">
            <img class="menu_other" src="../assets/menu_alerts.png" alt="">
            <img class="menu_other" src="../assets/menu_card.png" alt="">
            <img class="menu_other" src="../assets/menu_chart.png" alt="">
            <img class="menu_other" src="../assets/menu_settings.png" alt="">
        </nav>
</template>

<script>
export default {
    data(){
        return{
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
            }else{
                this.navStatus = 'close';
                vm.w = '80px'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    nav{
        height: 100vh;
        background: #282828;
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
    }
</style>

