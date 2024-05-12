<template>
  <section class="contact-preview">
    <RouterLink :to="`/contact/${contact._id}`">
      <section class="contact-info">
        <img src="../assets/img/users.png" alt="" />
        <span routerLink="/contact/{{contact._id}}">{{ contact.name }}</span>
      </section>
    </RouterLink>
    <section class="actions">
      <button @click="remove" class="remove-btn">
        <img src="../assets/img/delete.png" alt="" />
      </button>
      <RouterLink :to="`contact/edit/${contact._id}`">
        <button routerLink="/contact/edit/{{contact._id}}">
          <img class="edit-img" src="../assets/img/edit.png" alt="edit" />
        </button>
      </RouterLink>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  methods: {
    remove() {
      this.$emit("remove", this.contact._id);
    },
  },
};
</script>

<style lang="scss">
.contact-preview {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7em;
  background-color: rgba(187, 183, 183, 0.4);
  border-radius: 20em;
  padding: 0.8em;

  &:hover {
    background-color: #f0f0f0;
    transition: background-color 0.3s ease;
  }

  .contact-info {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 5px;

    span {
      color: #1a1919;
      font-size: 1.1em;
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      border: none;
      background-color: transparent;

      img {
        height: 25px;
      }

      .edit-img {
        height: 20px;
      }
    }
  }
}
</style>