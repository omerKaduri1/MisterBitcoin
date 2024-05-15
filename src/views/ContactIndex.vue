<template>
  <section class="contact-index">
    <section class="actions">
      <ContactFilter @filter="onFilter" />
      <RouterLink to="/contact/edit">
        <button class="add-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
              fill="#292D32"
            />
          </svg>
        </button>
      </RouterLink>
    </section>
    <ContactList @remove="removeContact" :contacts="contacts" />
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ContactList from "@/cmps/ContactList.vue";
import ContactFilter from "@/cmps/ContactFilter.vue";

import { showSuccessMsg } from "@/services/event-bus.service";
export default {
  computed: {
    ...mapGetters({
      contacts: "getContacts",
    }),
  },
  methods: {
    ...mapActions(["loadContacts", "deleteContact"]),
    async removeContact(contactId) {
      try {
        this.deleteContact(contactId);
        showSuccessMsg(`Contact deleted: ${contactId}`);
      } catch {
        showErrorMsg("Couldn't delete contact", err);
      }
    },
    onFilter(filterBy) {
      this.loadContacts(filterBy);
    },
  },
  created() {
    this.loadContacts();
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

  .actions {
    display: flex;
    align-items: center;
    .add-btn {
      background-color: transparent;
      border: none;
      border-radius: 5px;
    }
    @media (max-width: 600px) {
      .add-btn {
        padding-inline-start: 5px;
        margin-inline: 1em;
      }
    }
  }
}
</style>