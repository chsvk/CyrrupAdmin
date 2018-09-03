<template>
    <div class="over">
            <div class="analysis card">
                <div class="toolbar">
                    <h3>Trip Analysis</h3>
                    <div class="dropdown">
                        <select>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select> 
                    </div>
                </div>
                <hr>
                <div class="analysisContent">
                    <div class="progress">
                        <radial-progress-bar :innerStrokeColor= "bckColor"
                                             :startColor = 'strtColor'
                                             :stopColor = 'strtColor'
                                             :diameter="150"
                                            :completed-steps="completedSteps"
                                            :total-steps="totalSteps">
                        <h3 style="color: #f17f35; border-bottom: #545454 2px solid; font-size: 1.8em;"> {{ completedSteps }}</h3>
                        <h3 style="color: #f17f35; font-size: 1.8em;"> {{ totalSteps }}</h3>
                        </radial-progress-bar>
                        </div>
                        <div class="details">
                        <p>{{ totalSteps}} Trips This Week</p>
                        <p>{{ ongoing }} Trips Ongoing</p>
                        <p>{{ completedSteps }} Trips Completed</p>
                        </div>
                </div>
                <hr style="border-top: dotted 0.5px;">
                <div class="percentages">
                    <div class="percentage">
                        <h2>{{tripsIncreased}}%</h2>
                        <progress-bar type="line" ref="line1" :options="options1"></progress-bar>
                        <p>Trips Increased</p>
                    </div>
                    <div class="percentage">
                        <h2>{{errorsPerentage}}%</h2>
                        <progress-bar type="line" ref="line2" :options="options2"></progress-bar>
                        <p>Alerts / Errors</p>
                    </div>
                    <div class="percentage">
                        <h2>{{performacePercentage}}%</h2>
                        <progress-bar type="line" ref="line3" :options="options3"></progress-bar>
                        <p>Overall Performance</p>
                    </div>
                </div>
            </div>
            <div class="growth card">
                <div class="toolbar">
                    <h3>Overall Growth Graph</h3>
                    <div class="dropdown">
                        <select>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select> 
                    </div>
                </div>
                <hr>
                <h2><span>{{totalSteps}}</span> Trips This Week</h2>
                <area-chart   :curve="false" :colors="['#ecb956']" :data="chartData"></area-chart>
            </div>
        </div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'
export default {
    data(){
        return{
            chartData: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]],
            completedSteps: 42,
            totalSteps: 55,
            strtColor: '#f17f35',
            bckColor: '#545454',
            ongoing: 4,
            options1: {
            color: '#4ab969',
            strokeWidth: 4,
        },
        errorsPerentage: 39,
        performacePercentage: 74,
        tripsIncreased: 63,
            options2: {
            color: '#d2001d',
            progress: 0.2,
            strokeWidth: 4
        },
            options3: {
            color: '#ffb80c',
            strokeWidth: 4
        }
        }
    },
    mounted(){
        this.$refs.line1.animate(1.0)
        this.$refs.line1.set(this.tripsIncreased/100);
        this.$refs.line2.animate(1.0)
        this.$refs.line2.set(this.errorsPerentage/100);
        this.$refs.line3.animate(1.0)
        this.$refs.line3.set(this.performacePercentage/100);
    },
    components: {
        RadialProgressBar
    }
}
</script>

<style lang="scss" scoped>

    .over{
        display: grid;
        grid-template-columns: 49% 49%;

        .dropdown{
            margin-left: 50%;
            select{
            padding: 0.8em;
            background: #f7f7fb;
            border: none;
            }

            
        }

        .card{
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            margin: 1em 0.6em;
            padding: 1.4em;
            width: 90%;
        }

        .card:hover{
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5);
        }

        .toolbar{
                display: grid;
                grid-template-columns: 50% auto;
                h3{
                    padding: 0.8em;
                    color: #666674;
                }
                }

        .analysis{
            .analysisContent{
                display: grid;
                grid-template-columns: 35% auto;
                .progress{
                    padding: 1.4em;
                }
                .details{
                    margin: 2.4em 0;
                    p{
                        margin: 0.7em;
                    }
                }
            }

            .percentages{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                .percentage{
                    margin: 1em;
                    h2{
                        margin: 0.7em 0.3em;
                        color: #666674;
                        font-size: 1.7em;
                    }
                    p{
                        margin: 0.7em 0em;
                        color: #666674;
                    }
                }
            }
        }

        .growth{
            h2{
                text-align: center;
                margin: 0.8em 1em;
                span{
                    color: #f17f35;
                    font-size: 1.2em;
                }
            }
        }
    }

</style>

