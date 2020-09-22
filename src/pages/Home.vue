<template>
    <main>
        <section>
            <div class="col">
                <div class="main-message header">
                    <div class="headerStuff shadow">
                        <h1 class=" fadeInDown">Inspire</h1><br>
                            <h1 class="fadeInLeft">C</h1>
                            <h1 class="fadeInRight">r</h1>
                            <h1 class="fadeInDown">e</h1>
                            <h1 class="fadeInRight">a</h1>
                            <h1 class="fadeInUp">t</h1>
                            <h1 class="fadeInDown">i</h1>
                            <h1 class="fadeInRight">v</h1>
                            <h1 class="fadeInLeft">i</h1>
                            <h1 class="fadeInUp">t</h1>
                            <h1 class="fadeInRight q-pb-xl">y</h1>
                        
                        <div class="fadeInUp q-py-xl">
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
            </div>
        </section>

        <section>
            <div class="row aboutSection">
                <div class="col-12 col-md-6 col-lg-4 aboutSectionColored padding" id="aboutTop">
                    <div>
                        <div class="shadow text-h1 text-white q-py-xl" v-animate-onscroll="{down: 'fadeInUp'}">About</div>
                        <div class="shadow2" v-animate-onscroll="{down: 'fadeInRight'}">
                            <p>
                                Some information about me, my resume, and technologies used.
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div class="col-12 col-md-6" id="aboutBottom">
                    <div class="aboutSection padding">
                        <div>
                            <div class="coloredHeaderSection" v-animate-onscroll="{down: 'fadeInUp'}">
                                <div class="shadow aboutHeader text-h1 q-py-xl">Me</div>
                            </div>
                            <div v-animate-onscroll="{down: 'fadeInRight'}">
                                <img src="~/assets/head.png" class="circle shadow-24">
                                <div class="smallWidth">
                                    <p class="text-black"><br><br>My name is Daniel Hoang. I'm a self-driven developer with 4 years of demonstrated ability to excel in agile
                                    software development, translating business requirements into high quality solutions by leveraging my creativity, innovation, and skillset to create unquestionable value.</p>

                                    <p class="text-black">
                                    I have a solid grasp in object oriented programming, full stack development technologies, robotic process automation, and a deep understanding of SQL and relational data models.
                                    </p><br><br>
                                </div>
                                <div class="q-pb-xl">
                                    <q-btn outline label="View Resume" color="purple" @click="resume = true" class="shadow-20"/>
                                    <q-dialog v-model="resume">  
                                        <q-card class="resumeSize">
                                            <Resume></Resume>
                                        </q-card>
                                    </q-dialog>
                                </div>
                            </div>
                        </div>

                        <div v-animate-onscroll="{down: 'fadeInUp'}">
                            <div class="shadow aboutHeader text-h1 q-py-xl">Tech Stack</div>
                            <div class="q-pb-xl" v-animate-onscroll="{down: 'fadeInRight'}">
                                <img src="~/assets/techstack.jpg" class="fullWidth smallWidth"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="row aboutSection">
                <div class="col-12 col-md-6 col-lg-4 projectSectionColored padding" id="projectsTop">
                    <div>
                        <div class="shadow text-h1 text-white q-py-xl" v-animate-onscroll="{down: 'fadeInUp'}">Projects</div>
                        <div class="shadow2" v-animate-onscroll="{down: 'fadeInRight'}">
                            <p>My portfolio of projects implementing various technologies.</p>
                        </div> 
                    </div>
                    
                </div>
                <div class="col-12 col-md-6 q-pb-xl">
                    <div class="aboutSection padding">
                        <div v-for="project in projects" v-bind:key="project.index">
                            <div class="coloredHeaderSection" v-animate-onscroll="{down: 'fadeInUp'}">
                                <div class="shadow projectHeader text-h1 q-py-xl">{{ project.name }}</div>
                            </div>
                            <div v-animate-onscroll="{down: 'fadeInRight'}">
                                <a :href="project.link" target="_blank">
                                <img :src="project.pic" class="smallWidth fullWidth">
                                </a>
                                <p class="text-subtitle1 text-black q-pt-md smallWidth">{{ project.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="row aboutSection">
                <div class="col-12 col-md-6 col-lg-4 contactSectionColored padding" id="contactTop">
                    <div>
                        <div class="shadow text-h1 text-white q-py-xl" v-animate-onscroll="{down: 'fadeInUp'}">Contact</div>
                        <div class="shadow2" v-animate-onscroll="{down: 'fadeInRight'}">
                            <p>Need to get in touch with me?</p>
                        </div>
                    </div>
                    
                </div>
                <div class="col-12 col-md-6 padding q-pb-xl">
                    <div class="aboutSection">
                        <div>
                            <div class="coloredHeaderSection" v-animate-onscroll="{down: 'fadeInUp'}">
                                <div class="shadow contactHeader text-h1 q-py-xl">Email</div>
                            </div>
                            <p class="text-black" v-animate-onscroll="{down: 'fadeInRight'}">
                                danieldhoang93@gmail.com
                            </p>
                        </div>
                        
                        <div>
                            <div class="coloredHeaderSection" v-animate-onscroll="{down: 'fadeInUp'}">
                                <div class="shadow contactHeader text-h1 q-py-xl">Phone</div>
                            </div>
                            <p class="text-black" v-animate-onscroll="{down: 'fadeInRight'}">
                                703-314-6010
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Resume from 'components/Resume.vue' 
import Vue from 'vue'
import VueAnimateOnScroll from 'vue-animate-onscroll'

Vue.use(VueAnimateOnScroll)

export default {
    components: {
        Resume
    },
    data () {
        return {
            resume: false,
            slide: 1,
            scrollPosition: null,
            aboutSectionTop: 0,
            projectsSectionTop: 0,
            contactSectionTop: 0,
            projects: [
                {
                    name: 'Instasham',
                    link: 'http://instasham.netlify.app',
                    pic: require('../assets/instasham.jpg'),
                    description: 'Instagram clone that allows you to capture or upload photos to the mainpage. Images are inserted and pulled from a Firestore database.'
                },
                {
                    name: 'World Tutor',
                    link: 'http://worldtutor.netlify.app',
                    pic: require('../assets/worldtutor.jpg'),
                    description: 'Find tutors from other countries to teach you their language, and about their country and culture. The page layout, country information, and tutor information is pulled from a Mongo database.'
                },
                {
                    name: 'Plop',
                    link: 'http://ddh-plop.netlify.app',
                    pic: require('../assets/bathroom_app.jpg'),
                    description: 'Looking for the nicest nearby bathroom to use? Find the best place to handle <span class="text-italic">your</span> business. Google Maps APIs are used to locate the user, and all nearby places with their information.'
                },
                {
                    name: 'People Swiper',
                    link: 'http://please-love-me.netlify.app',
                    pic: require('../assets/swipe_app.jpg'),
                    description: 'A dating app where you can swipe through a list of people pulled in from a REST API.'
                },
                {
                    name: 'Weather',
                    link: 'http://ddh-weather.netlify.app',
                    pic: require('../assets/weather_app.jpg'),
                    description: 'A simple weather app that shows you the current weather of anywhere you search. Coordinates are passed into an API to retrieve weather data.'
                }
            ]
        }
    },
    methods: {
        fadeInUp(el) {
            el.classList.add('fadeInUp')
        },
        fadeInRight(el) {
            el.classList.add('fadeInRight')
        }
    }
    
}
</script>

<style lang="scss" scoped>
.elementToFadeInAndOut {
    animation: fadeinout 5s linear forwards;
}	

.displayInline {
    display: inline-block;
}
.header {
    width:100%;
    height: 100vh;
    position:relative;
    margin-top:-50px;
    background: linear-gradient(311deg, #fb9d00, #8402fd, #0affc0),url('../assets/lines.jpg');
    background-size: 200% 200%;

    -webkit-animation: AnimationName 10s ease infinite;
    -moz-animation: AnimationName 10s ease infinite;
    animation: AnimationName 10s ease infinite;

    .headerStuff {
      max-width:90%;
      left:50%;
      top:50%;
      position:absolute;
      transform:translate(-50%,-50%);
      text-align:center;
      display: inline-block;
    }

    h1 {
        margin-top:0px;
        margin-bottom:0px;
    }
}

.projectImgWidth {
    max-width:500px;
}

.smallWidth {
    max-width:600px;
}

.button {
  -webkit-filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.452));
  -moz-filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.452));
  filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.452));
}

