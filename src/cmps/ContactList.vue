<template>
  <section>
    <ul class="contact-list">
      <li v-for="contact in contacts" :key="contact._id">
        <ContactPreview :contact="contact" />
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
  components: {
    ContactPreview,
  },
};
</script>

<style lang="scss">
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 0.7em;
  margin-inline: 3em;

  li {
    list-style: none;
  }

  @media (max-width: 600px) {
    margin-inline: 1em;
  }
}
</style>