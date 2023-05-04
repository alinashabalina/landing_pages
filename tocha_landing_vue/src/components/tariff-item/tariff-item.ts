import { defineComponent } from "vue";
import TariffButton from "../tariff-button/tariff-button.vue";
import TariffHeader from "../tariff-header/tariff-header.vue";

export default defineComponent({
  name: "TariffItem",
  props: {
    thtext: {
      type: String,
      required: true,
    },
    tbtext: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    start: {
      type: String,
      required: true,
    },
  },
  components: {
    TariffButton: TariffButton,
    TariffHeader: TariffHeader,
  },
  setup() {},

  return: {},
});