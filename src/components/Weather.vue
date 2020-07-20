<template>
    <div class="flex column q-pt-lg">
        <div class="col text-h2 text-weight-light">
            Today's Forecast
        </div>

        <template v-if="weatherData">
            <div class="col text-center">
                <div class="text-h4 text-weight-light">
                    {{weatherData.name}}
                </div>

                <div class="text-h2 q-my-lg relative-position">
                    <span class="text-weight-regular">{{Math.round(weatherData.main.temp_max)}}</span>
                    <span class="text-h4 relative-position degree">&deg;F</span> |
                    <span class="text-weight-thin">{{Math.round(weatherData.main.temp_min)}}</span>
                    <span class="text-h4 relative-position degree">&deg;F</span>
                </div>

                <div class="text-h6 text-weight-light">
                    {{weatherData.weather[0].description}}
                </div>
            </div>

            <div class="col text-center shadow3">
                <img :src="`http://openweathermap.org/img/wn/${ weatherData.weather[0].icon}@2x.png`">
            </div>
        </template>

        <template v-else>
        <div class="col column text-center shadow">
            <p class="text-subtitle1">Enable location to see your local weather!</p>
        </div>
        </template>
    </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      search: '',
      weatherData: null,
      lat: null,
      lng: null,
      apiUrl: 'https://api.openweathermap.org/data/2.5/weather',
      apiKey: '44eaf9faf46b5c4f281ea35b6a9b7f49',
      info: null
    }
  },
    mounted() {
        //get weather on resume load
        //get lat and lng
        navigator.geolocation.getCurrentPosition(
            position => {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;

            //run next method to get weather data
            this.getWeatherByCoords();
        })
    },
    computed: {
        backgroundColor() {
        if (this.weatherData) {
            //determine day or night depending on icon suffix
            if (this.weatherData.weather[0].icon.endsWith('n')) {
            return 'bg-night'
            }
            else {
            return 'bg-day'
            }
        }
        }
    },
    methods: {
    getWeatherByCoords() {
        //call API for weather data and insert data into weatherData
        this.$axios(`${ this.apiUrl }?lat=${ this.lat }&lon=${ this.lng }&appid=${ this.apiKey }&units=imperial`)
        .then(response => {this.weatherData = response.data
        console.log(response);
        })
        .catch(e => {
        //catch errors
        console.log(response);
        });
    }
    },
    props: {
    cityName: String
  }
}
</script>

<style lang="scss" scoped>
.shadow {
  filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.952));
}

.shadow3 {
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.552));
}
</style>