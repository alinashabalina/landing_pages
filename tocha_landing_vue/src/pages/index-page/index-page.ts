import { defineComponent, ref } from "vue";
import PageFooter from "@/components/page-footer/page-footer.vue";
import PageHeader from "@/components/page-header/page-header.vue";
import AboutItem from  "@/components/about-item/about-item.vue";
import TariffItem from "@/components/tariff-item/tariff-item.vue";
import StepItem from "@/components/step-item/step-item.vue";
import ReviewItem from "@/components/review-item/review-item.vue";
import RegisterPopup from "@/components/register-popup/register-popup.vue";
import LoginPopup from "@/components/login-popup/login-popup.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    PageFooter: PageFooter,
    PageHeader: PageHeader,
    AboutItem: AboutItem,
    TariffItem: TariffItem,
    StepItem: StepItem,
    ReviewItem: ReviewItem,
    RegisterPopup: RegisterPopup,
    LoginPopup: LoginPopup,
  },
  setup() {
    const email = ref("")
    const onSubmit = () => {
      console.log(email.value);
      email.value=""
    };


    return {email, onSubmit}
  },
  
  return: {
  },
});