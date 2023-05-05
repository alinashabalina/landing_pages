import { defineComponent } from "vue";
import CloseButton from "../close-button/close-button.vue";
import RegisterButton from "../register-button/register-button.vue";

export default defineComponent({
  name: "RegisterPopup",
  props: {
  },
  components: {
    RegisterButton: RegisterButton,
    CloseButton: CloseButton,
  },
  setup() {},

  return: {},
});