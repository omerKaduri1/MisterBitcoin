<template>
  <section class="transactions-list" v-if="transactions.length">
    <h4>{{ title }}</h4>
    <ul v-for="transaction in transactions" :key="transaction.at">
      <li>
        <TransactionPreview :transaction="transaction" />
      </li>
    </ul>
  </section>
</template>

<script>
import TransactionPreview from "./TransactionPreview.vue";
export default {
  props: {
    transactions: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  components: { TransactionPreview },
};
</script>

<style lang="scss">
.transactions-list {
    display: flex;
    flex-direction: column;
    align-items: center;

    li{
      list-style: none;
    }

    h4 {
        font-size: 1.1em;
        font-weight: 500;
    }
}
</style>