<script setup lang="ts">
  const props = defineProps<{
  rheader: string
  rtext: string
  rname: string
  rcompany: string
}>()
</script>


<template>
    <div class="review-item__wrapper">
    <div class="review-item__container">
    <div class="review-item__header">
        {{ rheader }}
    </div>
    <div class="review-item__text">
        {{ rtext }}
    </div>
    <div class="review-item__client-container">
        <div class="review-item__client-data">
        <img src="@/assets/client1.png">
        <div class="review-item__client-info">
        <div class="review-item__name"> {{ rname }}</div>
        <div class="review-item__company"> {{ rcompany }}</div>
    </div>
    </div>
    </div>
</div>
</div>
</template>
        
<style lang="scss" src="./review-item.scss"></style>