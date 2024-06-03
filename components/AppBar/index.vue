<template>
  <div>
    <v-toolbar app flat>
      <v-toolbar-title>
        <span class="font-weight-light">POC-</span>
        <span>Nuxt</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div>
        <v-btn flat color="blue" @click="goToSignin">
          <span>SignIn</span>
          <v-icon right>mdi-login</v-icon>
        </v-btn>

        <v-btn flat color="blue" @click="goToSignup">
          <span>SignUp</span>
          <v-icon right>mdi-clipboard-account-outline</v-icon>
        </v-btn>
      </div>

    </v-toolbar>
  </div>
</template>

<script lang="ts" >
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AppBar',
  data() {
    return {}
  },
  methods: {
    goToSignin() {
      this.$router.push('/signin')
    },
    goToSignup() {
      this.$router.push('/signup')
    }
  }
})
</script>

<style>

</style>
