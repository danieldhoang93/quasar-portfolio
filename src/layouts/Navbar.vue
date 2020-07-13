<template>
  <q-layout view="hHh lpr fFf">
    <q-header 
    reveal >
      <q-toolbar>
        <q-toolbar-title class="headerFont text-weight-thin q-ml-sm">
          <router-link to="/" class="headerFont">DDH</router-link>
        </q-toolbar-title>

        <q-btn
        dense 
        flat 
        round 
        icon="menu" 
        aria-label="Menu"
        @click="right = !right"/>
      </q-toolbar>
    </q-header>

    <q-drawer 
    v-model="right" 
    side="right" 
    :breakpoint="767"
    :width="180"
    overlay>

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

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      right: false,
      essentialLinks: [
        {
          title: 'Home',
          icon: 'home',
          link: '/'
        },
        {
          title: 'About',
          icon: 'account_circle',
          link: '/404'
        },
        {
          title: 'Contact',
          icon: 'alternate_email',
          link: '/404'
        },
        {
          title: 'Sign In',
          icon: 'login',
          link: '/404'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

.q-drawer {
  background: rgba(0, 0, 0, 0.00);
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
  text-decoration: none;
  color:white;
}

.iconPadding {
    margin-top:7px;
    margin-right:12px;
}
</style>
