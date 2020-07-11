<template>
 <div class="col-12 text-center self-center padding elementToFadeInAndOut">
     <header>
        <h1 class="aboutHeader shadow">About Me</h1>
     </header>
     <img src="~/assets/head.png" class="flex inline circle flex-center shadow-24g">

<p class="bodyfont padding">I'm a self-driven developer with 4 years of demonstrated ability to excel in agile
software development, and leveraging my creativity and skills to create unquestionable value</p>
       </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.aboutHeader {
    font-size: 100px;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 100;
    color:white;
}



.bodyfont {
    font-size: 20px;
   text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 100;
    color:white;
    padding-top:2em;
}

@keyframes fadeinout {
    0% { opacity: 0; }
    30% { opacity: 1; }
    90% { opacity: 1; }
}

.elementToFadeInAndOut {
    animation: fadeinout 5s linear forwards;
}	

.circle {
  border-radius: 50%;
  width: 150px;
}
  
</style>
