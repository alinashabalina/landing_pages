import { defineComponent } from "vue";

export default defineComponent({
  name: "BreadcrumbItem",
  components: {
  },
  props: {
    href: {
      type: String,
      required: true,
    },
    bctext: {
      type: String,
      required: true,
    },
  },
  setup() {},

  return: {},
});