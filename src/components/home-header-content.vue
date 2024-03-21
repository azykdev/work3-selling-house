<template>
  <div id="header-content" class="h-[80vh] flex items-center">
    <div id="header-content-wrapper"
      class="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-x mx-auto md:flex items-center justify-between translate-y-[-20%]">
      <!-- header text -->
      <div id="header-content-text" class="md:w-1/2 mb-5 md:pe-5 lg:pe-10 text-center text-md-left">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 md:mb-5">Selling House</h1>
        <p class="text-sm sm:text-md md:text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque, quae.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, ipsa minima numquam voluptatem sit
          necessitatibus, rerum similique sint minus aliquid
        </p>
      </div>

      <!-- header image -->
      <img src="@/assets/images/logo/selling-house-high-resolution-logo-transparent.png" alt="header"
        class="md:w-1/2 md:ps-5">
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeaderContent"
}
</script>

<style scoped></style>