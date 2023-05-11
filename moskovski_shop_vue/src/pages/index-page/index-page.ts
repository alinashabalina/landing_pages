import { defineComponent } from "vue";
import PageHeader from "@/components/page-header/page-header.vue";
import BreadcrumbItem from "@/components/breadcrumb-item/breadcrumb-item.vue";
import PageFooter from "@/components/page-footer/page-footer.vue";
import SortItem from "@/components/sort-item/sort-item.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    PageHeader: PageHeader,
    BreadcrumbItem: BreadcrumbItem,
    PageFooter:PageFooter,
    SortItem: SortItem,
  },
  setup() {},
  
  return: {
  },
});