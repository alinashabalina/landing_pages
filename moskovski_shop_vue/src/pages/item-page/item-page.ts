import { defineComponent } from "vue";
import PageHeader from "@/components/page-header/page-header.vue";
import BreadcrumbItem from "@/components/breadcrumb-item/breadcrumb-item.vue";
import PageFooter from "@/components/page-footer/page-footer.vue";
import PageButton from "@/components/page-button/page-button.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    PageHeader: PageHeader,
    BreadcrumbItem: BreadcrumbItem,
    PageFooter:PageFooter,
    PageButton: PageButton,
  },
  setup() {},
  
  return: {
  },
});