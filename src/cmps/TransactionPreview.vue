<template>
  <article class="transaction-preview">
    <div class="content">
      <div class="info">
        <p class="label">Destination:</p>
        <p class="value">{{ transaction.to }}</p>
      </div>
      <p class="amount">₿ {{ BTCValue }} | ${{ transaction.amount }}</p>
      <p class="at">{{ formatTimestamp(transaction.at) }}</p>
    </div>
  </article>
</template>

<script>
import { bitcoinService } from "@/services/bitcoin.service";
export default {
  props: {
    transaction: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      BTCValue: 0,
    };
  },
  created() {
    bitcoinService.getRate(this.transaction.amount).then((bitcoinVal) => {
      this.BTCValue = bitcoinVal;
    });
  },
  methods: {
    formatTimestamp(timestamp) {
      if (!timestamp) return ""; 
      const date = new Date(timestamp);
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      return new Intl.DateTimeFormat("en-GB", options).format(date);
    },
  },
};
</script>

<style lang="scss">
.transaction-preview {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px 70px;
  width: max-content;

  &:hover {
    background-color: #f0f0f0;
    transition: background-color 0.3s ease;
  }

  .content {
    display: flex;
    flex-direction: column;

    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .label {
        font-weight: bold;
        color: #333;
        margin-right: 10px;
      }

      .value {
        color: #333;
      }
    }

    .amount {
      font-size: 18px;
      color: #007bff;
      margin: 3px;
    }

    .at {
      font-size: 14px;
      color: #666;
    }
  }
}
</style>