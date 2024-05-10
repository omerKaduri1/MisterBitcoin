<template>
  <section class="contact-index">
    <ContactFilter @filter="onFilter" />
    <RouterLink to="/contact/edit">
      <button class="add-btn">
        <img src="../assets/img/plus.png" alt="" />
      </button>
    </RouterLink>
    <ContactList @remove="removeContact" :contacts="contacts" />
  </section>
</template>

<script>
import ContactList from "@/cmps/ContactList.vue";
import ContactFilter from "@/cmps/ContactFilter.vue";

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
        );
        this.contacts.splice(idx, 1);
      } catch (err) {
        console.error(err);
      }
    },
    async onFilter(filterBy) {
      this.contacts = await contactService.query(filterBy);
    },
  },
  components: {
    ContactList,
    ContactFilter,
  },
};
</script>

<style lang="scss">
.contact-index {
  margin-block-end: 2em;

  .add-btn {
    margin-inline: 3em;
    margin-block-end: 1em;
    padding-inline-start: 40px;
    background-color: transparent;
    border: none;
    border-radius: 5px;

    img {
      height: 35px;
    }

  }
    @media (max-width: 600px) {
      .add-btn {
        padding-inline-start: 5px;
        margin-inline: 1em;
      }
    }
}
</style>