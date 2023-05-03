<template>
  <IndexPage />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IndexPage from '@/pages/index-page/index-page.vue';
@Options({
    components: {
      IndexPage: IndexPage
    },
  })
  export default class App extends Vue {}
  </script>