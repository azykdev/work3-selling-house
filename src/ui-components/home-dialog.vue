<template>
  <div class="text-center pa-4 absolute">
    <v-dialog v-model="homeDialog" width="auto" persistent>
      <v-card prepend-icon="mdi-account" title="Hisob turini tanlang" class="w-[350px] sm:w-[600px] md:w-[800px]">
        <v-card-text>

          <div id="choose-account" class="">
            <v-list class=" md:flex items-center " color="orange-lighten-3">

              <v-list-item v-for="(item, i) in accountTypes" :key="item.id" :value="item" color="primary"
                variant="plain" class="border mb-3 md:w-1/3" @click="chooseAccountType(item)">
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
    setHomeDialog() {
      this.$store.commit('setHomeDialog', false)
    },
    chooseAccountType(accountType) {
      this.$store.commit('setHomeDialog', false)
      this.$store.commit('setAccountType', accountType)

      if (accountType.id === 'authority' || accountType.id === 'construction-company') {
        this.$router.push({ name: 'login' })
        return
      }

      if (accountType.id === 'citizen') {
        this.$router.push({ name: 'citizen' })
        return
      }

    },
  }
}
</script>

<style scoped></style>