import { defineComponent } from "vue";

export default defineComponent({
  name: "StepItem",
  props: {
    step: {
      type: String,
      required: true,
    },
    sheader: {
      type: String,
      required: true,
    },
    stext: {
      type: String,
      required: true,
    }
  },
  components: {
  },
  setup() {},

  return: {},
});