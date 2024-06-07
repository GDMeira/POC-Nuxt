<template>
  <v-app>
    <AppBar />

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import AppBar from '@/components/AppBar/index.vue'
export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    AppBar
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      user: 'users/user'
    })
  }
})
</script>
