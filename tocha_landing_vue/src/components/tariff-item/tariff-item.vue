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
        
        <script lang="ts" src="./tariff-item.ts"></script>
        <style lang="scss" src="./tariff-item.scss">
        </style>