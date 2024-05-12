<template>
  <header class="app-header">
    <RouterLink to="/">
      <p>MisterBIT<span>Coin</span></p>
    </RouterLink>
    <nav>
      <RouterLink to="/contact">Contacts</RouterLink>
      <button v-if="loggedInUser" @click="onLogout">Logout</button>
    </nav>
  </header>
</template>

<script>
import { userService } from "@/services/user.service";

export default {
  data() {
    return {
      loggedInUser: {},
    };
  },
  async created() {
    this.loggedInUser = await userService.getUser();
    console.log("this.loggedInUser:", this.loggedInUser);
  },
  methods: {
    onLogout() {
      userService.logout();
      this.$router.push("/signup");
    },
  },
};
</script>

<style lang="scss">
.app-header {
  height: 100px;
  border-bottom: 1px solid #dfdbdb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    margin: 1.5em;
    font-size: 1.4em;
    cursor: pointer;
  }

  nav {
    display: flex;
    align-items: center;
    margin-right: 40px;
    column-gap: 2em;
    font-size: 1em;

    @media (max-width: 600px) {
      column-gap: 1em;
    }

    & a {
      cursor: pointer;
      text-decoration: none;
      color: inherit;

      &.router-link-exact-active {
        font-weight: 700;
        font-size: 1.05em;
      }
    }

    button {
      border: 1px solid rgb(214, 211, 211);
      border-radius: 5px;
      height: 2.5em;
      padding: 5px;
      background: transparent;
      width: max-content;

      &:hover {
        background-color: #f0f0f0;
        transition: background-color 0.3s ease;
      }
    }
  }

  & span {
    color: rgb(18, 122, 18);
  }
}
</style>