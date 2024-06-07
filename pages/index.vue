<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>

      <span>username: {{ user.username }}</span>
      <br>
      <span>token: {{ user.token }}</span>


    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  // data() {
  //   return {
  //     ...mapGetters(['token', 'username'])
  //   }
  // }
  computed: {
    ...mapGetters({
      user: 'users/user'
    })
  }
}
</script>
