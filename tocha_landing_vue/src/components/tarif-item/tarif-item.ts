import { defineComponent } from "vue";

export default defineComponent({
  name: "TarifItem",
  props: {
    price: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    start: {
      type: String,
      required: true,
    }
  },
  components: {
  },
  setup() {},

  return: {},
});