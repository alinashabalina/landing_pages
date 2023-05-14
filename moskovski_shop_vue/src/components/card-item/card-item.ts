import { defineComponent } from "vue";
import SizeItem from "../size-item/size-item.vue";

export default defineComponent({
  name: "CardItem",
  components: {
    SizeItem: SizeItem
  },
  props: {
    cheader: {
      type: String,
      required: true,
    },
    cprice: {
      type: String,
      required: true,
    },
    snumber1: {
      type: String,
      required: true,
    },
    snumber2: {
      type: String,
      required: true,
    },
    snumber3: {
      type: String,
      required: true,
    },
    snumber4: {
      type: String,
      required: true,
    },
  },
  setup() {},

  return: {},
});