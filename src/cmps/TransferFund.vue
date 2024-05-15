<template>
  <section class="transfer-fund">
    <p>Transfer coins to {{ contact.name }}:</p>
    <form @submit.prevent="onTransfer()">
      <input
        type="number"
        name="amount"
        id="amount"
        v-model="amount"
        placeholder="Enter Amount"
      />
      <button>Transfer</button>
    </form>
  </section>
</template>

<script>
import { userService } from "@/services/user.service";
import { showErrorMsg } from "@/services/event-bus.service";
export default {
  data() {
    return {
      amount: "",
      maxCoins: "",
    };
  },
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.maxCoins = userService.getUser().balance;
  },
  methods: {
    onTransfer() {
      if (this.maxCoins < this.amount)
        return showErrorMsg("Please enter a valid amount");
      this.$emit("transfer", this.amount);
      this.amount = "";
    },
  },
};
</script>

<style lang="scss">
.transfer-fund {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 2em;

  p {
    font-size: 1.1em;
    font-weight: 500;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4em;

    input {
      border: 1px solid rgb(214, 211, 211);
      border-radius: 6px;
      height: 2.5em;
      padding: 15px;
      margin-block-end: .5em;

      &:focus {
        outline: none;
      }
    }

    button {
      border: 1px solid rgb(214, 211, 211);
      border-radius: 5px;
      height: 2.5em;
      padding: 8px;
      background: transparent;
      width: max-content;

      &:hover {
        background-color: #f0f0f0;
        transition: background-color 0.3s ease;
      }
    }
  }

  .errors {
    color: red;
    width: 100%;
  }
}
</style>