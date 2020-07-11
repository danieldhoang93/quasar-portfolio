<template>
  <div class="fullscreen text-center q-pa-md flex flex-center background404">
    <div>
      <h1 style="font-size: 25vh" class="shadow">
        404 :(
      </h1>

      <q-btn
        class="q-mt-xl"
        elevated
        flat
        round 
        size="xl"
        to="/"
        text-color="white"
        icon="home"
      />
    </div>
  </div>
</template>

<script >
export default {
  name: 'Error404'
}
</script>

<style>
.background404 {
  background: linear-gradient(311deg, #b000c0, #20003d, #1600dd);
    background-size: 200% 200%;

    -webkit-animation: AnimationName 10s ease infinite;
    -moz-animation: AnimationName 10s ease infinite;
    animation: AnimationName 10s ease infinite;
}

h1 {
  font-size: 100px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 100;
  color:white;
}

.textColor {
  color:rgba(255, 255, 255, 0.2);
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.082) 0%, rgba(0, 0, 0, 0.793) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
</style>
