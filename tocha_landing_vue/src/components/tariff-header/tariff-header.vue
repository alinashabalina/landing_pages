<script setup lang="ts">
  const props = defineProps<{
  htext: string
}>()
</script>


<template>
    <div class="tariff-header__wrapper">
        {{ htext }}
    </div>
</template>
        
<style lang="scss" src="./tariff-header.scss"></style>