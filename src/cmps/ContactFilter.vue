<template>
  <section class="contact-filter">
    <input
      @input="onFilter"
      v-model="filterBy.txt"
      name="txt"
      type="text"
      placeholder="Search"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: { txt: "" },
    };
  },
  methods: {
    onFilter() {
      this.$emit("filter", this.filterBy);
    },
  },
};
</script>

<style lang="scss">
.contact-filter {
  display: flex;
  justify-content: center;
  margin-block: 1.5em;

  input {
    border: 1px solid rgb(214, 211, 211);
    border-radius: 5px;
    width: 50%;
    height: 2.5em;
    padding: 8px;

    &:focus {
      outline: none;
    }

    @media (max-width: 600px) {
      margin-inline: 1.5em;
      width: 100%;
    }
  }
}
</style>