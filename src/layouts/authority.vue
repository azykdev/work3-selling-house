<template>
  <div>

    <v-layout>
      <v-navigation-drawer permanent="permanent" expand-on-hover rail class="bg-blue-grey-darken-4">
        <v-list>
          <v-list-item
            prepend-avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BAHlIuDPK6lkExHi1DWN6cdzB2OJkmSSMNxEhQXpLnHQ3fslHw7AqUJsZEDvu85xhWw&usqp=CAU"
            subtitle="example@gmail.com" title="John Doe"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav>
          <!-- dashboard list item -->
          <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard"></v-list-item>

          <!-- users list item -->
          <v-list-group value="Tender">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" prepend-icon="mdi-gavel" title="Tender"></v-list-item>
            </template>

            <v-list-item class="bg-blue-grey-darken-2" v-for="([title, icon], i) in TenderItems" :key="i" :title="title"
              :value="title"></v-list-item>

          </v-list-group>

          <!-- rekvizitlar list item -->
          <v-list-item prepend-icon="mdi-alpha-r-box" title="Rekvizitlar" value="rekvizitlar"></v-list-item>

        </v-list>
      </v-navigation-drawer>


      <v-main class="">
        <v-toolbar image="" dark prominent class=" fixed top-0 " elevation="5">

          <div id="logo" class="flex items-center ">
            <img src="@/assets/images/logo/selling-house-logo1.png" alt="" width="50px" class="p-1 ms-2">
            <p class=" text-slate-100 text-lg hidden sm:block">Selling House</p>
          </div>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </v-toolbar>

        <div class="p-3">
          <RouterView />
        </div>

      </v-main>
    </v-layout>



  </div>
</template>

<script>
import { AuthorityToolbar } from '@/components';
export default {
  name: "AuthorityLayout",
  data() {
    return {
      TenderItems: [
        ['Yangi tender', 'mdi-account-multiple-outline'],
        ['Tender G\'olibi', 'mdi-cog-outline'],
        ['Tenderni yompish', 'mdi-cog-outline'],
        ['Tender qayta o\'tkazish', 'mdi-cog-outline'],
      ],
    }
  },
  components: {
    AuthorityToolbar
  }
}
</script>

<style scoped></style>