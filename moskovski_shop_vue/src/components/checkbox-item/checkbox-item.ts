import { defineComponent } from "vue";

export default defineComponent({
  name: "CheckboxItem",
  components: {
  },
  props: {
    ltext: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  setup() {},

  return: {},
});