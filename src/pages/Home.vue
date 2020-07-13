<template>
<div class="text-center padding elementToFadeInAndOut">
      <div class="col">
        <div class="header">
          <header>
              <h1 class="shadow">Inspire Creativity</h1>
          </header>

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
      
      <div class="col section2 text-center">
        <header>
            <h1 class="shadow">About</h1>
        </header>

        <img src="~/assets/head.png" class="circle shadow-24">
<div class="shadow2">
       <p class="shadow2"><br><br>My name is Daniel Hoang. I'm a self-driven developer with 4 years of demonstrated ability to excel in agile
      software development, translating business requirements into high quality solutions by leveraging my creativity and skillset to create unquestionable value.</p>

<p>
    I have a solid grasp in object oriented programming, full stack development technologies, robotic process automation, and a deep understanding of SQL and relational data models.
</p><br>

<q-btn label="View Resume" color="white text-purple" @click="fixed = true" class="shadow-20" />
    <q-dialog v-model="fixed">  
      <q-card class="resumeSize">
        <Resume></Resume>
      </q-card>
    </q-dialog>
</div>
     
      </div>
      <div class="col">
        <header>
            <h1 class="shadow">Contact</h1>
        </header>
        <p class="shadow2">danieldhoang93@gmail.com</p>
        <p class="shadow2">703-314-6010</p><br><br>

      </div>
</div>
</template>

<script>
import Resume from 'components/Resume.vue' 

export default {
  components: {
    Resume
  },
  data () {
    return {
      fixed: false
    }
  }
}
</script>
<style lang="scss" scoped>
  .column > div {
  padding-left:110px;
  padding-right:110px;
  background: rgba(86, 61, 124, .00);
}

 .shrinkSVGicon {
    width: 35px;
    color:white;
} 

.resumeSize {
  height:90vh;
  max-width:70vw;
}

.icon {
    -webkit-filter: drop-shadow( 10px 15px 10px rgba(0, 0, 0, .3));
    filter: drop-shadow( 10px 15px 5px rgba(0, 0, 0, .3));
     padding-left: 1px;
    padding-right: 1px;
}

.section2 {
  margin-top: 10em;
}

.circle {
    border-radius: 50%;
    width: 150px;
}

.elementToFadeInAndOut {
    animation: fadeinout 5s linear forwards;
}	

.header {
    height:35vh;
}

.padding {
    padding-left:160px;
    padding-right:160px;
}

h1 {
    font-size: 100px;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 100;
    color:white;
    margin-top:2em;
}

h5 {
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 100;
    color:white;
    margin-top:2em;
}

p {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 100;
    color:white;
}


@media screen and (min-width: 1008px) {
    h1 {
        font-size: 9em;
        margin-top: 2em;
    }
    .header {
        height:45vh;
    }
}


@media screen and (max-width: 768px) {
 .padding {
  padding-left:20px;
  padding-right:20px;
}

    h1 {
      font-size: 7em;
      margin-top:3.5em;
}

.header {
  height:40vh;
}
}



@media screen and (max-width: 640px) {
 .padding {
  padding-left:10px;
  padding-right:10px;
}

    h1 {
      font-size: 5em;
      margin-top: 4em;
    }

    .icon {
     margin-left:1em;
    }

    .resumeSize {
      height: 100%;
      max-width:96%;
      position: fixed;
      margin-left: 2px;
      margin-right: 8px;
    }
}

@media screen and (max-width: 470px) {
 .padding {
  padding-left:10px;
  padding-right:10px;
}

    h1 {
      font-size: 4em;
      margin-top: 3.5em;
    }

    .icon {
     margin-left:1em;
    }

    
}

@media screen and (max-width: 375px) {
 .padding {
  padding-left:10px;
  padding-right:10px;
}

    h1 {
      font-size: 3em;
      margin-top: 26vh;
    }

    .icon {
      margin-left:1em;
    }

    .resumeSize {
      height: 100%;
      max-width:100%;
      position: fixed;
      left: 0;
    }
}

@keyframes fadeinout {
    0% { opacity: 0; }
    30% { opacity: 1; }
    90% { opacity: 1; }
}
</style>
