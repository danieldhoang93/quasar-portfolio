<template>
    <main>
        <section>
            <div class="col elementToFadeInAndOut">
                <div class="main-message header">
                    <div class="headerStuff">
                        <h1 class="shadow">Inspire Creativity</h1>
                        <a   flat
                            round
                            text-color="white"
                            href="https://github.com/danieldhoang93" 
                            target="_blank"
                            class="button q-pa-lg"> 
                            <img src="~/assets/github.png" class="shrinkSVGicon">
                            <q-tooltip content-class="bg-primary toolTipText">GitHub</q-tooltip>
                          </a>

                          <a   flat
                            round
                            text-color="white"
                            size="xl"
                            href="https://www.linkedin.com/in/ddhoang/" 
                            target="_blank"
                            class="button q-pa-lg"> 
                            <img src="~/assets/linkedin.png" class="shrinkSVGicon">
                            <q-tooltip content-class="bg-primary toolTipText">Linkedin</q-tooltip>
                            </a>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="col">
                <div class="aboutSection">
                    <header>
                        <h1 class="shadow">About</h1>
                    </header>

                    <img src="~/assets/head.png" class="circle shadow-24">
                    <div class="shadow2 padding">
                        <p class="shadow2"><br><br>My name is Daniel Hoang. I'm a self-driven developer with 4 years of demonstrated ability to excel in agile
                        software development, translating business requirements into high quality solutions by leveraging my creativity, innovation, and skillset to create unquestionable value.</p>

                        <p>
                        I have a solid grasp in object oriented programming, full stack development technologies, robotic process automation, and a deep understanding of SQL and relational data models.
                        </p><br><br>
                    </div>  
                    
                    <q-btn label="View Resume" color="white text-purple" @click="resume = true" class="shadow-20"/>
                        <q-dialog v-model="resume">  
                        <q-card class="resumeSize">
                            <Resume></Resume>
                        </q-card>
                        </q-dialog>
                </div>    
            </div>
        </section>

        <section>
            <div class="col">
                <div class="contactSection">
                    <header>
                        <h1 class="shadow">The Fun Stuff</h1>
                    </header>
                    <div class="projects">
                        <q-carousel
                        animated
                        v-model="slide"
                        arrows
                        navigation
                        infinite
                        swipeable
                        control-color="white"
                        >
                            <q-carousel-slide :name="1" img-src="~/assets/instasham.jpg">
                                <a href="http://instasham.netlify.app" target="_blank">
                                    <div class="absolute-bottom custom-caption shadow">
                                        <div class="text-h3">Instasham</div>
                                        <div class="text-subtitle1">Instagram clone that allows you to take photos or upload photos to the mainpage<span class="text-italic">your</span> business.</div>
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
                </div>
            </div>
        </section>

        <section>
            <div class="col">
                <div class="contactSection">
                    <header>
                        <h1 class="shadow">Contact</h1>
                    </header>
                    <p class="shadow2">danieldhoang93@gmail.com</p>
                    <p class="shadow2">703-314-6010</p><br><br>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Resume from 'components/Resume.vue' 

export default {
  components: {
    Resume
  },
  data () {
    return {
      resume: false,
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

<style lang="scss" scoped>
.elementToFadeInAndOut {
    animation: fadeinout 5s linear forwards;
}	

.header {
    width:100%;
    height: 90vh;
    position:relative;

    .headerStuff {
      max-width:90%;
      left:50%;
      top:50%;
      position:absolute;
      transform:translate(-50%,-50%);
      text-align:center;
    }
}

.button {
  -webkit-filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.452));
  -moz-filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.452));
  filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.452));
}

.aboutSection {
    width:100%;
    text-align:center;
    margin:auto;

    .circle {
    border-radius: 50%;
    width: 150px;
    }
}

.resumeSize {
   height:100vh;
    width:60vw;
    min-width:90vw;
    position: fixed;
}

.contactSection {
    width:100%;
    text-align:center;
    margin:auto;
}

.col {
    align-items:center;
    display:flex;
    
}

p {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 100;
    color:white;
}

h1 {
    font-size: 10vw;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 100;
    color:white; 
    line-height: 1em;
}

 .shrinkSVGicon {
    width: 35px;
    color:white;
} 

.padding {
    padding-left:160px;
    padding-right:160px;
}

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

@media screen and (min-width: 900px) {
    .padding {
    padding-left:50px;
    padding-right:50px;
    }

    h1 {
        font-size:13vh;
    }
}

@media screen and (max-width: 550px) {
    .padding {
    padding-left:10px;
    padding-right:10px;
    }

    h1 {
        font-size:7vh;
    }

    .resumeSize {
    height:100vh;
    width:450px;
    min-width:9vw;
    position: fixed;
  }
}

@media screen and (max-width: 440px) {
    .padding {
    padding-left:10px;
    padding-right:10px;
    }

    h1 {
        font-size:7vh;
    }

    .resumeSize {
    height:100vh;
    width:370px;
    position: fixed;
  }
}

@media screen and (max-width: 330px) {
    .padding {
    padding-left:10px;
    padding-right:10px;
    }

    h1 {
        font-size:7vh;
    }

    .resumeSize {
    height:100vh;
    width:320px;
    position: fixed;
  }
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

</style>