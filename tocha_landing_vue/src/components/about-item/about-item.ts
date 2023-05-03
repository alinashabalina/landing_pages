import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutItem",
  props: {
    text: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    }
  },
  components: {
  },
  setup() {},

  return: {},
});