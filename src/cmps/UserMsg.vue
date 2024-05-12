<template>
  <section class="user-msg">
    <p :class="msg.type" v-if="msg.txt">{{ msg.txt }}</p>
  </section>
</template>

<script>
import { eventBusService } from "@/services/event-bus.service.js";

export default {
  data() {
    return {
      msg: { txt: "", type: "success" },
    };
  },
  methods: {
    showMsg(msg) {
      this.msg = msg;
      setTimeout(() => (this.msg.txt = ""), 2500);
    },
  },
  created() {
    eventBusService.on("show-user-msg", this.showMsg);
  },
};
</script>

<style lang="scss">
.user-msg {
  position: fixed;
  bottom: 30px;
  right: 20px;

  p {
    padding: 10px;
    border-radius: 10px;
  }
}

.success {
  background-color: lightgreen;
}

.error {
  background-color: orangered;
}
</style>