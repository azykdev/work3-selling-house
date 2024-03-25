<template>
  <section id="login" class="h-screen">
    <div id="login-wrapper" class="h-full flex items-center justify-center">

      <LoginForm />

    </div>
  </section>
</template>

<script>
import { LoginForm } from '@/components';

export default {
  name: "LoginView",
  components: {
    LoginForm
  },
  mounted() {
    this.$store.dispatch('getAuthorities')
    this.$store.dispatch('getConstructionCompanies')
  }
}
</script>

<style scoped></style>