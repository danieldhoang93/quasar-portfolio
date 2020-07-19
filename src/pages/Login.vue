<template>
  <div class="col elementToFadeInAndOut text-center header">
    <div class="signIn text-center headerStuff shadows">
      <router-link to="/" class="headerFont"><h1>DDH</h1></router-link>
      
      <div class="inner">
        <q-input v-model="email" label="Email" type="email" hint="" dark/>
        <q-input v-model="password" label="Password" :type="isPwd ? 'password' : 'text'" hint="" dark>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
      </q-input>
      <q-input v-show="showConfirmPassword" v-model="confirmedPassword" label="Confirm Password" :type="isPwd ? 'password' : 'text'" hint="" dark>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
      </q-input>
      </div>
      
      <q-checkbox v-model="remember" label="Remember Me" style="float:left;" dark class="text-white rememberBox"/>

      <div class="q-py-md inner">
        <q-btn color="white text-purple" @click="signIn()" class="signInBtn">{{signInBtnText}}</q-btn>
      </div>
      

      <div>
        <div style="float:left;">
          <q-btn padding="sm" flat color="white" @click="register()">{{registerButtonText}}</q-btn>
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
      email: '',
      password: '',
      confirmedPassword: '',
      isPwd: true,
      signInBtnText: "Sign In",
      dense: false,
      showConfirmPassword: false,
      remember: false,
      registerButtonText: "Register"
    }
  },
  methods: {
    signIn () {
      console.log(this.signInBtnText);
    },
    register () {
      this.signInBtnText = "Register";
      this.showConfirmPassword = true;
      
      if (this.registerButtonText == 'Register') {
        this.signInBtnText = "Register";
        this.registerButtonText = "Sign In";
        this.showConfirmPassword = true;
      }
      else {
        this.signInBtnText = "Register";
        this.registerButtonText = "Register";
        this.showConfirmPassword = false;
      }
      
      console.log(this.signInBtnText);
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

.shadows{
  -webkit-filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.452));
  -moz-filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.452));
  filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.452));
  
}

.q-input{
  padding-bottom:40px;
}
</style>