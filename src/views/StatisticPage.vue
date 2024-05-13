<template>
  <div class="stats">
    <h3>Stats</h3>
    <Chart v-if="marketPriceHistory" :history="marketPriceHistory" />
    <div v-else>Loading chart data...</div>
  </div>
</template>

<script>
import Chart from "@/cmps/Chart.vue";
import { bitcoinService } from '@/services/bitcoin.service';
// import { bitcoinService } from "@/services/bitcoin.service";

export default {
  components: { Chart },
  data() {
    return {
      marketPriceHistory: null,
    };
  },
  created() {
    this.onInit();
  },
  methods: {
    async onInit() {
      try {
        this.marketPriceHistory = await bitcoinService.getMarketPriceHistory();
      } catch (err) {
        console.error("Error loading data:", err);
      }
    },
  },
};
</script>

<style lang="scss">
.stats{
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
      font-size: 2em;
      font-weight: 400;  
    }
}
</style>