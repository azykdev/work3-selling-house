<template>
  <nav id="nav" class="bg-transparent h-[10vh] w-full">
    <div id="nav-wrapper"
      class="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-x mx-auto py-3 flex items-center justify-between h-full">
      <!-- logo -->
      <router-link to="/">
        <img src="@/assets/images/logo/selling-house-high-resolution-logo-transparent.png" alt="logo" class=" w-44">
      </router-link>

      <!-- nav links -->
      <div class="">
        <ul class="flex">
          <li class="">
            <router-link to="/login"
              class=" text-lg bg-color4 hover:bg-color3 transition-colors border rounded-[5px] py-2 px-3 text-indigo-50">Kirish</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HomeNavbar'
}
</script>

<style scoped></style>