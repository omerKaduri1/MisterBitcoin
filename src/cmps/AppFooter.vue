<template>
  <footer class="app-footer">
    <RouterLink to="/">
      <p>MisterBIT<span>Coin</span></p>
    </RouterLink>
    <small>© Created by Omer Kaduri | misterBIT 2024</small>
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

  small {
    margin-inline-end: 40px;
    font-weight: 300;
    font-size: .9em;
  }

  & p {
    margin: 1.5em;
    font-size: 1.1em;
    cursor: pointer;
  }

  & span {
    color: rgb(18, 122, 18);
  }
}
</style>