<template>
    <div class="projects">
                        <q-carousel
                        animated
                        v-model="slide"
                        arrows
                        infinite
                        swipeable
                        navigation
                        control-color="white"
                        >
                            <q-carousel-slide :name="1" img-src="~/assets/instasham.jpg">
                                <a href="http://instasham.netlify.app" target="_blank">
                                    <div class="absolute-bottom custom-caption shadow">
                                        <div class="text-h3">Instasham</div>
                                        <div class="text-subtitle1">Instagram clone that allows you to take or upload photos to the mainpage</div>
                                    </div>
                                </a>
                            </q-carousel-slide>
                            
                            <q-carousel-slide :name="2" img-src="~/assets/worldtutor.jpg">
                                <a href="http://worldtutor.netlify.app" target="_blank">
                                    <div class="absolute-bottom custom-caption shadow">
                                        <div class="text-h3">World Tutor</div>
                                        <div class="text-subtitle1">Find tutors from other countries to teach you their language, and about their countries and culture</div>
                                    </div>
                                </a>
                            </q-carousel-slide>

                            <q-carousel-slide :name="3" img-src="~/assets/bathroom_app.jpg">
                                <a href="http://ddh-plop.netlify.app" target="_blank">
                                    <div class="absolute-bottom custom-caption shadow">
                                        <div class="text-h3">Plop</div>
                                        <div class="text-subtitle1">Looking for the nicest nearby bathroom to use? Find the best place to handle <span class="text-italic">your</span> business.</div>
                                    </div>
                                </a>
                            </q-carousel-slide>
                            
                            <q-carousel-slide :name="4" img-src="~/assets/swipe_app.jpg">
                                <a href="http://please-love-me.netlify.app" target="_blank">
                                    <div class="absolute-bottom custom-caption shadow">
                                        <div class="text-h3">Swiper</div>
                                        <div class="text-subtitle1">An app that alows you swipe through fake people using a REST API I deployed. If no one likes you back, don't worry, that's a feature.</div>
                                    </div>
                                </a>
                            </q-carousel-slide>

                            <q-carousel-slide :name="5" img-src="~/assets/weather_app.jpg">
                                <a href="http://ddh-weather.netlify.app" target="_blank">
                                    <div class="absolute-bottom custom-caption shadow">
                                        <div class="text-h3">Weather</div>
                                        <div class="text-subtitle1">A simple weather app that shows you the current weather of anywhere you search.</div>
                                    </div>
                                </a>
                            </q-carousel-slide>

                            <q-carousel-slide :name="6" img-src="~/assets/snooze_app.jpg">
                                <a href="http://ddh-snooze.netlify.app" target="_blank">
                                    <div class="absolute-bottom custom-caption shadow">
                                        <div class="text-h3">Snooze</div>
                                        <div class="text-subtitle1">Snooze for charity. People will finally thank you for sleeping in!</div>
                                    </div>
                                </a>
                            </q-carousel-slide>
                        </q-carousel>
                    </div>
</template>


<script>
export default {
  data () {
    return {
      slide: 1
    }
  },
  methods: {
      increment() {
          this.total++;
          this.show = !this.show;
          this.showNew = !this.showNew;
    }
  }
    
}
</script>

<style lang="scss">
.projects {
    width:41vw;
    min-width:350px;
    margin-left:auto;
    margin-right:auto;
}

.custom-caption {
    text-align: center;
    padding: 75px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    height:100%;
    padding-top:150px;
}
</style>