.coloredHeaderSection{
    display: flex;
}

.aboutSection {
    width:100%;
    margin:auto;

    .circle {
    border-radius: 50%;
    width: 150px;
    }
}

.aboutSectionColored {
    height: 100vh;
    background: linear-gradient(311deg, #6817ff, #0aefff);
    background-size: 100% 100%;
    top:0; 
    position: sticky;
}

.aboutHeader {
    background: linear-gradient(45deg, #6817ff, #0affc0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.resumeSize {
   height:100vh;
    width:60vw;
    min-width:90vw;
    position: fixed;
}

.projectSectionColored{
    height: 100vh;
    background: linear-gradient(311deg, #e100ff, #0015d4);
    top:0; 
    position: sticky;
}

.projectHeader {
    background: -webkit-linear-gradient(45deg, #e100ff, #0015d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.contactSectionColored {
    height: 100vh;
    background: linear-gradient(311deg, #ff7300, #ff01c8);
    top:0; 
    position: sticky;
}

.contactHeader {
    background: -webkit-linear-gradient(45deg, #ff7300, #ff01c8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.contactSection {
    width:100%;
    text-align:center;
    margin:auto;
}

.sticky {
  position: sticky;

    top:0;
}

.bottom {
    bottom:0;
}

.col {
    align-items:center;
    display:flex;
}

p {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 3px;
    color:white;
}

h1 {
    font-size:calc(40px + 4vw);
    text-transform: uppercase;
    color:white; 
    line-height: 1em;
    display: inline-block;
}

.shrinkSVGicon {
    width: 35px;
    color:white;
} 

@media screen and (max-width: 1023px) {
    .aboutSectionColored{
    height: 45vh;
    top:initial;
    }

    .projectSectionColored{
    height: 45vh;
    top:initial;
    }

    .contactSectionColored{
    height: 45vh;
    top:initial;
    }

}

@media screen and (max-width: 900px) {
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

    .text-h1 {
        font-size:70px;
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

    .text-h1 {
        font-size:65px;
    }
}
</style>