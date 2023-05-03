import { defineComponent } from "vue";
import PageFooter from "@/components/page-footer/page-footer.vue";
import PageHeader from "@/components/page-header/page-header.vue";
import AboutItem from  "@/components/about-item/about-item.vue";
import TarifItem from "@/components/tarif-item/tarif-item.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    PageFooter: PageFooter,
    PageHeader: PageHeader,
    AboutItem: AboutItem,
    TarifItem: TarifItem,
  },
  setup() {},

  methods: {
      getImage(name: String) {
      return new URL(`./assets/${name}.png`, import.meta.url).href
    }
  },

  return: {
    getImage() {}
  },
});