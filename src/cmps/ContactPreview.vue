<template>
  <section class="contact-preview">
    <RouterLink :to="`/contact/${contact._id}`">
      <section class="contact-info">
        <img src="../assets/img/users.png" alt="" />
        <span routerLink="/contact/{{contact._id}}">{{ contact.name }}</span>
      </section>
    </RouterLink>
    <section class="actions">
      <button @click="remove" class="remove-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          width="25px"
          height="25px"
          viewBox="-3 0 32 32"
          version="1.1"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            sketch:type="MSPage"
          >
            <g
              id="Icon-Set"
              sketch:type="MSLayerGroup"
              transform="translate(-259.000000, -203.000000)"
              fill="#000000"
            >
              <path
                d="M282,211 L262,211 C261.448,211 261,210.553 261,210 C261,209.448 261.448,209 262,209 L282,209 C282.552,209 283,209.448 283,210 C283,210.553 282.552,211 282,211 L282,211 Z M281,231 C281,232.104 280.104,233 279,233 L265,233 C263.896,233 263,232.104 263,231 L263,213 L281,213 L281,231 L281,231 Z M269,206 C269,205.447 269.448,205 270,205 L274,205 C274.552,205 275,205.447 275,206 L275,207 L269,207 L269,206 L269,206 Z M283,207 L277,207 L277,205 C277,203.896 276.104,203 275,203 L269,203 C267.896,203 267,203.896 267,205 L267,207 L261,207 C259.896,207 259,207.896 259,209 L259,211 C259,212.104 259.896,213 261,213 L261,231 C261,233.209 262.791,235 265,235 L279,235 C281.209,235 283,233.209 283,231 L283,213 C284.104,213 285,212.104 285,211 L285,209 C285,207.896 284.104,207 283,207 L283,207 Z M272,231 C272.552,231 273,230.553 273,230 L273,218 C273,217.448 272.552,217 272,217 C271.448,217 271,217.448 271,218 L271,230 C271,230.553 271.448,231 272,231 L272,231 Z M267,231 C267.552,231 268,230.553 268,230 L268,218 C268,217.448 267.552,217 267,217 C266.448,217 266,217.448 266,218 L266,230 C266,230.553 266.448,231 267,231 L267,231 Z M277,231 C277.552,231 278,230.553 278,230 L278,218 C278,217.448 277.552,217 277,217 C276.448,217 276,217.448 276,218 L276,230 C276,230.553 276.448,231 277,231 L277,231 Z"
                id="trash"
                sketch:type="MSShapeGroup"
              ></path>
            </g>
          </g>
        </svg>
      </button>
      <RouterLink class="edit-btn" :to="`contact/edit/${contact._id}`">
        <button routerLink="/contact/edit/{{contact._id}}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </RouterLink>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  methods: {
    remove() {
      this.$emit("remove", this.contact._id);
    },
  },
};
</script>

<style lang="scss">
.contact-preview {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7em;
  background-color: rgba(187, 183, 183, 0.4);
  border-radius: 20em;
  padding: 0.8em 2em;

  &:hover {
    background-color: #f0f0f0;
    transition: background-color 0.3s ease;
  }

  .contact-info {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 5px;

    span {
      color: #1a1919;
      font-size: 1.1em;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      border: none;
      background-color: transparent;
    }

    .edit-btn {
      padding-block-start: 1px;
    }
  }
}
</style>