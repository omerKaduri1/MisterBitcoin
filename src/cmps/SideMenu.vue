<template>
  <section class="side-menu">
    <nav class="side-nav">
      <RouterLink to="/contact">
        Contacts
        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28px"
          height="28px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z"
            fill="#0F0F0F"
          />
          <path
            d="M16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8ZM9.97716 8C9.97716 9.11719 10.8828 10.0228 12 10.0228C13.1172 10.0228 14.0228 9.11719 14.0228 8C14.0228 6.88281 13.1172 5.97716 12 5.97716C10.8828 5.97716 9.97716 6.88281 9.97716 8Z"
            fill="#0F0F0F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.39909 16.6808C6.49015 13.8286 9.47114 13 12 13C14.5289 13 17.5099 13.8286 18.6009 16.6808C18.9505 17.5948 18.6826 18.4756 18.1363 19.0778C17.6103 19.6576 16.8215 20 16 20H8C7.17849 20 6.38973 19.6576 5.86372 19.0778C5.31737 18.4756 5.04947 17.5948 5.39909 16.6808ZM12 15C9.72346 15 7.89905 15.7433 7.26709 17.3954C7.21826 17.523 7.25506 17.6349 7.34496 17.734C7.47492 17.8772 7.71694 18 8 18H16C16.2831 18 16.5251 17.8772 16.655 17.734C16.7449 17.6349 16.7817 17.523 16.7329 17.3954C16.101 15.7433 14.2765 15 12 15Z"
            fill="#0F0F0F"
          />
        </svg> -->
      </RouterLink>
      <RouterLink to="/statistics">
        Statistics
        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          height="28px"
          width="28px"
          version="1.1"
          id="Capa_1"
          viewBox="0 0 210.667 210.667"
          xml:space="preserve"
        >
          <path
            d="M206.667,183.606H4c-2.209,0-4-1.791-4-4V31.061c0-2.209,1.791-4,4-4h202.667c2.209,0,4,1.791,4,4v148.545  C210.667,181.815,208.876,183.606,206.667,183.606z M11.612,175.606h191.055V35.061H8v132.843l78.114-78.113  c0.75-0.75,1.768-1.171,2.828-1.171s2.078,0.421,2.828,1.171l26.946,26.947l45.339-45.339c1.561-1.562,4.096-1.562,5.656,0  c1.563,1.563,1.563,4.095,0,5.657l-48.167,48.167c-0.75,0.75-1.768,1.171-2.828,1.171s-2.078-0.421-2.828-1.171L88.942,98.276  L11.612,175.606z M179.217,87.811c-2.209,0-4-1.791-4-4v-19.25h-19.25c-2.209,0-4-1.791-4-4s1.791-4,4-4h23.25c2.209,0,4,1.791,4,4  v23.25C183.217,86.02,181.426,87.811,179.217,87.811z"
          /></svg
      > -->
      </RouterLink>
      <span v-if="loggedInUser" @click="onLogout" class="material-icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          height="16px"
          width="16px"
          version="1.1"
          id="Capa_1"
          viewBox="0 0 384.971 384.971"
          xml:space="preserve"
        >
          <g>
            <g id="Sign_Out">
              <path
                d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03    C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03    C192.485,366.299,187.095,360.91,180.455,360.91z"
              />
              <path
                d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279    c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179    c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </g>
        </svg>
      </span>
    </nav>
  </section>
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
  },
  methods: {
    onLogout() {
      userService.logout();
      this.$router.push("/signup");
    },
  },
};
</script>

<style lang='scss'>
.side-menu {
  display: flex;
  width: 300px;
  height: 100%;
  position: fixed;
  right: 0;
  background-color: white;
  padding: 24px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 99;

  .side-nav {
    display: flex;
    // flex-direction: column;
    align-items: center;
    column-gap: 2em;
    font-size: 1em;
  }

  //   .side-nav {
  //     display: flex;
  //     flex-direction: column;

  //     & a {
  //       cursor: pointer;
  //       text-decoration: none;
  //       color: inherit;

  //       &.router-link-exact-active {
  //         font-weight: 700;
  //         font-size: 1.05em;
  //       }
  //     }
  //   }
}
</style>