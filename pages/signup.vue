<template>
  <v-container style="max-width: 700px; margin-top: 50px;">
    <h1>Signup!</h1>
    <ValidationObserver v-slot="{ invalid }">
      <v-form ref="signUpForm" @submit.prevent="onSubmit">
        <ValidationProvider v-slot="{ errors }" rules="minmax:3,20" name="nome de usuário">
          <v-text-field
            v-model="username" type="text"
            :error-messages="errors" :disabled="isLoading"
            hint="Nome de usuário"
          >
          </v-text-field>
        </ValidationProvider>

        <ValidationProvider v-slot="{ errors }" rules="email" name="email">
          <v-text-field
            v-model="email" type="text"
            :error-messages="errors" :disabled="isLoading"
            hint="Email"
          >
          </v-text-field>
        </ValidationProvider>

        <ValidationProvider v-slot="{ errors }" rules="minmax:4,12" name="senha">
          <v-text-field
            v-model="password" type="password"
            :error-messages="errors" :disabled="isLoading"
            hint="Senha"
          >
          </v-text-field>
        </ValidationProvider>

        <ValidationProvider v-slot="{ errors }" :rules="confirmRule" name="confirmação">
          <v-text-field
            v-model="passwordConfirm" type="password"
            :error-messages="errors" :disabled="isLoading"
            hint="Confirmação de senha"
          >
          </v-text-field>
        </ValidationProvider>

        <v-btn type="submit" color="blue" :disabled="invalid || isLoading || passwordConfirm.length === 0">
          Registrar
        </v-btn>
      </v-form>
    </ValidationObserver>

  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SignUpPage',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      isLoading: false
    }
  },
  methods: {
    onSubmit() {
      this.isLoading = true;
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.$axios.$post('/signup', payload)
      .then(() => {
        alert('Registrado com sucesso!')
        this.$router.push('/signin')
      })
      .catch(err => {
        console.log(err)
        alert('Falha no registro, cheque seus dados.')
        this.isLoading = false
      })
    }
  },
  computed: {
    confirmRule(): string {
      return 'confirm:' + this.password;
    },
  }
})
</script>

<style></style>
