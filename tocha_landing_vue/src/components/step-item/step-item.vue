<script setup lang="ts">
  const props = defineProps<{
  stext: string
  sheader: string
}>()
</script>


<template>
    <div class="step-item__wrapper">
        <img class="step-item__icon" src="@/assets/step1.png">
    <div class="step-item__header">
        {{ sheader }}
    </div>
    <div class="step-item__text">
        {{ stext }}
    </div>
</div>
</template>
        
<style lang="scss" src="./step-item.scss"></style>