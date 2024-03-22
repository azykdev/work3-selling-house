<template>
  <div id="choose-account" class="h-screen bg-white p-3 md:p-5 flex items-center justify-center">
    <div id="choose-account-wrapper"
      class="rounded-[10px] p-3 md:px-[80px] md:py-[40px] h-[80vh] w-[80%] bg-orange-50 shadow-xl">
      <p class="text-4xl font-bold mb-10 text-color4 ">Choose Account Type</p>

      <div class="flex">
        <router-link to="/login" class="rounded-[20px] p-3 md:p-5 bg-white">
          <div class="w-64 h-64 flex flex-col justify-center items-center">
            <span class="mdi mdi-account-tie text-9xl text-orange-300"></span>
            <p class="text-color4 text-2xl font-bold">Hokimiyat</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseAccountView"
}
</script>

<style scoped></style>