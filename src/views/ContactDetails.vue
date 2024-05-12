<template>
  <h2 v-if="!contact">Loading...</h2>
  <section v-else class="contact-details">
    <section class="actions">
      <RouterLink to="/contact">
        <button>
          <img src="../assets/img/back.png" alt="" />
        </button>
      </RouterLink>
      <RouterLink :to="`/contact/edit/${contact._id}`">
        <button>
          <img src="../assets/img/edit.png" alt="" />
        </button>
      </RouterLink>
    </section>
    <section class="contact-data-container">
      <section class="contact-info">
        <img src="../assets/img/users.png" alt="contact" />
        <p>Name: {{ contact.name }}</p>
        <p>Phone: {{ contact.phone }}</p>
        <p>Email: {{ contact.email }}</p>
      </section>
    </section>
    <TransferFund :contact="contact" @transfer="onTransferCoins"/>
  </section>
</template>

<script>
import { contactService } from "@/services/contactService";
import { userService } from "@/services/user.service";
import TransferFund from "@/cmps/TransferFund.vue";
export default {
  components: { TransferFund },
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.contact = await contactService.getById(id);
  },
  methods: {
    onTransferCoins(amount) {
      userService.addMove(this.contact, amount);
    },
  },
};
</script>

<style lang="scss">
.contact-details {
  margin-inline: 1.5em;
  margin-block-start: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin: 5px;
    }

    img {
      height: 80px;
    }
  }

  .actions {
    display: flex;
    align-self: stretch;
    justify-content: space-between;
    margin-block-end: 2em;

    button {
      border: none;
      background-color: transparent;

      img {
        height: 25px;
      }
    }
  }
}
</style>