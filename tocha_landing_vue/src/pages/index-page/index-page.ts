import { defineComponent } from "vue";
import PageFooter from "@/components/page-footer/page-footer.vue";
import PageHeader from "@/components/page-header/page-header.vue";
import AboutItem from  "@/components/about-item/about-item.vue";
import TariffItem from "@/components/tariff-item/tariff-item.vue";
import StepItem from "@/components/step-item/step-item.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    PageFooter: PageFooter,
    PageHeader: PageHeader,
    AboutItem: AboutItem,
    TariffItem: TariffItem,
    StepItem: StepItem,
  },
  setup() {},

  methods: {
      getImage(name: String): String {
        const url = new URL(`./${name}.png`, import.meta.url)
        console.log(`for name=${name} url=${url}`)
        return url.href
    }
  },

  return: {
  },
});