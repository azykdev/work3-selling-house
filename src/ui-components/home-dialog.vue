<template>
  <div class="text-center pa-4 absolute">
    <v-dialog v-model="homeDialog" width="auto" persistent>
      <v-card prepend-icon="mdi-account" title="Hisob turini tanlang" class="w-[400px] sm:w-[600px] md:w-[800px]">
        <v-card-text>
          <!-- <v-radio-group v-model="accountType">
            <v-radio class="mb-3 bg-orange-100 rounded-[10px]" v-for="account in accountTypes" :key="account.id"
              :label="account.name" :value="account"></v-radio>
          </v-radio-group> -->

          <div id="choose-account" class="">
            <v-list class=" md:flex gap-5 items-center " color="orange-lighten-3">

              <v-list-item v-for="(item, i) in accountTypes" :key="item.id" :value="item" color="primary"
                variant="plain" class="border rounded mb-3" @click="chooseAccountType(item)">
                <template v-slot:prepend>
                  <v-icon :icon="item.icon"></v-icon>
                </template>

                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item>
            </v-list>

          </div>

        </v-card-text>
        <template v-slot:actions>
          <v-btn class="ms-auto" text="Back" @click="setHomeDialog"></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'TheDialog',
  data() {
    return {
      accountTypes: [
        {
          id: 'authority',
          name: 'Hokimiyat',
          icon: 'mdi-account-tie',
        },
        {
          id: 'construction-company',
          name: "Qurilish firmasi",
          icon: 'mdi-bank',
        },
        {
          id: 'citizen',
          name: "Fuqaro",
          icon: 'mdi-account',
        }
      ],

    }
  },
  computed: {
    homeDialog() {
      return this.$store.state.home.homeDialog
    }
  },
  methods: {
    chooseAccountType(accountType) {
      this.$store.commit('setHomeDialog', false)
      this.$store.commit('setAccountType', accountType)

      this.$router.push({ name: 'login' })
    },
  }
}
</script>

<style scoped></style>