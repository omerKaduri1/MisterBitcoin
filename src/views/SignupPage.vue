<template>
  <section class="signup-page">
    <img src="../assets/img/bitcoin.png" alt="bitcoin" />
    <form @submit.prevent="onSignup">
      <label>Please enter your name:</label>
      <input
        v-model="userName"
        type="text"
        name="userName"
        id="userName"
        placeholder="Enter User Name"
        required
      />
      <button type="submit">Sign up</button>
    </form>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { showErrorMsg } from "@/services/event-bus.service";

export default {
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    ...mapActions(["signup"]),
    async onSignup() {
      try {
        await this.signup(this.userName);
        this.$router.push("/");
      } catch (err) {
        showErrorMsg("Something went wrong, please try again");
      }
      // userService.signup(this.userName);
    },
  },
};
</script>

<style lang="scss">
.signup-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 2em;

  img {
    height: 120px;
    width: 120px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block: 2em;
    gap: 0.6em;

    label {
      font-size: 1.1em;
      font-weight: 500;
    }

    input {
      border: 1px solid rgb(214, 211, 211);
      border-radius: 5px;
      height: 2.5em;
      padding: 8px;

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
}
</style>