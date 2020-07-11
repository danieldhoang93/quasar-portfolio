<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#q-app {
    background: linear-gradient(311deg, #fb9d00, #9c32ff, #0affc0);
    background-size: 200% 200%;

    -webkit-animation: AnimationName 15s ease infinite;
    -moz-animation: AnimationName 15s ease infinite;
    animation: AnimationName 15s ease infinite;
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

.shadow {
    text-shadow:10px 15px 13px rgba(0, 0, 0, 0.452);
}

.shadow2 {
    text-shadow:8px 8px 5px rgba(0, 0, 0, 0.452);
}

.toolTipText {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 100;
    color:white;
}

.padding {
    padding-right: 4em;
    padding-left: 4em;
    }
</style>