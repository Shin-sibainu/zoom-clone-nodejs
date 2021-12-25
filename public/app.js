const socket = io();
// console.log(window.location);

const app = Vue.createApp({
  data() {
    message: "";
  },
  methods: {
    sendMessage() {
      //メッセージをsocket.ioを使って送信する。
      socket.emit("message", this.message);
      this.message = "";
      console.log(this.message);
    },
  },
  mounted() {
    socket.on("message", (msg) => {
      console.log("message:" + msg);
    });
  },
});

/* https://reffect.co.jp/html/zoom-clone */
