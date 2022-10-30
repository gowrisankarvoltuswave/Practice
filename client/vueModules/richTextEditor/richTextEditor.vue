<template>
  <div id="app">
    <div class="main">
      <div class="write">
        <vue-editor v-model="content" :editorToolbar="customToolbar"></vue-editor>
      </div>
      <div class="read">
        <div v-html="content"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.write {
  width: 800px;
}
.read {
}
</style>
<script>
// https://www.npmjs.com/package/vue2-editor
import { VueEditor, Quill } from "vue2-editor";
// import TestComp from './test.vue'
const Block = Quill.import("blots/block");
Block.tagName = "DIV";
Quill.register(Block, true);

export default {
  components: {
    VueEditor,
  },

  data() {
    return {
      content: "",
      formats: ["bold", "italic", "underline", "strike"],
      headers: [
        {
          header: [false, 1, 2, 3, 4, 5, 6],
        },
      ],
      positions: [
        {
          align: "",
        },
        {
          align: "center",
        },
        {
          align: "right",
        },
        {
          align: "justify",
        },
      ],
      list: [
        {
          list: "ordered",
        },
        {
          list: "bullet",
        },
        {
          list: "check",
        },
      ],
      indents: [
        {
          indent: "-1",
        },
        {
          indent: "+1",
        },
      ],
      fill: [
        {
          color: [],
        },
        {
          background: [],
        },
      ],
      links: ["link", "image", "video"],
      mark: ["blockquote", "code-block"],

      customToolbar: [],
    };
  },
  watch: {
    content(newVal, oldVal) {
      if (newVal != oldVal) {
        clearTimeout(window.timer);
        window.timer = setTimeout(() => {
          console.log(newVal);
        }, 1000);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
