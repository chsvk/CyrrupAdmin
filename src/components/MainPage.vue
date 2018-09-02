<template>
    <div class="mainPage">
        <nav>
            <ul>
                <li>Overview</li>
                <li>Trips</li>
                <li>Alerts</li>
                <li>Map View</li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

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
           color: white;
           margin: 0 2em;
            display: inline;
        }
    }
</style>

