<template>
  <header id="header" class="h-screen bg-slate-50">
    <nav id="nav" class="bg-slate-100 h-[10vh] w-full">
      <div id="nav-wrapper"
        class="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-x mx-auto py-3 flex items-center justify-between h-full">
        <!-- logo -->
        <router-link to="/">
          <img src="@/assets/images/logo/selling-house-high-resolution-logo-transparent.png" alt="logo" class=" w-44">
        </router-link>

        <!-- nav links -->
        <div class="">
          <ul class="flex">
            <li class="mx-3">
              <router-link to="/login"
                class=" text-lg font-semibold text-indigo-900 transition-colors border rounded-[5px] py-2 px-3 hover:bg-indigo-600 hover:text-indigo-50">Kirish</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped></style>