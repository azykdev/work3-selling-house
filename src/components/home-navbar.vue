<template>
  <nav id="home-navbar" class=" h-[72px] fixed transition-colors duration-300 top-0 left-0 right-0 z-[999]"
    :class="scroll ? 'scrolled' : ''">
    <div id="home-navbar-wrapper"
      class="max-w-screen-lg xl:max-w-screen-xl mx-auto flex justify-between items-center h-full px-3">
      <!-- logo -->
      <div class="flex items-center">
        <img src="../assets/images/logo/selling-house-logo5.png" alt="logo" class="h-[50px]">
        <p class="text-white md:text-xl text-xl font-bold gradient-text1 b">
          Selling House
        </p>

        <!-- menu -->
        <div class="hidden sm:block ms-10">
          <ul class="flex">
            <li class="me-3"><a href="#">Home</a></li>
            <li class="me-3"><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>



      <!-- button -->
      <v-btn @click="setHomeDialog" class="bg-deep-orange-lighten-2
 text-white">Login</v-btn>

    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const scroll = ref(false);

onMounted(() => {
  window.onscroll = () => {
    if (window.scrollY > 0) {
      scroll.value = true;
    } else {
      scroll.value = false;
    }
  }
})

// MUTATIONS
const setHomeDialog = () => {
  store.commit('setHomeDialog', true)

}


</script>

<style scoped>
#home-navbar {
  opacity: 1;
  background-color: transparent;
}

#home-navbar.scrolled {
  background-color: #fbfbfbf9;
  opacity: 0.98;
}
</style>