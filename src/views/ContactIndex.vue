<template>
  <section class="contact-index"></section>
  <ContactList @remove="removeContact" :contacts="contacts" />
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
  methods: {
    async removeContact(contactId) {
      try {
        await contactService.remove(contactId);

        const idx = this.contacts.findIndex(
          (contact) => contact._id === contactId
        )
        this.contacts.splice(idx, 1);
      } catch (err) {
        console.error(err);
      }
    },
  },
  components: {
    ContactList,
  },
};
</script>

<style>
</style>