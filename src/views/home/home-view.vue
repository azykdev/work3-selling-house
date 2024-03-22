<template>
  <HomeNavbar />
  <HomeHeader />

</template>

<script>
import { HomeHeader } from '@/components';
import { HomeNavbar } from '@/components';



export default {
  name: 'HomeView',
  components: {
    HomeHeader,
    HomeNavbar
  }
}
</script>

<style scoped></style>