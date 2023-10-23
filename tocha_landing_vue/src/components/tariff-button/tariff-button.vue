<script setup lang="ts">
  const props = defineProps<{
  btext: string
}>()
</script>


<template>
    <button class="tariff-button__wrapper">
        {{ btext }}
    </button>
</template>
        
<style lang="scss" src="./tariff-button.scss"></style>