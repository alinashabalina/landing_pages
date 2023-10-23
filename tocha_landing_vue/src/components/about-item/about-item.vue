<script setup lang="ts">
  const props = defineProps<{
  text: string
  header: string
  icon: string
}>()
</script>

<template>
<div class="item__wrapper">
    <img class="item__icon" src="@/assets/item1.png">
    <div class="item__info-container">
        <div class="item__info-header">{{ header }}</div>
        <div class="item__info-text">{{ text }}</div>
    </div>
</div>
    </template>
    
<style lang="scss" src="./about-item.scss"></style>