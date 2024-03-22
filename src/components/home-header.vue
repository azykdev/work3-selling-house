<template>
  <header id="home-header" class="relative overflow-hidden min-h-screen pt-[72px]">
    <!-- shape gradient -->
    <div
      class="gradient-shape top-[20%] left-[-10%]  bg-orange-300 filter sm:blur-[140px] blur-[120px] hidden d-sm-block">
    </div>
    <div class="gradient-shape top-[30%] left-[60%]  bg-blue-400 filter sm:blur-[140px] blur-[120px] hidden d-sm-block">
    </div>

    <div id="home-header-wrapper" class="max-w-screen-lg xl:max-w-screen-xl mx-auto p-5 h-full ">

      <VRow>
        <VCol cols="12" sm="6" class="flex items-center">
          <!-- header text -->
          <div class=" text-center text-sm-left py-10">
            <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold mb-4"><span
                class="font-poppinsBold gradient-text2">Selling</span>
              House
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam maiores nihil dolor commodi soluta
              similique
              impedit consectetur autem dignissimos quas? Laborum, excepturi illum atque magni commodi consequuntur nam
              ducimus rerum?</p>

            <v-btn class="bg-grey-darken-3 text-white mt-5">Get Started</v-btn>
          </div>
        </VCol>
        <VCol cols="12" sm="6">
          <!-- image -->
          <div class="">
            <img src="../assets/images/home/h.png" alt="logo" class="w-full">
          </div>
        </VCol>
      </VRow>
    </div>
  </header>
</template>

<script>
export default {
  name: "HomeHeader"
}
</script>

<style scoped></style>