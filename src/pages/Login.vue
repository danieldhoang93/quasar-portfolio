<template>
  <div class="col elementToFadeInAndOut text-center header">
    <div class="signIn text-center headerStuff">
      <h1 class="shadow">DDH</h1>
      <div class="inner">
        <q-input v-model="text" label="Email" :dense="dense" dark/>
        <q-input v-model="ph" label="Password" hint="" :dense="dense" dark/>
      </div>
      
      <q-checkbox v-model="remember" label="Remember Me" style="float:left;" dark class="text-white rememberBox"/>

      <div class="q-py-md inner">
        <q-btn label="Sign In" color="white text-purple" @click="signIn = true" class="shadow-20 signInBtn"/>
      </div>
      

      <div>
        <div style="float:left;">
          <q-btn padding="sm" flat color="white" label="Register"/>
        </div>

        <q-btn padding="sm" flat color="white" label="Forgot Password" style="float:right;"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      ph: '',
      dense: false,
      signIn: false,
      remember: false
    }
  }
}
</script>

<style lang="scss" scoped>
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

.signInBtn {
  width:100%;
  margin-top:20px;
}

.rememberBox {
  padding-bottom:15px;
}

div.inner {
  padding-left:10px;
  padding-right:10px;
}

h1 {
    font-size: 100px;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 100;
    color:white; 
    line-height: 1em;
    margin-bottom:10px;
    margin-top:10px;
}

div.signIn {
  width:25vw;
  min-width:300px;
  margin-left: auto;
  margin-right: auto;
  display:block;
  
}

.q-input{
  padding-bottom:40px;
}
</style>