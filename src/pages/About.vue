<template>
    <main class="">
        <section>
            <div class="col elementToFadeInAndOut">
                <div class="main-message header">
                    <div class="headerStuff">
                        <h1>Inspire Creativity</h1>
                        <q-btn
                            flat
                            round  
                            text-color="white"
                            size="xl"
                            class="icon"
                            >
                            <img src="~/assets/github.png" class="shrinkSVGicon">
                            <q-tooltip content-class="bg-primary toolTipText">Git Hub</q-tooltip>
                        </q-btn>

                        <q-btn
                            flat
                            round
                            text-color="white"
                            size="xl"
                            class="icon"
                            href="https://www.linkedin.com/in/ddhoang/"
                            >
                            <img src="~/assets/linkedin.png" class="shrinkSVGicon">
                            <q-tooltip content-class="bg-primary toolTipText">Linkedin</q-tooltip>
                        </q-btn>

                        <q-btn
                            flat
                            round  
                            text-color="white"
                            icon="bedtime"
                            size="xl"
                            class="icon">
                            <q-tooltip content-class="bg-primary toolTipText">Dark Mode</q-tooltip>
                        </q-btn>
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
                        software development, translating business requirements into high quality solutions by leveraging my creativity and skillset to create unquestionable value.</p>

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
      resume: false
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
    height: 95vh;
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
  height:90vh;
  max-width:70vw;
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
}

@keyframes fadeinout {
    0% { opacity: 0; }
    30% { opacity: 1; }
    90% { opacity: 1; }
}
</style>