<template>
  <h2 v-if="!contact">Loading...</h2>
  <section v-else class="contact-edit">
    <form @submit.prevent="save">
      <h2>{{ contact._id ? "Edit" : "Add" }} Contact</h2>
      <label for="name">Name</label>
      <input
        v-model="contact.name"
        placeholder="Name"
        type="text"
        name="name"
        id="name"
      />

      <label for="phone">Phone</label>
      <input
        v-model="contact.phone"
        placeholder="Phone number"
        type="tel"
        name="phone"
        id="phone"
      />

      <label for="email">Email</label>
      <input
        v-model="contact.email"
        placeholder="Email"
        type="email"
        name="email"
        id="email"
      />

      <section class="btns">
        <button class="btn">Save</button>
        <button routerLink="/contact" class="btn-regular" type="button">
          Back
        </button>
      </section>
    </form>
  </section>
</template>

<script>
import { contactService } from "@/services/contactService";

export default {
  data() {
    return {
      contact: null,
    };
  },
  methods: {
    async save() {
      await contactService.save(this.contact);
      this.$router.push("/contact");
    },
  },
  async created() {
    const { id } = this.$route.params;
    if (id) this.contact = await contactService.getById(id);
    else this.contact = contactService.getEmptyContact();
  },
};
</script>

<style lang="scss">
.contact-edit {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-block-start: 4em;
  margin-inline: auto;
  width: 50%;
  padding: 50px;
  background-color: rgb(236, 239, 236);
  border-radius: 10px;

  @media (max-width: 600px) {
    input {
      width: 200px;
    }
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;

    label {
      margin-top: 1em;
    }

    input {
      border: 1px solid rgb(209, 203, 203);
      border-radius: 4px;
      height: 2em;
      padding: 5px;

      &:focus {
        outline: none;
      }
    }

    .btns {
      display: flex;
      margin-top: 2.5em;
      justify-content: center;
      gap: 30px;

      button {
        padding: 3px 15px;
        border-radius: 4px;
      }

      .btn {
        background-color: hsl(230, 100%, 65%);

        &:hover {
          background-color: hsl(230, 100%, 67%);
        }
      }
    }
  }
}

.btn {
  display: flex;
  align-items: center;
  appearance: button;
  background-color: #0276ff;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  flex-direction: row;
  flex-shrink: 0;
  font-family: "RM Neue", sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  padding: 10px 21px;
  text-align: center;
  text-transform: none;
  transition: color 0.13s ease-in-out, background 0.13s ease-in-out,
    opacity 0.13s ease-in-out, transform 0.1s, box-shadow 0.13s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:active {
    background-color: #006ae8;
    transform: scale(0.95);
  }

  &:hover {
    background-color: #1c84ff;
  }
}

.btn-regular {
  background-color: #ffffff;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;

  &:focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow 0.2s;
  }

  &:active {
    background-color: #f7f7f7;
    border-color: #000000;
    transform: scale(0.95);
  }

  &:disabled {
    border-color: #dddddd;
    color: #dddddd;
    cursor: not-allowed;
    opacity: 1;
  }
}
</style>