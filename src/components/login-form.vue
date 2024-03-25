<template>
  <form class="login-form w-[350px] p-8 border-2 rounded-[15px]">

    <div class="mb-5 flex items-center justify-center">
      <img src="../assets/images/logo/selling-house-logo3.png" alt="" width="50px">
      <h1 class="text-center text-3xl text-grey-800"> Login</h1>
    </div>

    <v-text-field v-model="loginFormData.username" label="Username" required></v-text-field>

    <v-text-field v-model="loginFormData.password" label="Password" type="password" required></v-text-field>

    <v-btn @click="login" class="bg-deep-orange-lighten-2 text-white">
      <TheLoader v-if="loading" />
      <span v-else>Login</span>
    </v-btn>
  </form>
</template>

<script>
import { TheLoader } from '@/ui-components'
export default {
  name: "LoginForm",

  data() {
    return {
      loginFormData: {
        username: '',
        password: ''
      },
    }
  },

  methods: {
    login() {

      if (this.loginFormData.username && this.loginFormData.password) {

        console.log('loginFormData', this.loginFormData);

        if (this.accountType.id === 'authority') {
          let authority = this.authorities.find((authority) => authority.userName === this.loginFormData.username && authority.password === this.loginFormData.password)

          if (authority) {
            this.$router.push({ name: 'authority' })
          } else {
            alert('Login yoki parol noto\'g\'ri (authority)')
          }
        }

        if (this.accountType.id === 'construction-company') {
          let constructionCompany = this.constructionCompanies.find((constructionCompany) => constructionCompany.userName === this.loginFormData.username && constructionCompany.password === this.loginFormData.password)

          if (constructionCompany) {
            this.$router.push({ name: 'construction_company' })
          } else {
            alert('Login yoki parol noto\'g\'ri (construction-company)')
          }
        }
      } else {
        alert('Login yoki parol kiritilmadi')
      }
    }
  },

  computed: {
    accountType() {
      return this.$store.state.auth.accountType
    },

    authorities() {
      return this.$store.state.authority.authorities
    },

    constructionCompanies() {
      return this.$store.state.constructionCompany.constructionCompanies
    },
  },
}
</script>

<style scoped></style>