import { defineComponent } from "vue";
import CheckboxItem from "../checkbox-item/checkbox-item.vue";

export default defineComponent({
  name: "MenuItem",
  data() {
    return {
      isVisible: false,
  }},
  components: {
    CheckboxItem: CheckboxItem,
  },
  props: {
    mitext: {
      type: String,
      required: true,
    },
    miid: {
      type: String,
      required: true,
    },
    milabel: {
      type: String,
      required: true,
    },
    miltext: {
      type: String,
      required: true,
    },
    miid1: {
      type: String,
      required: true,
    },
    milabel1: {
      type: String,
      required: true,
    },
    miltext1: {
      type: String,
      required: true,
    },
    miid2: {
      type: String,
      required: true,
    },
    milabel2: {
      type: String,
      required: true,
    },
    miltext2: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.isVisible = !this.isVisible
    }
  },
  setup() {},

  return: {},
});