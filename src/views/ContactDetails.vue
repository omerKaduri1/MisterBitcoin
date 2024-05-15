<template>
  <h2 v-if="!contact">Loading...</h2>
  <section v-else class="contact-details">
    <section class="actions">
      <RouterLink to="/contact">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#000000"
            version="1.1"
            id="Layer_1"
            width="30px"
            height="30px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 100 100"
            xml:space="preserve"
          >
            <g>
              <path
                d="M74.656,56.818c3.895,3.729,5.788,8.795,5.788,15.491c0,1.104,0.896,2,2,2s2-0.885,2-1.989   c0-7.736-2.362-13.91-7.022-18.369C66.646,43.639,46.325,44.551,30,45.269c-2.28,0.101-4.461,0.211-6.499,0.28L38.428,30.62   c0.781-0.781,0.781-2.047,0-2.828s-2.048-0.781-2.828,0L17.479,45.915c-0.375,0.375-0.586,0.884-0.586,1.414   s0.211,1.039,0.586,1.414l18.123,18.12c0.391,0.391,0.902,0.586,1.414,0.586s1.024-0.195,1.415-0.586   c0.781-0.781,0.781-2.048,0-2.828L24.142,49.75c1.915-0.11,3.932-0.261,6.033-0.354C44.919,48.748,65.114,47.688,74.656,56.818z"
              />
            </g>
          </svg>
        </button>
      </RouterLink>
      <RouterLink :to="`/contact/edit/${contact._id}`">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </RouterLink>
    </section>
    <section class="contact-data-container">
      <section class="contact-info">
        <img src="../assets/img/users.png" alt="contact" />
        <p><span>Name:</span> {{ contact.name }}</p>
        <p><span>Phone:</span> {{ contact.phone }}</p>
        <p><span>Email:</span> {{ contact.email }}</p>
      </section>
    </section>
    <TransferFund :contact="contact" @transfer="onTransferCoins" />
    <TransactionList
      :transactions="transactions"
      :title="
        'Your Transfers to ' +
        contact.name.substring(0, contact.name.indexOf(' ') + 1)
      "
    />
  </section>
</template>

<script>
import { contactService } from "@/services/contactService";
import { userService } from "@/services/user.service";
import { showSuccessMsg } from "@/services/event-bus.service";

import TransferFund from "@/cmps/TransferFund.vue";
import TransactionList from "@/cmps/TransactionList.vue";
export default {
  data() {
    return {
      contact: null,
      transactions: [],
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.contact = await contactService.getById(id);
    this.loadContactTransactions();
  },
  methods: {
    async loadContactTransactions() {
      const user = userService.getUser();
      this.transactions = [
        ...user.transactions.filter(
          (transaction) => transaction.toId === this.contact._id
        ),
      ];
    },
    async onTransferCoins(amount) {
      await userService.addMove(this.contact, amount);
      showSuccessMsg(
        `Successfully transferred $${amount} to ${this.contact.name}`
      );
      this.loadContactTransactions();
    },
  },
  components: { TransferFund, TransactionList },
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
      span {
        font-size: 1.1em;
        font-weight: 500;
      }
    }

    img {
      height: 80px;
      margin-block-end: 1.3em;
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