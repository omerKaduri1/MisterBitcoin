<script >
import { userService } from "@/services/user.service.js";
import { bitcoinService } from "@/services/bitcoin.service.js";
export default {
  data() {
    return {
      user: {},
      BTC: "",
    };
  },
  created() {
    this.user = userService.getUser();
    bitcoinService
      .getRate(this.user.balance)
      .then((bitcoinVal) => {
        this.BTC = bitcoinVal;
      })
      .catch((err) => {
        console.error("Error fetching BTC rate:", err);
      });
  },
};
</script>

<template>
  <section class="home-page">
    <p>Hello {{ user.name }}!</p>
    <section class="coins-info">
      <img src="../assets/img/coins.png" alt="coins" />
      <p>You have ${{ user.balance }}</p>
    </section>
    <section class="coins-info">
      <img src="../assets/img/bitcoin.png" alt="bitcoin" />
      <p>You have ₿ {{ BTC }}</p>
    </section>
  </section>
</template>

<style lang="scss">
.home-page {
    margin-block: 1em;
    display: flex;
    flex-direction: column;
    margin-inline: 1.5em;
    justify-content: center;
    align-items: center;

    .user-info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width:600px) {
        margin-inline: 1.5em;
    }

    .user-greet {
        font-size: 1.1em;
        font-weight: 500;
    }

    .coins-info {
        font-size: 1em;
        display: flex;
        align-items: center;
        gap: 5px;

        img {
            height: 30px;
        }
    }

}
</style>
