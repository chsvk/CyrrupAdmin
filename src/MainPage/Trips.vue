<template>
    <div class="trips">
        <pulse v-if="isLoading" class="pulse" :loading="isLoading"></pulse>
        <div v-for="trip in lists" class="trip card">
            <div class="toolbar">
                <img src="../assets/locationMarker.png" alt="">
                <p>{{locationFrom}} ----- {{locationTo}}</p>
                <p></p>
                <img class="trnsprtImage" src="../assets/transportVehicle.png" alt="">
                <p>{{vehicleNumber}}</p>
            </div>
            <img src="../assets/routeImage.png" alt="">
            <div class="driver">
                <img src="../assets/driverImage.png" alt="">
                <div class="driverRow">
                <p class="nameRow">{{driverName}}</p>
                <p class="rating"><img class="star" src="../assets/star.png" alt=""> {{driverRating}}</p>
                </div>
                <div class="driverRow">
                <p class="alertNumber">{{driverAlerts}}</p>
                <p class="alertsText">Alerts</p>
                </div>
            </div>
            <div class="stats">
                <div class="stat">
                    <img src="../assets/distance.png" alt="">
                    <div class="rows">
                    <p>Distance</p>
                    <p class="statValue">{{distance}} km</p>
                    </div>
                </div>
                <div class="stat">
                    <img src="../assets/speed.png" alt="">
                    <div class="rows">
                    <p>Speed</p>
                    <p class="statValue">{{speed}} kph</p>
                    </div>
                </div>
                <div class="stat battery">
                    <img src="../assets/battery.png" alt="">
                    <div class="rows">
                    <p>Battery</p>
                    <p class="statValue">{{battery}} %</p>
                    </div>
                </div>
                <div class="stat">
                    <img src="../assets/fuel.png" alt="">
                    <div class="rows">
                    <p>Fuel</p>
                    <p class="statValue">{{fuel}} L</p>
                    </div>
                </div>
            </div>
            <button>View Trip</button>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import router from '../router'
export default {
    router,
    data(){
        return{
            isLoading: true,
            lists: [],
            locationFrom: 'HYD',
            locationTo: 'GOA',
            vehicleNumber: 'AP 09 2082',
            driverName: 'New Driver',
            driverRating: 4.9,
            driverAlerts: 15,
            distance: 25,
            speed: 55,
            battery: 90,
            fuel: 47,
        }
    },
    methods:{
        getTrips: function(){
            var vm = this;
            var db = firebase.firestore();
            console.log("get vehicle list started");
            var collectionRef = db.collection("api_requests");
            var userObject = {
                user_id:"14",
                organisation_id:"3",
                status:"idle"
            }
            collectionRef.add({
                api_name:"vehicle_get_list",
                request:userObject
            })
            .then((docRef) => {
                console.log("Request object successfully created")
                docRef.onSnapshot(doc => {
                    vm.isLoading = false;
                    // console.log(doc.data().response.vehicle_list);
                    this.lists = doc.data().response.vehicle_list;
                })	
            }).catch(err => {
                console.log(err)
            })
        }
    },
    mounted(){
        this.getTrips();
    }

}
</script>

<style lang="scss" scoped>

    .trips{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .pulse{
        position: absolute;
        left: 50%;
        top: 40%;
    }

    .driverRow{
        margin: 0.2em 0em;
        width: 200px;
        display: grid;
        grid-template-rows: 30% auto;

        .alertNumber{
            color: red;
            font-size: 1.5em;
            font-weight: bolder;
            padding: 0.3em;
        }

        .alertsText{
            // margin: 0.5em;
        }

        .nameRow{
            margin: 0.4em 0.4em 0.2em 0.6em;
        }

        .rating{
            margin: 0.4em;
        }
    
    }

    .card{
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            margin: 0.8em 0.2em;
        }

    .card:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5);
    }
    
    .trip{
        width: 398px;
        .toolbar{
            padding: 0.7em;
            display: grid;
            grid-template-columns: 1fr 4fr 2fr 1fr 4fr;
                img{
                    width: 15px;
                    height: 20px;
                }
                .trnsprtImage{
                width: 25px;
                height: 20px;
                    }
        }

        .driver{
            width: 100%;
            padding: 0.7em 2em;
            display: grid;
            grid-template-columns: 3fr 4fr 3fr;
            img{
                width: 50px;
                height: 50px;
                margin: 0.5em;
            }
        }

        img{
            width: 100%;
        }

        .driver{

            .star{
                width: 10px;
                height: 10px;
                margin: 0.2em;
            }
        }

        button{
            width: 100%;
            border: none;
            background: none;
            padding: 1em;
            text-transform: uppercase;
            font-size: 1em;
            color: grey;
            transition: 200ms;
            cursor: pointer;
        }

        button:hover{
            background: #f17f35;
            color: white;
        }
    }

    .stats{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        .stat{
            padding: 0.4em;
            display: grid;
            grid-template-areas: 'img a'
                                 'img b';
            img{
                margin: 0.3em;
                height: 30px;
                width: 25px;
            }

            .statValue{
                color: #545454;
                font-weight: bold;
                font-size: 0.8em;
            }
        }
        .battery{
            img{
            margin: 0.3em;
            height: 32px;
            width: 20px;
            }
           
        }
    }

    

</style>
