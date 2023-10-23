<script setup lang="ts">
import TariffButton from "../tariff-button/tariff-button.vue";
import TariffHeader from "../tariff-header/tariff-header.vue";
  const props = defineProps<{
  thtext: string
  tbtext: string
  price: string
  start: string
}>()
</script>


<template>
    <div class="tariff__wrapper">
        <TariffHeader :htext="thtext" />
        <div class="tariff__info-container">
            <div class="tariff__price">
                {{ price }}
            </div>
            <div class="tariff__start-price">
                {{ start }}
            </div>
        </div>
        <TariffButton class="tariff__button" :btext="tbtext"/>
    </div>
</template>
        
<style lang="scss" src="./tariff-item.scss"></style>