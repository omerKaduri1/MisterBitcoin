<template>
  <section class="contact-index"></section>
  <ContactList :contacts="contacts" />
</template>

<script>
import ContactList from "@/cmps/ContactList.vue";
import { contactService } from "@/services/contactService";
export default {
  data() {
    return {
      contacts: [],
    };
  },
  async created() {
    this.contacts = await contactService.query();
  },
  components: {
    ContactList,
  },
};
</script>

<style>
</style>