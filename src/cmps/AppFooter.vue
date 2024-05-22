<template>
  <footer class="app-footer">
    <RouterLink to="/">
      <p>MisterBIT<span>Coin</span></p>
    </RouterLink>
    <section class="rights-container">
      <small>© Created by Omer Kaduri </small>
      <small>misterBIT 2024</small>
    </section>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.app-footer {
  height: 65px;
  border-top: 1px solid #dfdbdb;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .rights-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    small {
      margin-inline-end: 124px;
      font-weight: 300;
      font-size: 0.9em;
      @media (max-width: 600px) {
        margin-inline-end: 40px;
        font-size: 0.85em;
      }
    }
  }

  & p {
    margin-inline-start: 140px;

    font-size: 1.1em;
    cursor: pointer;
    @media (max-width: 600px) {
      margin: 1.5em;
    }
  }

  & span {
    color: rgb(18, 122, 18);
  }
}
</style>