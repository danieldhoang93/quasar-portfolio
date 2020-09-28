<template>
  <div class="col elementToFadeInAndOut text-center header gradientBackground">
    <div class="signIn text-center headerStuff shadows">
      <router-link to="/" class="headerFont"><h1>DDH</h1></router-link>
      
      <div class="inner">
        <q-input v-show="isRegister" v-model="loginData.firstName" label="First Name" hint="" dark/>
        <q-input v-show="isRegister" v-model="loginData.lastName" label="Last Name" hint="" dark/>
        <q-input v-model="loginData.email" label="Email" type="email" hint="" dark/>
        <q-input v-model="loginData.password" label="Password" :type="isPwd ? 'password' : 'text'" hint="" dark>
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

      <div class="inner">
        <q-btn color="white text-purple" @click="signIn()" class="signInBtn">{{signInBtnText}}</q-btn>
      </div>

      <div class="q-pb-md inner">
          <q-btn color="white" text-color="black" v-if="!isSignIn" no-caps 
          icon="img:https://img.icons8.com/color/100/000000/google-logo.png" 
          label="Sign in with Google" @click="handleClickSignIn" class="signInBtn"/>
      </div>
      <div class="q-pr-sm">
          <q-btn color="white" text-color="black" no-caps v-if="isSignIn" label="Sign Out" @click="handleClickSignOut"/>
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
import GAuth from 'vue-google-oauth2'
import Vue from 'vue'
const gauthOption = {
  clientId: '996384979999-c85flm6pkoln0vmoi2232v3sgr9aotcp.apps.googleusercontent.com',
  scope: 'email',
  prompt: 'consent'
}
Vue.use(GAuth, gauthOption)
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      loginData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      isPwd: true,
      signInBtnText: "Sign In",
      dense: false,
      isRegister: false,
      remember: false,
      registerButtonText: "Register",
      isInit: false,
      isSignIn: false,
    }
  },
  methods: {
    //get actions from store file 'loginRegister'
        ...mapActions('loginRegister', ['registerUser', 'loginUser']),
    signIn () {
      if (!this.isRegister) {
        //sign in
        this.loginUser(this.loginData);
      }
      else {
        //register
        this.registerUser(this.loginData);
      }
    },
    register () {
      this.signInBtnText = "Register";
      this.showConfirmPassword = true;
      
      if (this.registerButtonText == 'Register') {
        this.signInBtnText = "Register";
        this.registerButtonText = "Sign In";
        this.isRegister = true;
      }
      else {
        this.signInBtnText = "Sign In";
        this.registerButtonText = "Register";
        this.isRegister = false;
      }
      
      console.log(this.signInBtnText);
    },
    async handleClickUpdateScope() {
      const option = new window.gapi.auth2.SigninOptionsBuilder();
      option.setScope("email https://www.googleapis.com/auth/drive.file");
      const googleUser = this.$gAuth.GoogleAuth.currentUser.get();
      try {
        await googleUser.grant(option);
        console.log("success");
      } catch (error) {
        console.error(error);
      }
    },
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        console.log("googleUser", googleUser);
        console.log("getId", googleUser.getId());
        console.log("getBasicProfile", googleUser.getBasicProfile());
        console.log("getAuthResponse", googleUser.getAuthResponse());
        console.log(
          "getAuthResponse",
          this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
        );
        this.isSignIn = this.$gAuth.isAuthorized;
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
      if (this.userType === "teacher") {
          this.slide++;
      }
      else {
          this.slide = 4;
      }
      
    },
    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        this.isSignIn = this.$gAuth.isAuthorized;
      } catch (error) {
        console.error(error);
      }
    }
  },
  created() {
    let that = this;
    let checkGauthLoad = setInterval(function () {
      that.isInit = that.$gAuth.isInit;
      that.isSignIn = that.$gAuth.isAuthorized;
      if (that.isInit) clearInterval(checkGauthLoad);
    }, 1000);
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