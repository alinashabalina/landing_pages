import { defineComponent } from "vue";
import PageHeader from "@/components/page-header/page-header.vue";
import BreadcrumbItem from "@/components/breadcrumb-item/breadcrumb-item.vue";
import PageFooter from "@/components/page-footer/page-footer.vue";
import SortItem from "@/components/sort-item/sort-item.vue";
import CardItem from "@/components/card-item/card-item.vue";
import PageButton from "@/components/page-button/page-button.vue";
import PageNumber from "@/components/page-number/page-number.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    PageHeader: PageHeader,
    BreadcrumbItem: BreadcrumbItem,
    PageFooter:PageFooter,
    SortItem: SortItem,
    CardItem: CardItem,
    PageButton: PageButton,
    PageNumber: PageNumber,
  },
  setup() {},
  
  return: {
  },
});