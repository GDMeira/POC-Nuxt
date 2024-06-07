<template>
  <v-container style="max-width: 700px; margin-top: 50px;">
    <h1>Signin!</h1>
    <ValidationObserver v-slot="{ invalid }">
      <v-form ref="signInForm" @submit.prevent="onSubmit">
        <ValidationProvider v-slot="{ errors }" rules="minmax:3,20" name="nome de usuário">
          <v-text-field
            v-model="username" type="text"
            :error-messages="errors" :disabled="isLoading"
          >
          </v-text-field>
        </ValidationProvider>

        <ValidationProvider v-slot="{ errors }" rules="minmax:4,12" name="senha">
          <v-text-field
            v-model="password" type="password"
            :error-messages="errors" :disabled="isLoading"
          >
          </v-text-field>
        </ValidationProvider>

        <v-btn type="submit" color="blue" :disabled="invalid || isLoading">
          Entrar
        </v-btn>
      </v-form>
    </ValidationObserver>

  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'SignInPage',
  data() {
    return {
      username: '',
      password: '',
      isLoading: false
    }
  },
  computed: {
    ...mapGetters({
      userStore: 'users/user'
    })
  },
  methods: {
    // ...mapMutations({
    //   SET_USER: 'users/SET_USER'
    // }),
    onSubmit() {
      this.isLoading = true;
      const payload = {
        username: this.username,
        password: this.password
      }
      this.$axios.$post('/signin', payload)
      .then((res) => {
        console.log(this.userStore)
        const user = {
          username: this.username,
          token: res.token
        }
        this.$store.commit('users/SET_USER', user)
        this.$router.push('/')
      })
      .catch(err => {
        console.log(err)
        alert('Falha na autenticação, cheque seus dados.')
        this.isLoading = false
      })
    }
  }
})
</script>


<style>

</style>
