<template>
  <section class="contact-list">
    <ul>
      <li v-for="contact in contacts" :key="contact._id">
        <ContactPreview :contact="contact" @remove="removeContact" />
      </li>
    </ul>
  </section>
</template>

<script>
import ContactPreview from "./ContactPreview.vue";

export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeContact(contactId) {
      this.$emit("remove", contactId);
    },
  },
  components: {
    ContactPreview,
  },
};
</script>

<style lang="scss">
.contact-list {
  display: flex;
  flex-direction: column;
  margin-inline: 7.75em;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.7em;
    padding: 0;
    li {
      list-style: none;
    }
  }

  @media (max-width: 600px) {
    margin-inline: 1em;
  }
}
</style>