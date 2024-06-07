<template>
  <div>
    <v-app-bar app flat>
      <v-toolbar-title>
        <span class="font-weight-light">POC-</span>
        <span>Nuxt</span>
      </v-toolbar-title>

      <v-btn icon @click.stop="onSwitched" ml-4>
        <v-icon>
          mdi-{{ $vuetify.theme.dark ? 'weather-night' : 'weather-sunny' }}
        </v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <div v-if="!!user?.token">
        <v-btn text color="blue" @click="logout">
          <span class="hidden-md-and-down">Logout</span>
          <v-icon right large>mdi-logout</v-icon>
        </v-btn>
      </div>

      <div v-else>
        <v-btn text color="blue" @click="goToSignin">
          <span class="hidden-md-and-down">SignIn</span>
          <v-icon right large>mdi-login</v-icon>
        </v-btn>

        <v-btn text color="blue" @click="goToSignup">
          <span class="hidden-md-and-down">SignUp</span>
          <v-icon right large>mdi-clipboard-account-outline</v-icon>
        </v-btn>
      </div>


    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
export default defineComponent({
  name: 'AppBar',
  data() {
    return {
      darkMode: false as boolean
    }
  },
  computed: {
    ...mapGetters({
      user: 'users/user'
    }),
    // isAuthenticated() {
    //   return !!this.user.token
    // },
  },
  methods: {
    goToSignin() {
      this.$router.push('/signin')
    },
    goToSignup() {
      this.$router.push('/signup')
    },
    onSwitched() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.darkMode = !this.darkMode
      localStorage.dark = this.darkMode
    },
    logout() {
      this.$store.commit('users/SET_USER', null)
      this.$router.push('/signin')
    },
  },
})
</script>

<style></style>
