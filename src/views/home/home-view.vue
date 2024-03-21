<template>
  <header id="header" class="h-screen bg-slate-50 px-2">
    <!-- Navbar -->
    <HomeNavbar />

    <!-- Header content -->
    <HomeHeaderContent />


  </header>
</template>

<script>
import HomeNavbar from '@/components/home-navbar.vue'
import HomeHeaderContent from '@/components/home-header-content.vue'
export default {
  name: 'HomeView',
  components: {
    HomeNavbar,
    HomeHeaderContent
  }
}
</script>

<style scoped>
#header {
  height: 100vh;
  background: url('@/assets/images/home/header.png') no-repeat;
  background-size: cover;
  background-position: center;
}
</style>