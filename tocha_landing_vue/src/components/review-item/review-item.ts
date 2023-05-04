import { defineComponent } from "vue";

export default defineComponent({
  name: "ReviewItem",
  props: {
    rheader: {
        type: String,
        required: true,
      },
    rtext: {
      type: String,
      required: true,
    },
    rname: {
        type: String,
        required: true,
    },
    rcompany: {
        type: String,
        required: true,
      },
  },
  components: {
  },
  setup() {},

  return: {},
});