<script >
import AppHeader from "./cmps/AppHeader.vue";
import AppFooter from "./cmps/AppFooter.vue";
import UserMsg from "./cmps/UserMsg.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
    UserMsg,
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <UserMsg />
  <AppFooter />
</template>

<style scoped>
</style>
