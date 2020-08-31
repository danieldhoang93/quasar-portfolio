<template>
  <q-layout view="hHh lpr fFf">
    <q-header 
     >
      <q-toolbar>
        <q-toolbar-title class="headerFont text-weight-thin q-ml-sm">
          <router-link to="/" class="headerFont">DDH</router-link>
        </q-toolbar-title>
        <div v-if="userDetails.userId" class="q-pr-sm headerFont">Hey, {{ this.userDetails.firstName }}</div>
        <q-btn
        dense 
        flat 
        round 
        icon="menu" 
        aria-label="Menu"
        @click="right = !right"
        id="menuBtn"/>
      </q-toolbar>
    </q-header>

    <q-drawer 
    v-model="right" 
    side="right" 
    :breakpoint="767"
    :width="180"
    overlay
    id="drawer"
    >

    <q-list dark>
        <div class="navPadding">
            <q-btn
            class="absolute-top-right iconPadding smallWindow" 
            dense 
            flat 
            round 
            icon="menu" 
            aria-label="Menu"
            @click="right = !right" />
        </div>
        
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="navFont text-weight-thin shadow2"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { mapState } from 'vuex'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  computed: {
    //get user details state from vuex store
    ...mapState('loginRegister', ['userDetails']),

  },
  mounted() {
     if (!this.userDetails.userid) {
      this.essentialLinks[1].title = "Log Out";
      this.essentialLinks[1].icon = "logout";
      this.essentialLinks[1].link = "";
    }
    else {
      this.essentialLinks[1].title = "Log In";
    }
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll() {
        this.scrollPosition = window.scrollY;
        var aboutSectionTop = document.getElementById("aboutTop").offsetTop;
        var projectSectionTop = document.getElementById("projectsTop").offsetTop;
        var contactSectionTop = document.getElementById("contactTop").offsetTop;

        if (this.scrollPosition >= aboutSectionTop - 20)
        {
          document.getElementById("menuBtn").classList.add("coloredIcon");
          document.getElementById("drawer").classList.add("coloredDrawer");
        } 
        else {
          document.getElementById("menuBtn").classList.remove("coloredIcon");
          ocument.getElementById("drawer").classList.remove("coloredDrawer");
        }
    }
  },
  data () {
    return {
      right: false,
      scrollPosition: 0,
      essentialLinks: [
        {
          title: 'Home',
          icon: 'home',
          link: '/'
        },
        {
          title: 'Sign In',
          icon: 'login',
          link: '/login'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.q-drawer {
  background: linear-gradient(311deg, #fb9d00, #8402fd, #0aceff);
  background-size: 120% 120%;

  .q-router-link--exact-active{
  color:#000202fb!important;
  font-weight:normal;
  }
}

@media screen and (min-width: 768px) {
  .q-btn.smallWindow {
    display:none;
    }
  .navPadding {
    padding: 9px;
  }
}

@media screen and (max-width: 768px) {
  .q-btn.smallWindow {
      display:all;
    }
    .navPadding {
      padding: 2em;
    }
}

.headerFont, .navFont{
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 100;
  text-decoration: none;
  color:white;
}

.iconPadding {
    margin-top:7px;
    margin-right:12px;
}

.coloredIcon {
  color:#6817ff;
}

</style>
